// core
import React, { Component } from 'react';

// instruments
import Styles from './styles.scss';

export default class Main extends Component {

    render() {
        return (
            <div className={Styles.footer}>
                <div className={Styles.footer_upper}>
                    <div className={Styles.footer_select}>
                        <select className={Styles.footer_select_item}>
                            <option value="English">English</option>
                            <option value="Deutch">Deutch</option>
                            <option value="Spanish">Spanish</option>
                        </select>
                        <select className={Styles.footer_select_item}>
                            <option value="dollar">US Dollar</option>
                            <option value="euro">Euro</option>
                            <option value="grn">Grivna</option>
                        </select>
                    </div>
                    <div className={Styles.footer_upper_column}>
                        <ul className={Styles.footer_list}>
                            <li>Airbnb</li>
                            <li><a href="#">О нас</a></li>
                            <li><a href="#">Карьера</a></li>
                            <li><a href="#">Мы в процессе</a></li>
                            <li><a href="#">Правила</a></li>
                            <li><a href="#">Помощь</a></li>
                            <li><a href="#">Принадлежность, этнокультурные и другие различия</a></li>
                        </ul>
                    </div>
                    <div className={Styles.footer_upper_column}>
                        <ul className={Styles.footer_list}>
                            <li>Подробнее о нас</li>
                            <li><a href="#">Доверие и безопасность</a></li>
                            <li><a href="#">Бонус на путешествие</a></li>
                            <li><a href="#">Airbnb Citizen</a></li>
                            <li><a href="#">Деловые поездки</a></li>
                            <li><a href="#">Путеводители</a></li>
                            <li><a href="#">Airbnbmag</a></li>
                        </ul>
                    </div>
                    <div className={Styles.footer_upper_column}>
                        <ul className={Styles.footer_list}>
                            <li>Прием гостей</li>
                            <li><a href="#">Почему стоит принимать гостей</a></li>
                            <li><a href="#">Гостеприимство</a></li>
                            <li><a href="#">Как стать ответственным хозяином</a></li>
                        </ul>
                    </div>
                </div>
                <div className = { Styles.footer_lower }>
                    <div className = { Styles.footer_signature }>&copy; Airbnb, Inc.</div>
                    <div className = { Styles.footer_social }>
                        <ul className = { Styles.footer_list }>
                            <li><a href="#">Terms</a></li>
                            <li><a href="#">Privacy</a></li>
                            <li><a href="#">Site Map</a></li>
                            <li><span></span></li>
                            <li><span></span></li>
                            <li><span></span></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}