import contentStyle from "./content.module.css";
import { Outlet } from "react-router-dom";

export default function Content() {
    return (
        <main className={contentStyle.main}>
            <Outlet />
        </main>
    );
}