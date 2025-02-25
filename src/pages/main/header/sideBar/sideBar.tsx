import "./sideBar.css";
import { Link } from 'react-router-dom';

export default function SideBar() {
  return (
    <nav className="sideBar">
        <Link to="/"> 
            <button className="button">Вход</button>
        </Link>
        <Link to="/signup"> 
            <button className="button button__registration">Регистрация</button>
        </Link>
    </nav>
  );  
};