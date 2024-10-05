import React from "react";
import MutliCarousel from "../../Shared/Carousel";
import { products } from "../../data/headers";
import FCard from "../../widgets";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 10
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 10
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 10
    }
};
const Fcategory = () => {
    return <div>
        <MutliCarousel responsive={responsive} >
            {
                products.map((item) => {
                    return (
                        <FCard bg={item.bgColor} img={item.img} name={item.name} items={item.item} key={item.id} />
                    )
                })
            }
        </MutliCarousel>
    </div>;
};

export default Fcategory;
