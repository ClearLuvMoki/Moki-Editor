/**
 * Author: Moki
 * Date: 2023-10-08
 * Todo: 快捷键唤起插入菜单
 **/
import {Node} from '@tiptap/core';
import {PluginKey} from 'prosemirror-state';

const createSlashExtension = (char: string) => {
    const extensionName = `quickInsert-${char}`;
    const extensionPluginKey = new PluginKey('quickInsert');


    const slashExtension = Node.create({
        name: extensionName,
        // 解析器的解析顺序
        priority: 200,
        addOptions() {
            return {
                HTMLAttributes: {},
                suggestion: {
                    char: char,
                    pluginKey: extensionPluginKey,
                    command: ({editor, props}) => {
                        const {state, dispatch} = editor.view;
                        const {$head, $from, $to} = state.selection;
                        //
                        console.log(12)
                        // // 删除快捷指令
                        // const end = $from.pos;
                        // const from = $head.nodeBefore
                        //     ? end - $head.nodeBefore.text.substring($head.nodeBefore.text.indexOf(char)).length
                        //     : $from.start();
                        //
                        // const tr = state.tr.deleteRange(from, end);
                        // dispatch(tr);
                        //
                        // props?.action(editor, props.user);
                        // editor?.view?.focus();
                    },
                }
            }

        }
    })
}

export const EnSlashExtension = createSlashExtension('/');
