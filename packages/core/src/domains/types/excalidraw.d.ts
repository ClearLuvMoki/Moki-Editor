import {ExcalidrawElement} from "@excalidraw/excalidraw/types/element/types";
import {AppState, BinaryFiles} from "@excalidraw/excalidraw/types/types";

export interface  ExcalidrawDataProps {
    elements: readonly ExcalidrawElement[],
    appState?: AppState,
    files?: BinaryFiles,
}