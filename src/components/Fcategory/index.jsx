import React, { useEffect, useState } from "react";
import MutliCarousel from "../../Shared/Carousel";
import { products } from "../../data/headers";
import FCard from "../../widgets";
import TitleComp from "../../Shared/Carousel/TitileComp";
import styles from './index.module.css'

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
    const [manuName, setManuName] = useState('petfood');
    const [filteredFood, setFilteredFood] = useState([]);
    const getManuname = (n) => {
        setManuName(n);
    }
    useEffect(() => {
        const filtered = products.filter((item) => item.category === manuName);
        setFilteredFood(filtered);
    }, [manuName])
    return <div>
        <div className={styles.titleCont}>
            <TitleComp title="Featured Categories" />
            <div className={styles.ul}>
                <li style={manuName === "cakeandmilk" ? { color: "#3bb77e" } : {}} onClick={() => getManuname('cakeandmilk')}>Cake & milk</li>
                <li style={manuName === "coffeeandtea" ? { color: "#3bb77e" } : {}} onClick={() => getManuname('coffeeandtea')}> coffee and teas</li>
                <li style={manuName === "petfood" ? { color: "#3bb77e" } : {}} onClick={() => getManuname('petfood')}> pet foods</li>
                <li style={manuName === "veg" ? { color: "#3bb77e" } : {}} onClick={() => getManuname('veg')}>vegetables</li>
            </div>
        </div>
        <MutliCarousel responsive={responsive} autoPlay={true} autoPlaySpeed={1000} infinite={true} >
            {
                filteredFood ? filteredFood.map((item) => {
                    return (
                        <FCard bg={item.bgColor} img={item.img} name={item.name} items={item.item} key={item.id} />
                    )
                }) : <h1>no food</h1>
            }
        </MutliCarousel>
    </div>;
};

export default Fcategory;
