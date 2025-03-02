import headerStyle from "./header.module.css";
import Logo from "./logo/log";
import NavBar from "./navBar/NavBar";
import SideBar from "./sideBar/sideBar";
import UserProfile from "./userProfile/userProfile";
import { MyContext } from "@components/MyContext";
import { useContext } from "react";

export default function Header() {
    const {loggedIn} = useContext(MyContext);

    return (
        <header className={headerStyle.head}>
            <Logo /> 
            {loggedIn && <NavBar />}
            {loggedIn && <UserProfile />}
            {!loggedIn && <SideBar />}
        </header>
    );
};