import popupStyle from "./popupCard.module.css";

export function PopupCard() {

    

    return (
        <div className={popupStyle.popupMain}>
            <div className={popupStyle.popupContainer}>
                <div className={popupStyle.popupHeader}>
                    <h3>Детали фильма</h3>
                    <button>X</button>
                </div>
                <div className={popupStyle.popupContent}>
                    <img src="#" alt="movie" className={popupStyle.popupImg}/>
                    <div className={popupStyle.popupInformation}>
                        <p><b>Batman Begins</b></p>
                        <p><b>Year :</b> 2005</p>
                        <p><b>Genres </b> Action, Adventure</p>
                        <p><b>Director :</b> Christopher Nolan </p>
                        <p><b>Casts :</b> Christian Bale, Michael Caine</p>
                        <p><b>Synopsis :</b> Batman begins his fight to free crime.</p>
                        <p><b>BIMDB Rating :</b> 8.2/10 b</p>
                    </div>
                </div>
                <div className={popupStyle.popupFooter}>
                    <button className={popupStyle.buttonClose}>Закрыть</button>
                </div>
            </div>
        </div>
    );
}