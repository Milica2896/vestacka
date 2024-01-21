// Pocetna.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Pocetna.css';


const Pocetna = () => {
    const navigate = useNavigate();
    const [showInfo, setShowInfo] = useState(false);

    const handleInfoClick = () => {
        setShowInfo(true);
    }

    const handlePlayClick = () => {
        navigate('/ModeSelection');
    }

    const handleCloseInfo = () => {
        setShowInfo(false);
    }

    return (
        <div className="pocetna-container">
            
            <div className="content">
                <p className='novop'>MILLS GAME</p>
                <div className='dugmmici'>
                <button onClick={handlePlayClick} className="play-button">PLAY  </button> <br/>

             
                <button onClick={handleInfoClick} className="info-button">INFO</button>
                </div>

                {showInfo && (
                    <div className="info-div-container">
                        <p>
                            
"Mills" je fascinantna društvena igra koja spaja elemente strategije, taktičkog razmišljanja i veštine formiranja "mlina". Ova izazovna igra, sa svojim korenima u južnim delovima Evrope, brzo je osvojila srca igrača širom sveta zbog jednostavnosti pravila i dubine igre.

<p>Na elegantnoj 3x3 tabli, igrači postavljaju svoje drvene figure različitih boja, stvarajući taktičke maneuvre u cilju formiranja "mlina" - trojke figura iste boje duž jedne linije, bilo horizontalno ili vertikalno. Formiranje "mlina" daje igraču priliku da preduzme protivničku figuru sa table, što dodatno obogaćuje taktički aspekt igre.  </p>

<p>Pravila igre podrazumevaju postavljanje figura na prazna mesta na početku, nakon čega igrači naizmenično pomeraju svoje figure stvarajući dinamičan sukob mačke i miša. Tri figure iste boje u nizu čini "mlin", što omogućava igraču da odabere koju protivničku figuru želi ukloniti sa table.  </p>

"Igranje" završava kada jedan od igrača ostane sa manje od tri figure ili onemogući protivnika da formira "mlin". "Mills" nije samo igra, već izazov uma i strateško nadmetanje u kojem svaki potez ima duboko značenje. Njena lepota proizlazi iz jednostavnosti pravila i kompleksnosti taktičkih odluka, čineći svaku partiju jedinstvenim iskustvom. Ova igra poziva igrače da razvijaju svoje strategije i uživaju u dinamici taktičkog sukoba.
                        </p>
                        <button onClick={handleCloseInfo} className="close-button">Zatvori</button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Pocetna;