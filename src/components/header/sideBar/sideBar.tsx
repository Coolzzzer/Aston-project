import {URLs} from "../../../utils/constants/constants";
import sideBarStyle from "./sideBar.module.css";
import { Link, useLocation } from 'react-router-dom';

export default function SideBar() {
  const {pathname} = useLocation();

  return (
    <nav className={sideBarStyle.sideBar}>
        <Link to={URLs.HOME_PAGE}> 
            <button className={`${sideBarStyle.button} ${(pathname == URLs.SIGN_IN) ? sideBarStyle.buttonNone:""}`}>
              Вход
            </button>
        </Link>
        <Link to={URLs.SIGN_UP}> 
            <button className={`${sideBarStyle.button} ${(pathname == URLs.SIGN_UP) ? sideBarStyle.buttonNone:""}`}>
              Регистрация
            </button>
        </Link>
    </nav>
  );  
};