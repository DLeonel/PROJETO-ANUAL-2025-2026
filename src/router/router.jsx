import { createBrowserRouter } from "react-router-dom";

//importando ás paginas a serem renderizadas...
import RouterApp from "./RouterApp";
import NotFoud from "../pages/not-foud/NotFoud";
import About from "../pages/about/About";
import Team from "../pages/team/Team";
import Markets from "../pages/markets/markets";
import Technology from "../pages/technology/technology";
import Impact from "../pages/impact/Impact";
import Investors from "../pages/investors/Investors";
import Media from "../pages/media/media";

import Admin from "../pages/admin/admin"

const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <NotFoud />,//será apresentada em caso de uma url inesperada...
        element: <RouterApp />,
        children: [
            {   index: true,    element: < About /> },
            {   path: "Markets",  element:  <Markets /> },
            {   path: "Technology",  element:    <Technology /> },
            {   path: "Team",  element: <Team /> },
            {   path: "Impact", element: < Impact />},
            {   path: "Media", element: <Media /> },
            {   path: "Investors", element: <Investors />}
        ]
    },
    {
        path: "admin",
        children: [
            {   index: true,    element: <Admin />  }
        ]
    },
    {  
        path: "*", element: <NotFoud />
    }
]);

export default router;
