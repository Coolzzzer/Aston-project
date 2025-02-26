import {URLs} from "../../../../constants/urls";
import navbarStyle from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <nav className={navbarStyle.menu}>
            <NavLink to={URLs.SIGN_UP} className={ ({isActive}) => `${navbarStyle.menu__link} ${isActive ? navbarStyle.menu__linkActive : ""}`}>
                Регистрация
            </NavLink>
            <NavLink to={URLs.HOME_PAGE} className={ ({isActive}) => `${navbarStyle.menu__link} ${isActive ? navbarStyle.menu__linkActive : ""}` }>
                Главная
            </NavLink>
        </nav>
    );
};