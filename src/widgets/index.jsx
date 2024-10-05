import React from "react";
import styles from './index.module.css'
import img1 from '../assets/FoodCat/img1.png'
import img2 from '../assets/FoodCat/img2.png'
import img3 from '../assets/FoodCat/img3.png'
import img4 from '../assets/FoodCat/img4.png'
import img5 from '../assets/FoodCat/img5.png'
import img6 from '../assets/FoodCat/img6.png'
import img7 from '../assets/FoodCat/img7.png'
import img8 from '../assets/FoodCat/img8.png'
import img9 from '../assets/FoodCat/img9.png'
import img10 from '../assets/FoodCat/img10.png'
import img11 from '../assets/FoodCat/img11.png'
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
