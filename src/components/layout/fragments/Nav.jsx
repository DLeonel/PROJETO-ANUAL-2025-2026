import { Link } from "react-router-dom";

export const  Nav = () => {

    return (
        <ul>
            {/*pages primary*/}
            <li><Link to="/">About</Link></li>
            <li><Link to="Impact">Impact</Link></li>
            <li><Link to="Investors">Investors</Link></li>
            <li><Link to="Markets">Markets</Link></li>
            <li><Link to="Technology">Technology</Link></li>
            <li><Link to="Team">Team</Link></li>
            <li><Link to="Media">Media</Link></li>
        </ul>
    );
}

export const NavAdmin = () => {

    /*{/*ADMIN/}
        <ul> <li><Link to="Admin">Admin</Link></li></ul>
    */
}
