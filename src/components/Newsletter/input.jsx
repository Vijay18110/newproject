import React from "react";
import styles from './index.module.css'
import { PiTelegramLogo } from "react-icons/pi";
const NewsLatter = () => {
    return < >
        <div className={styles.newsLattercont}>
            <div className={styles.iconcont} >
                <PiTelegramLogo />
            </div>
            <div className={styles.inputcont}>
                <input type="text" placeholder="Enter your emails" />
            </div>
            <div className={styles.btncont}> subcribe</div>

        </div>

    </>;
};

export default NewsLatter;
