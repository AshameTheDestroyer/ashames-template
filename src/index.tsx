import { createContext } from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router-dom";

import "./index.scss";

import "./constants/Extensions.ts";
import Home from "./pages/Home/Home";

type MainStateProps = {};
export const MainContext = createContext<MainStateProps | null>(null);

ReactDOM.createRoot(document.querySelector("#root") ?? document.body).render(
    <HashRouter basename={window.location.pathname || ""}>
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    </HashRouter>
);