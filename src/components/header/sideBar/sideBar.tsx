import {URLs} from "@utils/constants/constants";
import sideBarStyle from "./sideBar.module.css";
import { useLocation, useNavigate } from 'react-router-dom';
import { MyContext } from "@components/MyContext";
import { useContext } from "react";

export default function SideBar() {
  const {pathname} = useLocation();
  const navigate = useNavigate();
  const {loggedIn, setLoggedIn} = useContext(MyContext);

  const handleLogin = () => {
      if(loggedIn) {
          setLoggedIn(false);
      } else {
          setLoggedIn(true);
      }
  }

  const handleNavigateToSignUp = () => {
      navigate("/signup");
  }

  return (
    <nav className={sideBarStyle.sideBar}>
        <button className={`${sideBarStyle.button} ${(pathname == URLs.SIGN_IN) ? sideBarStyle.buttonNone:""}`} onClick={handleLogin}>
          Авторизоваться
        </button>
        <button className={`${sideBarStyle.button} ${(pathname == URLs.SIGN_UP) ? sideBarStyle.buttonNone:""}`} onClick={handleNavigateToSignUp}>
          Регистрация
        </button>
    </nav>
  );  
};