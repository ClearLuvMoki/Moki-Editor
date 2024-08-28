import "./index.css"
import React from 'react';
import {NextUIProvider} from "@nextui-org/react";
import ReactDOM from 'react-dom/client';
import {ThemeProvider as NextThemesProvider} from "next-themes";
import App from './App';

const rootEl = document.getElementById('root')!;
const root = ReactDOM.createRoot(rootEl);
root.render(
  <NextUIProvider className={"w-full h-full"}>
      <NextThemesProvider attribute="class"  defaultTheme="light" enableSystem={false}>
        <App/>
      </NextThemesProvider>
  </NextUIProvider>,
);
