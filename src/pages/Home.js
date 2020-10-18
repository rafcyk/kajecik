import React from 'react';
import {Link} from 'react-router-dom'

import Notebook from '../images/notebook.jpg';
import Poems from '../images/poems.jpg';
import Media from '../images/media.jpg';
import Facebook from '../images/fb.png';
import Arrow from '../images/arrow.png';

const Home = () => {
    return (
        <main>
            <div className="box">
                <div className="box-image">
                    <img src={Notebook} alt=""/>
                </div>

                <div className="box-text">
                    <p>Witaj na stronie, na której możesz poczytać moje wiersze. Pojawiają się czasem często, czasem rzadko ale zawsze w pewnym momencie zyskuję wenę i mogę tworzyć. Tworzę je hobbystycznie w wolnym czasie. Wiersze nie posiadają tytułów mimo to myślę, że każdy znajdzie tu coś dla siebie. Niektóre poważne, niektóre lżejsze. Mam tylko nadzieję, że odnajdziesz coś dla siebie.</p>
                </div>
            </div>

            <div className="box">
                <div className="box-image">
                    <img src={Poems} alt=""/>
                </div>

                <div className="box-text">
                    <p>Zachęcam Cię do poczytania moich wierszy i własnych rozmyśleń nad nimi. Kliknij niżej, żeby przenieść się do wierszy :)</p>
                    <Link to = '/poems'>Wiersze <img src={Arrow} alt=""/> </Link>
                </div>
            </div>

            <div className="box">
                <div className="box-image">
                    <img src={Media} alt=""/>
                </div>

                <div className="box-text">
                    <p>Jeśli chciałbyś sprawdzić mojego Facebooka, żeby przeczytać starsze wiersze to kliknij niżej. Możesz się tam również ze mną skontakować jeśli miałbyś jakieś pytania.</p>
                    <a href = 'https://www.facebook.com/Kajecik-Z%C5%82amanego-My%C5%9Blnika-265519384153347' target = '_blank' rel="noopener noreferrer">Sprawdź <img src={Facebook} alt=""/></a>
                </div>

            </div>
        </main>
    );
};

export default Home;