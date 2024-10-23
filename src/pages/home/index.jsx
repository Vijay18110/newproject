import React from "react";
import Container from "../../ui/Container";
import Banner from "../../components/Banner";
import banner1 from "../../assets/Banner/img1.png";
import banner2 from "../../assets/Banner/img2.png";
import banner from "../../assets/banner-9.png";
import bannerbg from "../../assets/banner10.png";

import FeatureCategories from "../../components/FeatureCategories";
import MultiCarousel from "../../shared/Carousel";
import SubBanner from "../../components/SubBanner";
import PopularProducts from "../../components/PopularProducts";
import DailyBS from "../../components/DailyBS";
import DealsOfTheYear from "../../components/DealsOfTheYear";
import HotProducts from '../../components/HotProducts';
import { products } from '../../data/Hotp.js'
import Secondlast from "../../components/Secondlast/index.jsx";
import { secondlastdata } from "../../data/Secondlast.js";
import AboutpCart from "../../components/aboutproduct/index.jsx";
import { carddata } from "../../data/aboutpCartdata.js";
import Banner2 from "../../components/Banner2/index.jsx";
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
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const Home = () => {
  return (
    <Container>
      <MultiCarousel arrows={false} infinite={true} showDots={true} autoPlay={true} responsive={responsive}>
        {bannerData.map((it) => {
          return <Banner key={it.id} it={it} module="banner" />;
        })}
      </MultiCarousel>
      <FeatureCategories />
      <SubBanner />
      <PopularProducts />
      <DailyBS />
      <DealsOfTheYear />
      <HotProducts productsdata={products} />
      <Banner2 it={{
        id: 1,
        title1: "Stay home & get your daily needs from our shop",
        title2: "Start You'r Daily Shopping with   Nest Mart",
        desc: "Sign up for the daily newsletter",
        img: banner,
        img2:bannerbg
      }} />
      <AboutpCart cartdata={carddata} />
      <Secondlast productsdata={secondlastdata} />
    </Container>
  );
};
export default Home;
