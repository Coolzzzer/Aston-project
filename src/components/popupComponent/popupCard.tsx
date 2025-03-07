import { useDispatch, useSelector } from "react-redux";
import popupStyle from "./popupCard.module.css";
import { closeModal } from "@store/popupSlice";
import { getModal } from "@store/getModal";

export function PopupCard() {
    const {isOpen, cardData} = useSelector(getModal);
    const dispatch = useDispatch();

    const handleCloseModal = () => {
        dispatch(closeModal());
    }

    if(!isOpen) {
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
                    <img src={cardData?.Poster} alt="movie" className={popupStyle.popupImg}/>
                    <div className={popupStyle.popupInformation}>
                        <p><b>{cardData?.Title}</b></p>
                        <p><b>Year :</b> {cardData?.Year}</p>
                        <p><b>Type :</b> {cardData?.Type}</p>
                        <p><b>Director :</b> Christopher Nolan </p>
                        <p><b>Casts :</b> Christian Bale, Michael Caine</p>
                        <p><b>Synopsis :</b> Batman begins his fight to free crime.</p>
                        <p><b>BIMDB Rating :</b> 8.2/10 b</p>
                    </div>
                </div>
                <div className={popupStyle.popupFooter}>
                    <button className={popupStyle.buttonClose} onClick={handleCloseModal}>Закрыть</button>
                </div>
            </div>
        </div>
    );
}