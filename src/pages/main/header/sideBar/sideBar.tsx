import sideBarStyle from "./sideBar.module.css";
import { Link } from 'react-router-dom';

export default function SideBar() {
  return (
    <nav className={sideBarStyle.sideBar}>
        <Link to="/"> 
            <button className={sideBarStyle.button}>Вход</button>
        </Link>
        <Link to="/signup"> 
            <button className={sideBarStyle.button}>Регистрация</button>
        </Link>
    </nav>
  );  
};