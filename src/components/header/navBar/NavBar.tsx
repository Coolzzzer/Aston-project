import {URLs} from "@utils/constants/constants";
import navbarStyle from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

export default function NavBar() {

    return (
        <nav className={navbarStyle.menu}>
            <NavLink to={URLs.HISTORY} className={ ({isActive}) => `${navbarStyle.menu__link} ${isActive ? navbarStyle.menu__linkActive : ""}`}>
                История
            </NavLink>
            <NavLink to={URLs.FAVORITES} className={ ({isActive}) => `${navbarStyle.menu__link} ${isActive ? navbarStyle.menu__linkActive : ""}`}>
                Избранное
            </NavLink>
        </nav>
    );
};