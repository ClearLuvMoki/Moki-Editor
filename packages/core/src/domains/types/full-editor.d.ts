import type {JSONContent} from "@tiptap/core";
import {UploadParamsType} from "./upload";

export interface FullEditorProps {
    classNames?: {
        root?: string;
        toolbar?: string;
        editor?: string;
    }
    styles?: {
        root?: React.CSSProperties;
        toolbar?: React.CSSProperties;
        editor?: React.CSSProperties;
    }
    content?: string;
    onUpdate?: ({json, html, text}: {
        json: JSONContent;
        text: string;
        html: string;
        isEmpty: boolean;
    }) => void;
    autofocus?: "start" | "end" | "all" | number | boolean | null;
    hiddenToast?: boolean;
    onUploadFile?: (params: UploadParamsType) => Promise<string>;
}