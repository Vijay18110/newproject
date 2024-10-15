import React, { useState } from "react";
import Container from '../container/index.jsx'
import styles from './index.module.css';
import TitleComp from "../../Shared/Carousel/TitileComp/index.jsx";
import img from '../../assets/Banner/img4.png'
import Banner from '../Banner/index.jsx';
import { popularProducts } from '../../data/popularproducts.js'
import Carousel from "react-multi-carousel";
import Button1 from "../../widgets/Button1/index.jsx";
import { IoCartOutline, IoStar } from "react-icons/io5";
const css = {
    padding: ".4rem .5rem",
    border: "none",
    marginTop: "10px",
    width: "100%",
    padding: "10px 20px",
    backgroundColor: "#3bb77e",
    color: "white",
    borderRadius: " 5px",
    transformOrigin: "left",
    transition: "all .3s ease -in -out",
}
const data = [
    {
        id: 1, title1: "Bring nature into your home", img: img
    }
]
const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};
const Dailybs = ({ module }) => {
    const [hover, setHover] = useState(true);
    const [id, setId] = useState("");

    const setbgimg1 = (id) => {
        setId(id)
        setHover(!hover);
    }
    return <Container>
        <div className={styles.manu}>
            <div>
                <TitleComp title="Daily Best Sells" />
            </div>
            <ul>
                <li>Featured</li>
                <li>Popular</li>
                <li>New Added</li>
            </ul>
        </div>
        <div className={styles.main}>
            <div className={styles.left}>
                <Banner height="440px" banner={false} data={data} />
            </div>
            <div className={styles.right}>
                <Carousel responsive={responsive} autoPlay={true} infinite={true}>
                    {
                        popularProducts.slice(0, 6).map((item, index) => {
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
                                            <div className={styles.level}><div style={{ width: "50%", background: "#3bb77e", height: "5px", position: "absolute" }}></div> </div>
                                            <div>sold: 90/120</div>
                                            {/* <span className={styles.comapny}> {item.company}</span> */}
                                        </div>
                                        <div className={styles.cont3}>
                                            <span>$ <del> {item.price}</del></span>&nbsp;&nbsp;
                                            <span>$ {item.Offerprice}</span>&nbsp;&nbsp;&nbsp;&nbsp;
                                        </div>
                                        <Button1 logo={<IoCartOutline ></IoCartOutline>} name="add to cart" css={css} />
                                    </div>
                                </div>
                            )
                        })
                    }
                </Carousel>
            </div>




        </div >
    </Container >;
};

export default Dailybs;
