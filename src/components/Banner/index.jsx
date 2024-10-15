import React from "react";
import MutliCarousel from "../../Shared/Carousel";
import styles from './index.module.css';
import NewsLatter from "../Newsletter/input";
import Button from "../../widgets/button";
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
const Banner = ({ data, banner, width, height }) => {
    return <>
        {banner ? <MutliCarousel responsive={responsive} autoPlaySpeed={1000} autoPlay={true} infinite={true} showDots="true">
            {
                data.map((item, index) => {
                    return (<div key={index} className={styles.bannercont} style={{ paddingTop: "10px", marginTop: "20px", backgroundImage: `url(${item.img})`, width: `${width}` }} >
                        <div>
                            <h4>
                                {item.title1}
                            </h4>
                            <h4>
                                {item.title2}
                            </h4>
                        </div>
                        <p>{item.desc}</p>
                        <NewsLatter></NewsLatter>
                    </div>
                    )
                }
                )
            }
        </MutliCarousel>
            : <div className={styles.sbanner}>
                {data.map((item, index) => {
                    return (<div key={index} className={styles.bannercont} style={{ height: height, width: "100%", marginTop: "20px", backgroundImage: `url(${item.img})` }} >
                        <div>
                            <h4 style={{ fontSize: "24px", }}>
                                {item.title1}
                            </h4>
                            <h4 style={{ fontSize: "24px", }}>
                                {item.title2}
                            </h4>
                            <Button bg="#3bb77e" name="Shop Now" />
                        </div>
                    </div>
                    )
                }
                )
                }
            </div>
        }
    </>;
};
export default Banner;