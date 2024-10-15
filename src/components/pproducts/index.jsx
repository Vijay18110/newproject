import React, { useEffect, useState } from "react";
import Container from '../container'
import styles from './index.module.css'
import Ppcard from "../ppCard";
import { popularProducts } from '../../data/popularproducts'
import TitleComp from "../../Shared/Carousel/TitileComp";
const Ppopular = () => {
    const [active, setActive] = useState('all');
    const [data, setData] = useState([]);
    const getManu = (n) => {
        setActive(n);
    }
    useEffect(() => {
        if (active === 'all') {
            setData(popularProducts.slice(0, 10))
        }
        else {

            const filtereddata = popularProducts.filter((item) => item.category === active);
            setData(filtereddata.slice(0, 10));
        }
    }, [active]);

    return <Container>
        <div className={styles.ppopularcont}>
            <div className={styles.content}>
                <TitleComp title=" Popular Products" />
                <ul>
                    <li onClick={() => getManu('all')}>all</li>
                    <li onClick={() => getManu('milks')}> Milks & Dairies</li>
                    <li onClick={() => getManu('ct')}> Coffes & Teas</li>
                    <li onClick={() => getManu('pet')}> Pet Foods</li>
                    <li onClick={() => getManu('meats')}> Meats</li>
                    <li onClick={() => getManu('veg')}> Vegetables</li>
                    <li onClick={() => getManu('fruits')}> Fruits</li>
                </ul>
            </div>
            <Ppcard popularProducts={data}></Ppcard>
        </div>
    </Container>;
};
export default Ppopular;
