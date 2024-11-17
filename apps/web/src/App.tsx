import React from 'react';
import {FullEditor} from "@moki-editor/full-editor"
import {StyledRoot} from "./styled.ts";

const App = () => {

    return (
        <StyledRoot>
            <FullEditor/>
        </StyledRoot>
    );
};

export default App;
