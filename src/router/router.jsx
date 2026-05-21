import { createBrowserRouter } from "react-router-dom";

//importando ás paginas a serem renderizadas...
import RouterApp from "./RouterApp";
import NotFoud from "../pages/not-foud/NotFoud";
import About from "../pages/about/About";
import Markets from "../pages/markets/Markets";
import Technology from "../pages/technology/Technology";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RouterApp />,
        errorElement: <NotFoud />,//será apresentada em caso de uma url inesperada...
        children: [
            {   index: true,    element: <About /> },
            {   path: "Markets",  element:  <Markets /> },
            {   path: "Technology",  element:    <Technology /> },
        ]
    }
]);

export default router;
