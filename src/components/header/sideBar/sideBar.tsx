import {URLs} from "../../../utils/constants/constants";
import sideBarStyle from "./sideBar.module.css";
import { Link } from 'react-router-dom';

export default function SideBar() {
  return (
    <nav className={sideBarStyle.sideBar}>
        <Link to={URLs.HOME_PAGE}> 
            <button className={sideBarStyle.button}>Вход</button>
        </Link>
        <Link to={URLs.SIGN_UP}> 
            <button className={sideBarStyle.button}>Регистрация</button>
        </Link>
    </nav>
  );  
};