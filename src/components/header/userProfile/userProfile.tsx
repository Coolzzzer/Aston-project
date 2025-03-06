import userProfileStyle from "./userProfile.module.css";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "@store/authSlice";
import { getUser } from "@store/getUser";

export default function UserProfile() {
    const dispatch = useDispatch();
    const auth = useSelector(getUser);
    
    const handleLogOut = () => {
        dispatch(logoutUser()); 
    }
    return (
        <div className={userProfileStyle.userProfile}>
            <button className={userProfileStyle.buttonLeave} onClick={handleLogOut}>
                Выйти
            </button>
            <div className={userProfileStyle.userData}>
                <span>{auth?.name}</span>
                <span>{auth?.email}</span>
            </div>
            <div className={userProfileStyle.userPhoto}></div>
        </div>
    );
}