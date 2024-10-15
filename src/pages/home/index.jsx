import React from "react";
import styles from './index.module.css'
import Banner from "../../components/Banner";
import Container from "../../components/container";
import banner1 from "../../assets/slider-1.png";
import banner2 from "../../assets/slider-2.png";
import Fcategory from "../../components/Fcategory";
import Sbanner from "../../components/Sbanner";

const bannerData = [
    {
        id: 1,
        title1: "Don’t miss amazing",
        title2: "grocery deals",
        desc: "Sign up for the daily newsletter",
        img: banner1,
        banner: true
    },
    {
        id: 2,
        title1: "Fresh Vegetables",
        title2: "Big discount",
        desc: "Save up to 50% off on your first order",
        img: banner2,
        banner: true,
    },
];

import sbanner1 from '../../assets/FoodCat/sb1.png'
import sbanner2 from '../../assets/FoodCat/sb2.png'
import Ppopular from "../../components/pproducts";
import Dailybs from "../../components/Dailybs";
import D_ofday from "../../Deals_of_day";
import ban from '../../assets/banner-9.png'

import { dealsdata } from '../../data/Dealsdata/deals.js'
import Module2 from "../../components/module2/index.jsx";
import { carddata } from "../../data/Databan.jsx";
import Products from "../../components/Products/index.jsx";
import { products } from "../../data/products.jsx";
import Secondlast from "../../components/Secondlast/index.jsx";
import { secondlastdata } from "../../data/Secondlast";
import Footer from "../../components/Footer/index.jsx";
const sbannerData = [
    {
        id: 1,
        title1: "Don’t miss amazing",
        title2: "grocery deals",
        desc: "Sign up for the daily newsletter",
        img: sbanner1,
    },
    {
        id: 2,
        title1: "Fresh Vegetables",
        title2: "Big discount",
        desc: "Save up to 50% off on your first order",
        img: sbanner2,

    },
    {
        id: 2,
        title1: "Fresh Vegetables",
        title2: "Big discount",
        desc: "Save up to 50% off on your first order",
        img: sbanner2,

    },
];
const ba = [
    {
        id: 1,
        title1: "Stay home & get grocery  ",
        title2: "deals yourdailyeeds from our shop",
        desc: "Start your daily shopimg with next mart",
        img: ban,

    },

];
const Home = () => {
    return <Container>
        <Banner width="99%" banner={true} data={bannerData} ></Banner>
        <Fcategory></Fcategory>
        <Sbanner banner={false} data={sbannerData}></Sbanner>
        <Ppopular></Ppopular>
        <Dailybs ></Dailybs>
        <D_ofday dealsdata={dealsdata} />
        <Products productsdata={products} />
        <Banner width="99%" banner={true} data={ba} ></Banner>
        <Module2 cartdata={carddata} />
        <Secondlast productsdata={secondlastdata} />
        <Footer />
    </Container >
};

export default Home;
