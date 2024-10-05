import React from "react";
import styles from './index.module.css'
const Icons = ({ icon, counter, name }) => {
    return (
        <div className={styles.Iconscont}>
            <p className={styles.p}>
                <span>{icon}</span>
                {counter && <span className={styles.counter}>{counter}</span>}
            </p>
            <span>{name}</span>
        </div >
    )


};

export default Icons;
