import {URLs} from "@utils/constants/constants";
import sideBarStyle from "./sideBar.module.css";
import { useLocation, useNavigate} from 'react-router-dom';

export function SideBar() {
  const {pathname} = useLocation();
  const navigate = useNavigate();

  const handleNavigateToSignIn = () => {
      navigate(URLs.SIGN_IN); 
  }
 
  const handleNavigateToSignUp = () => {
      navigate(URLs.SIGN_UP);
  }

  return (
    <nav className={sideBarStyle.sideBar}>
        <button className={`${sideBarStyle.button} ${(pathname == URLs.SIGN_IN) ? sideBarStyle.buttonNone:""}`} onClick={handleNavigateToSignIn}>
          Вход
        </button>
        <button className={`${sideBarStyle.button} ${(pathname == URLs.SIGN_UP) ? sideBarStyle.buttonNone:""}`} onClick={handleNavigateToSignUp}>
          Регистрация
        </button>
    </nav>      
  );  
};