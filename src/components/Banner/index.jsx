import React from "react";
import MutliCarousel from "../../Shared/Carousel";
import styles from './index.module.css';
const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};
const Banner = ({ data }) => {
    return <>
        <MutliCarousel responsive={responsive} autoPlaySpeed={1000} autoPlay={true} infinite={true} showDots="true">
            {
                data.map((item) => {
                    return (<div className={styles.bannercont} style={{ marginTop: "20px", backgroundImage: `url(${item.img})`, width: "98%", height: "500px" }} ></div>
                    )
                }
                )
            }
        </MutliCarousel>
    </>;
};
export default Banner;
