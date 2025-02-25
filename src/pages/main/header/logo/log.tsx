import "./logo.css";
import { Link } from 'react-router-dom';

export default function Logo() {

    return (
            <Link to="/" className="logo">
                MovieFinder
            </Link>
    );
};