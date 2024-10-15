import React from "react";
import styles from './index.module.css'

const FCard = ({ img, items, name, bg }) => {
    return <div style={{ backgroundColor: `${bg}` }} className={styles.cardcont}>
        <div className={styles.imgCont}>
            <img src={img} alt="" />
        </div>
        <h2>{name}</h2>
        <p>{items}items</p>
    </div>;
};

export default FCard;
