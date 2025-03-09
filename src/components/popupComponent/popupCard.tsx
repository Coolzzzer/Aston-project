import { useParams } from "react-router-dom";
import { URLs } from "@utils/constants/constants";
import popupStyle from "./popupCard.module.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { CardDataForPopup } from "@utils/types/types";


export function PopupCard() {
    const [data, setData] = useState<CardDataForPopup>();
    const navigate = useNavigate();
    const params = useParams();

    const handleCloseModal = () => {
        navigate(`${URLs.HOME_PAGE}`);
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const responce = await fetch(`${URLs.GET_CARD_DATA}${params.id}`);
                const jsonData = await responce.json();
                setData(jsonData);
            } catch {
                console.error('Error fetching data:', Error);
            }
        };
        fetchData();
}, []);

    if(!data) {
        return null;
    }

    return (
        <div className={popupStyle.popupMain}>
            <div className={popupStyle.popupContainer}>
                <div className={popupStyle.popupHeader}>
                    <h3>Детали фильма</h3>
                    <button onClick={handleCloseModal}>X</button>
                </div>
                <div className={popupStyle.popupContent}>
                    <img src={data.Poster} alt="movie" className={popupStyle.popupImg}/>
                    <div className={popupStyle.popupInformation}>
                        <p><b>{data.Title}</b></p>
                        <p><b>Year :</b> {data.Year}</p>
                        <p><b>Genres :</b> {data.Genre}</p>
                        <p><b>Director :</b> {data.Director}</p>
                        <p><b>Casts :</b> {data.Actors}</p>
                        <p><b>Country :</b> {data.Country}</p>
                        <p><b>IMD Rating :</b> {data.Ratings[0].Value}</p>
                    </div>
                </div>
                <div className={popupStyle.popupFooter}>
                    <button className={popupStyle.buttonClose} onClick={handleCloseModal}>Закрыть</button>
                </div>
            </div>
        </div>
    );
}