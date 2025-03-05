import userProfileStyle from "./userProfile.module.css";
import { useDispatch } from "react-redux";
import { logoutUser } from "@store/authSlice";

export default function UserProfile() {
    const dispatch = useDispatch();
    
    const handleLogOut = () => {
        dispatch(logoutUser());
    }
    return (
        <div className={userProfileStyle.userProfile}>
            <button className={userProfileStyle.buttonLeave} onClick={handleLogOut}>
                Выйти
            </button>
            <div className={userProfileStyle.userData}>
                <span>Александр</span>
                <span>email@mail.com</span>
            </div>
            <div className={userProfileStyle.userPhoto}></div>
        </div>
    );
}