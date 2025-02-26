import navbarStyle from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <nav className={navbarStyle.menu}>
            <NavLink to="/signup" className={ ({isActive}) => `${navbarStyle.menu__link} ${isActive ? navbarStyle.menu__linkActive : ""}`}>
                Регистрация
            </NavLink>
            <NavLink to="/" className={ ({isActive}) => `${navbarStyle.menu__link} ${isActive ? navbarStyle.menu__linkActive : ""}` }>
                Главная
            </NavLink>
        </nav>
    );
};