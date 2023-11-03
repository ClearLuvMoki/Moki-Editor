/**
 * Author: Moki
 * Date: 2023-10-08
 * Todo: 快捷键唤起插入菜单
 **/
import {Node} from '@tiptap/core';
import {PluginKey} from 'prosemirror-state';
import Suggestion from "@tiptap/suggestion";

const createSlashExtension = (char: string) => {
    const extensionName = `quickInsert-${char}`;


    const slashExtension = Node.create({
        name: extensionName,
        // 解析器的解析顺序
        priority: 200,

        addOptions() {
            return {
                char: "/",
                pluginKey: "slash",
                items: [],
            };
        },

    })

    return Node.create({
        name: extensionName,
        priority: 200,
        addOptions() {
            return {
                char: "/",
                pluginKey: "slash",
                items: [],
            };
        },

        addProseMirrorPlugins() {
            return [
                Suggestion({
                    editor: this.editor,
                    char: this.options.char,
                    pluginKey: new PluginKey(this.options.pluginKey),

                    command: ({editor, props}) => {
                        const {state, dispatch} = editor.view;
                        const {$head, $from} = state.selection;

                        const end = $from.pos;
                        const from = $head?.nodeBefore?.text
                            ? end -
                            $head.nodeBefore.text.substring(
                                $head.nodeBefore.text.indexOf("/")
                            ).length
                            : $from.start();

                        const tr = state.tr.deleteRange(from, end);
                        dispatch(tr);
                        props?.action?.(editor, props.user);
                        editor?.view?.focus();
                    },

                    items: ({query}) => {
                        if (!query) return this.options.items;

                        const filter: any[] = this.options.items.filter((item: any) => {
                            if ("divider" in item) return true;

                            return item.text.includes(query) || item.slash.includes(query);
                        });

                        if (filter.every((item: any) => "divider" in item)) return [];

                        return filter.filter((item, index, arr) => {
                            if (!("divider" in item)) return true;

                            return arr[index + 1] ? !("divider" in arr[index + 1]) : false;
                        });
                    },

                    render: () => {
                        return {

                        }
                    }
                })
            ]
        }
    })
}

export const EnSlashExtension = createSlashExtension('/');
