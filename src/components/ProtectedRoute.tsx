import {FC} from "react";
import { Navigate } from "react-router-dom";

interface Props {
    loggedIn: boolean;
    elements: React.ComponentType;
}

const ProtectedRouterElement: FC<Props> = ({elements: Component, ...props}) => {
    return (
        props.loggedIn ? <Component /> : <Navigate to="/"  />
    );
}

export default ProtectedRouterElement;