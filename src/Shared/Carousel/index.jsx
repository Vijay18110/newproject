import React from "react";
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";

const MutliCarousel = (props) => {
    return <>
        <Carousel {...props}>
            {props.children}
        </Carousel>;
    </>;
};

export default MutliCarousel;
