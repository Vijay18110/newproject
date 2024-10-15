import React, { useEffect, useState } from "react";
import { IoCartOutline, IoStar } from "react-icons/io5";
import styles from './index.module.css'
import Button1 from "../widgets/Button1";
import Banner from "../components/Banner";
const css = {
    padding: ".4rem .5rem",
    border: "none",
    marginTop: "10px",
    padding: "10px 20px",
    color: "#3bb77e",
    backgroundColor: "rgb(222, 249, 236)",
    borderRadius: " 5px",
    transformOrigin: "left",
    transition: "all .3s ease -in -out",
}
const D_ofday = ({ dealsdata }) => {
    const [sec, setSec] = useState(59);
    const [min, setMin] = useState(59);
    const [hours, setHours] = useState(2);
    const [days, setDays] = useState(1);
    const [time, setTime] = useState("");
    const watch = () => {
        if (days == 0 && hours == 0 && min == 0 && sec == 0) {
            alert("time out");
        }
        else {
            if (sec == 0) {
                setSec(59);
                if (min == 0) {
                    setMin(59)
                }
                else {
                    setMin((min) => min - 1)
                }
                if (min == 0) {
                    if (hours == 0) {
                        setHours(23);
                    }
                    else {
                        setHours((h) => h - 1)
                    }

                    if (hours == 0) {
                        if (days == 0) {
                            setDays(0);
                        }
                        else {
                            setDays((d) => d - 1)
                        }


                    }
                }
            }

            else {
                setSec((S) => S - 1)
            }
        };
    }
    const ti = () => {
        const d = new Date().getSeconds();
        setTime(d);
    }
    useEffect(() => {
        watch()
        setInterval(ti, 1000);

    }, [time]);

    return <div>
        <div className={styles.cardcont1}>
            {dealsdata.map((item, index) => {
                return (
                    <div key={index} className={styles.nn}>
                        <div style={{ position: "relative", height: "250px", margin: "10px", borderRadius: "10px", backgroundImage: `url(${item.img})` }}></div>
                        <div className={styles.abs}>
                            <div className={styles.timer}>
                                <div className={styles.time}>
                                    <span>{days}</span>
                                    <span>days</span>
                                </div>
                                <div className={styles.time}>
                                    <span>{hours}</span>
                                    <span>hours</span>
                                </div>   <div className={styles.time}>
                                    <span>{min}</span>
                                    <span>min</span>
                                </div>   <div className={styles.time}>
                                    <span>{sec}</span>
                                    <span>sec</span>
                                </div>
                            </div>
                            <div className={styles.cardcont}>
                                <div className={styles.content}>
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
                                        <Button1 css={css} name="add" />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                )
            })
            }
            {/* {dealsdata.map((item, index) => {
            return (
            <>
                <div key={index} className={styles.cardcont}>
                    <div className={styles.content}>
                        <h2 className={styles.itemname}>{item.itemName}</h2>
                        <div className={styles.rating}>
                            <span>
                                {[1, 2, 3, 4, 5].map((it) => {
                                    if (it <= item.rating) {
                                        return <IoStar color="gold" />
                                    }
                                    else {
                                        return <IoStar />
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
                        </div>
                    </div>

                </div>
            </>
            )
            })
            } */}
        </div>
    </div>;
};

export default D_ofday;
