import type {Editor as CoreEditor} from "@tiptap/core/dist/Editor";

export interface ModalProps {
    editor?: CoreEditor | null;
    data?: any;
}