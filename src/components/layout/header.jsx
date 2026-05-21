import { Link } from "react-router-dom";
/**Usado apenas durante o desenvolvimento,
 * para facilitar a navegação entre as páginas,
 * visto que o menu lateral não é funcional.
 */

function Header() {

    return (
        <header>
            <ul>
                {/*paginas ao meu encargo*/}
                <li><Link to="/">About</Link></li>
                <li><Link to="Markets">Markets</Link></li>
                <li><Link to="Technology">Technology</Link></li>
                <li><Link to="NotFound">NotFound</Link></li>
            </ul>
        </header>
    )
}

export default Header;