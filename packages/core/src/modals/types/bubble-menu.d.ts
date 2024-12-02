import type {Editor} from "@tiptap/react";

export interface BubbleMenuProps {
    editor: Editor | null;
    appendTo?: React.RefObject<any>
    shouldHide?: boolean
}
