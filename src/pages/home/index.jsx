import React from "react";
import styles from './index.module.css'
import Banner from "../../components/Banner";
import Container from "../../components/container";
import banner1 from "../../assets/slider-1.png";
import banner2 from "../../assets/slider-2.png";
import Fcategory from "../../components/Fcategory";

const bannerData = [
    {
        id: 1,
        title1: "Don’t miss amazing",
        title2: "grocery deals",
        desc: "Sign up for the daily newsletter",
        img: banner1,
    },
    {
        id: 2,
        title1: "Fresh Vegetables",
        title2: "Big discount",
        desc: "Save up to 50% off on your first order",
        img: banner2,
    },
];
const Home = () => {
    return <Container>
        <Banner data={bannerData}></Banner>
        <Fcategory></Fcategory>
    </Container>
};

export default Home;
