import './App.css';
import "@clearluv/editor/index.css"
import {FullEditor} from "@clearluv/editor"

const App = () => {
    return (
        <>
            <FullEditor
                content={"<p>1212</p>"}
            />
        </>
    );
};

export default App;
