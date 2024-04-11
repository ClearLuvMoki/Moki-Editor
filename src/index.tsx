import "./tailwind.css"
import {NextUIProvider} from "@nextui-org/react";
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
    <NextUIProvider className="w-full h-full">
        <App/>
    </NextUIProvider>,
);
