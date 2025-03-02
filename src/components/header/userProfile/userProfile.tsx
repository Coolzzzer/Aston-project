import userProfileStyle from "./userProfile.module.css";
import { MyContext } from "@components/MyContext";
import { useContext } from "react";

export default function UserProfile() {
    const {loggedIn, setLoggedIn} = useContext(MyContext);

    const handleLogin = () => {
        setLoggedIn(!loggedIn);
    }

    return (
        <div className={userProfileStyle.userProfile}>
            <button className={userProfileStyle.buttonLeave} onClick={handleLogin}>
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