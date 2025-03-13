import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { URLs } from "@utils/constants/constants";
import { CardDataForPopup } from "@utils/types/types";
import popupStyle from "./popupCard.module.css";

export function PopupCard() {
  const [data, setData] = useState<CardDataForPopup | null>(null);
  const { id } = useParams();
  const navigate = useNavigate();

  const handleCloseModal = () => {
    if (location.pathname.includes(URLs.FAVORITES)) {
      navigate(URLs.FAVORITES);
    } else {
      navigate(URLs.HOME_PAGE);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${URLs.GET_CARD_DATA}${id}`);
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [id]);


  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleCloseModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  if (!data) {
    return null;
  }

  return (
    <div className={popupStyle.overlay} onClick={handleCloseModal}>
      <div className={popupStyle.popupContainer} onClick={(e) => e.stopPropagation()}>
        <div className={popupStyle.popupHeader}>
          <h2>Детали фильма</h2>
        </div>
        <div className={popupStyle.popupContent}>
          <img src={data.Poster} alt="movie" className={popupStyle.popupImg} />
          <div className={popupStyle.popupInformation}>
            <p><b>{data.Title}</b></p>
            <p><b>Year:</b> {data.Year}</p>
            <p><b>Genres:</b> {data.Genre}</p>
            <p><b>Director:</b> {data.Director}</p>
            <p><b>Casts:</b> {data.Actors}</p>
            <p><b>Country:</b> {data.Country}</p>
            <p><b>IMD Rating:</b> {data.Ratings[0].Value}</p>
          </div>
        </div>
        <div className={popupStyle.popupFooter}>
          <button className={popupStyle.buttonClose} onClick={handleCloseModal}>
            Закрыть
          </button>
        </div>
      </div>
    </div>
  );
}