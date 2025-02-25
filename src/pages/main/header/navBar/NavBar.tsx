import "./NavBar.css";
import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <nav className="menu">
            <NavLink to="/signup" className={ ({isActive}) => `menu__link ${isActive ? "menu__link_active" : ""}`}>
                Регистрация
            </NavLink>
            <NavLink to="/" className={ ({isActive}) => `menu__link ${isActive ? "menu__link_active" : ""}`}>
                Главная
            </NavLink>
        </nav>
    );
};