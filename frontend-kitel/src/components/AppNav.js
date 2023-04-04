import { Link } from "react-router-dom";

import './AppNav.css';

const AppNav = () => {


    return (
        <nav className="mainNav">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link to="/aboutus">O mnie</Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link to="/blog">Blog</Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link to="/contact">Kontakt</Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link to="/galery">Galeria</Link>
                </li>
            </ul>
            <ul>
                <li>
                <Link to="/shop">Sklep</Link>
                </li>
            </ul>

        </nav>
    );
}

export default AppNav;