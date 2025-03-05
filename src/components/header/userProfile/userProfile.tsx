import userProfileStyle from "./userProfile.module.css";
import { RootState } from "@store/store"; 
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "@store/authSlice";

export default function UserProfile() {
    const dispatch = useDispatch();
    const auth = useSelector((state: RootState) => state.auth.user);
    
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