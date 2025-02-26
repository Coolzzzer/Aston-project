import logoStyle from"./logo.module.css";
import { Link } from 'react-router-dom';

export default function Logo() {

    return (
            <Link to="/" className={logoStyle.logo}>
                MovieFinder
            </Link>
    );
};