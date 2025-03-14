import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { URLs } from "@utils/constants/constants";
import { CardDataForPopup } from "@utils/types/types";
import popupStyle from "./popupCard.module.css";
import { ESC_KEY } from "@utils/constants/constants";
import { generateMovieDetails } from "@utils/functions/functions";

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
      if (e.key === ESC_KEY) {
        handleCloseModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  if (!data) {
    return null;
  }

  const movieDetails = generateMovieDetails(data);

  return (
    <div className={popupStyle.overlay} onClick={handleCloseModal}>
      <div
        className={popupStyle.popupContainer}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={popupStyle.popupHeader}>
          <h2>Детали фильма</h2>
        </div>
        <div className={popupStyle.popupContent}>
          <img src={data.Poster} alt="movie" className={popupStyle.popupImg} />
          <div className={popupStyle.popupInformation}>
            {movieDetails.map((detail) => (
              <p key={detail.label}>
                <b>{detail.label}:</b>{" "}
                {Array.isArray(detail.value)
                  ? detail.value.join(", ")
                  : detail.value}
              </p>
            ))}
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
