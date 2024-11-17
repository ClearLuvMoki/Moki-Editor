import { FluentProvider, webLightTheme } from "@fluentui/react-components";
import { useEditor } from "@moki-editor/editor";
import React, { useState } from "react";
import GlobalContextProvider, {
  type ExcalidrawModalState,
  type FlowModalState,
  type MindModalState,
} from "./context";
import { FullExtensions } from "./extensions";
import { StyledEditor, StyledRoot } from "./styled";
import Toolbar from "./toolbar";

export const FullEditor = () => {
  const editor = useEditor({
    extensions: FullExtensions,
  });
  const [excalidrawModalState, setExcalidrawModalState] = useState<ExcalidrawModalState>({
    open: false,
    data: null,
  });
  const [flowModalState, setFlowModalState] = useState<FlowModalState>({
    open: false,
    data: null,
  });
  const [mindModalState, setMindModalState] = useState<MindModalState>({
    open: false,
    data: null,
  });

  return (
    <FluentProvider theme={webLightTheme}>
      <GlobalContextProvider
        editor={editor}
        excalidrawModalState={excalidrawModalState}
        flowModalState={flowModalState}
        mindModalState={mindModalState}
        setMindModalState={setMindModalState}
        setFlowModalState={setFlowModalState}
        setExcalidrawModalState={setExcalidrawModalState}
      >
        <StyledRoot>
          <Toolbar />
          <StyledEditor editor={editor} />
        </StyledRoot>
      </GlobalContextProvider>
    </FluentProvider>
  );
};
