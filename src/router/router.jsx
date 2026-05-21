import { createBrowserRouter } from "react-router-dom";

//importando ás paginas a serem renderizadas...
import RouterApp from "./RouterApp";
import NotFoud from "../pages/not-foud/NotFoud";
import About from "../pages/about/About";
import Team from "../pages/team/Team";
import Markets from "../pages/markets/Markets";
import Technology from "../pages/technology/Technology";
import Impact from "../pages/impact/Impact";
import Investors from "../pages/investors/Investors";
import Media from "../pages/media/Media";

import Admin from "../pages/admin/Admin";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RouterApp />,
        errorElement: <NotFoud />,//será apresentada em caso de uma url inesperada...
        children: [
            {   index: true,    element: <About /> },
            {   path: "Markets",  element:  <Markets /> },
            {   path: "Technology",  element:    <Technology /> },
            {   path: "Team",  element: <Team /> },
            {   path: "Impact", element: <Impact />},
            {   path: "Media", element: <Media /> },
            {   path: "Investors", element: <Investors />}
        ]
    },
    {
        path: "Admin",
        children: [
            {   index: true,    element: <Admin />  }
        ]
    },
]);

export default router;
