import React, { useState } from "react";
import styles from './index.module.css';
import Button from '../../widgets/button'
import Button1 from "../../widgets/Button1";
import { IoCartOutline, IoStar } from "react-icons/io5";
const css = {
    padding: ".4rem .5rem",
    border: "none",
    marginTop: "10px",
    padding: "10px 20px",
    backgroundColor: "rgb(222, 249, 236)",
    color: "#3bb77e",
    borderRadius: " 5px",
    transformOrigin: "left",
    transition: "all .3s ease -in -out",
}

const Ppcard = ({ popularProducts }) => {
    const [hover, setHover] = useState(true);
    const [id, setId] = useState("");

    const setbgimg1 = (id) => {
        setId(id)
        setHover(!hover);
    }
    return (
        <div className={styles.maincont}>
            {
                popularProducts.map((item, index) => {
                    return (
                        <div key={index} onMouseLeave={() => setbgimg1(item.id)} onMouseEnter={() => setbgimg1(item.id)} className={styles.cardcont}>
                            <div className={styles.badge}>
                                <span>{item.tag}</span>
                            </div>
                            <div className={styles.imgCont}>
                                {
                                    id === item.id && hover ? <img src={item.img[0]} alt="" /> :
                                        <img src={item.img[1]} alt="" />
                                }
                            </div>
                            <div className={styles.content}>
                                <p className={styles.product_cat}>{item.category}</p>
                                <h2 className={styles.itemname}>{item.itemName}</h2>
                                <div className={styles.rating}>
                                    <span>
                                        {[1, 2, 3, 4, 5].map((it, index) => {
                                            if (it <= item.rating) {
                                                return <IoStar key={index} color="gold" />
                                            }
                                            else {
                                                return <IoStar key={index} />
                                            }
                                        })}
                                    </span>
                                    <span >({item.rating}) </span>
                                </div>

                                <div className={styles.ccont}>

                                    <span className={styles.comapny}> {item.company}</span>
                                </div>
                                <div className={styles.cont3}>
                                    <span>$ <del> {item.price}</del></span>&nbsp;&nbsp;
                                    <span>$ {item.Offerprice}</span>&nbsp;&nbsp;&nbsp;&nbsp;
                                    <Button1 logo={<IoCartOutline />} name="add" css={css}></Button1>
                                </div>
                            </div>

                        </div>
                    )
                })

            }
        </div >
    )
};

export default Ppcard;
