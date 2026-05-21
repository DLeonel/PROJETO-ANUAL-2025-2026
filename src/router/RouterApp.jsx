import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header";

function RouterApp () {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default RouterApp;