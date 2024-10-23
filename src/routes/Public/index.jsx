import React from "react";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import AboutpCart from "../../components/aboutproduct";
import Secondlast from "../../components/Secondlast";
import { carddata } from "../../data/aboutpCartdata";
import { secondlastdata } from "../../data/Secondlast";
import banner from "../../assets/banner2.png";
import Banner2 from "../../components/Banner2";
const Public = ({ element, onHover }) => {
  return (
    <main>
      <Header onHover={onHover} />
      <Navbar />
      {element}
      <Banner2
        it={{
          id: 1,
          title1: "Stay home & get your daily neds from our shop",
          desc: "Sign up for the daily newsletter",
          img: banner,
        }}
      />
      <AboutpCart cartdata={carddata} />
      <Secondlast productsdata={secondlastdata} />
      <Footer />
    </main>
  );
};
export default Public;
