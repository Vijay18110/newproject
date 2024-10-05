import React from "react";
import { Link } from "react-router-dom";
import styles from './index.module.css';
const Item = (
    { name, to, value }) => {
    return <li className={styles.li}>
        {
            to ? (
                <Link to={to}>
                    <span>{name}</span>
                </Link>
            ) : (
                <p>
                    <span>{name}</span>
                    <span className={styles.span2}>{value}</span>
                </p>
            )
        }
    </li>;
};
export default Item;
