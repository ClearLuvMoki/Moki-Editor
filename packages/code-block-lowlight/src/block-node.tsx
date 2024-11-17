import {
  Combobox,
  type ComboboxProps,
  FluentProvider,
  teamsDarkTheme,
  useComboboxFilter,
} from "@fluentui/react-components";
import { NodeViewContent, NodeViewWrapper } from "@moki-editor/editor";
import React from "react";
import { StyledBlockNodeHeader, StyledCode } from "./styled";

const CodeBlockBlockNode = ({
  node: {
    attrs: { language: defaultLanguage = "plaintext" },
  },
  updateAttributes,
  extension,
}: any) => {
  const options = (extension?.options?.lowlight?.listLanguages() || []) as string[];
  const [query, setQuery] = React.useState<string>(defaultLanguage);

  const children = useComboboxFilter(query, options, {
    noOptionsMessage: "No languages match your search.",
  });

  const onOptionSelect: ComboboxProps["onOptionSelect"] = (e, data) => {
    setQuery(data.optionText ?? "");
    setTimeout(() => {
      updateAttributes?.({ language: data.optionText });
    }, 0);
  };

  return (
    <NodeViewWrapper className="code-block">
      <StyledCode>
        <StyledBlockNodeHeader>
          <FluentProvider theme={teamsDarkTheme}>
            <Combobox
              size="small"
              open={true}
              placeholder="Select a language"
              onChange={(ev) => setQuery(ev.target.value)}
              value={query}
              onOptionSelect={onOptionSelect}
            >
              {children}
            </Combobox>
          </FluentProvider>
        </StyledBlockNodeHeader>
        <NodeViewContent as="code" />
      </StyledCode>
    </NodeViewWrapper>
  );
};

export default CodeBlockBlockNode;
