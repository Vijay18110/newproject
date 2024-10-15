import React from "react";
import styles from './index.module.css';
const Button1 = ({ name, css, logo }) => {
    return <button className={styles.btn} style={css} >
        <span>
            {logo}
        </span>
        <span>{name}</span>
    </button>
};

export default Button1;
