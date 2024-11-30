import './App.css';
import "@moki/editor/index.css"
import {FullEditor} from "@moki/editor"

const App = () => {
    return (
        <>
            <FullEditor
                content={"<p>1212</p>"}
            />
            <button onClick={() => {}}>demo</button>
        </>
    );
};

export default App;
