import "./header.css";
import Logo from "./logo/log";
import NavBar from "./navBar/NavBar";
import SideBar from "./sideBar/sideBar";

export default function Header() {

    return (
        <header className="head">
            <Logo />
            <NavBar />
            <SideBar />
        </header>
    );
};