import headerStyle from "./header.module.css";
import sideBarStyle from "./sideBar/sideBar.module.css";
import Logo from "./logo/log";
import NavBar from "./navBar/NavBar";
import SideBar from "./sideBar/sideBar";
import UserProfile from "./userProfile/userProfile";
import ProtectedRouterElement from "@components/ProtectedRoute";
import { MyContext } from "@components/MyContext";
import { useContext } from "react";

export default function Header() {
    const {loggedIn} = useContext(MyContext);

    return (
        <header className={headerStyle.head}>
            <Logo />
            <ProtectedRouterElement loggedIn={loggedIn} elements={NavBar} />
            <ProtectedRouterElement loggedIn={!loggedIn} elements={SideBar} />
            <ProtectedRouterElement loggedIn={loggedIn} elements={UserProfile} />
        </header>
    );
};