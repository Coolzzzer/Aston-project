import headerStyle from "./header.module.css";
import Logo from "./logo/log";
import NavBar from "./navBar/NavBar";
import { SideBar } from "./sideBar/sideBar";
import UserProfile from "./userProfile/userProfile";
import { useSelector } from "react-redux";
import { getLoggedIn } from "@store/getLoggedIn";

export default function Header() {
    const loggedIn = useSelector(getLoggedIn);

    return (
        <header className={headerStyle.head}>
            <Logo />
            {loggedIn && <NavBar />}
            {loggedIn && <UserProfile />}
            {!loggedIn && <SideBar />}
        </header>
    );
}