//import style from "./header.module.css";
import { Nav } from "./fragments/Nav";

function Header () {

    return (
        <header>
            <h1>NexaTeach</h1>

            <nav>
                <Nav />
            </nav>
        </header>
        )
}

export default Header;