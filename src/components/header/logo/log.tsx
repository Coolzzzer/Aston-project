import {URLs} from "@utils/constants/constants";
import logoStyle from"./logo.module.css";
import { Link } from 'react-router-dom';

export default function Logo() {

    return (
            <Link to={URLs.HOME_PAGE} className={logoStyle.logo}>
                MovieFinder
            </Link>
    );
};