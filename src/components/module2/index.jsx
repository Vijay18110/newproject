import React from "react";
import Cart from "../card";
import styles from './index.module.css';
const Module2 = ({ cartdata }) => {
    return <>
        <div className={styles.cont}>
            {
                cartdata.map((it) => {
                    return (
                        <Cart data={it} />
                    )
                })
            }
        </div>;
    </>
};

export default Module2;
