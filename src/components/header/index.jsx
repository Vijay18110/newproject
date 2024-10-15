import React from "react";
import styles from './index.module.css';
import Item from "../Item";
import { currency, languages, leftmanu, options } from "../../data/headers";

import { GiRecycle } from "react-icons/gi";
import { GoHeart } from "react-icons/go";
import { IoCartOutline } from "react-icons/io5";
import { LuUser } from "react-icons/lu";
import Container from "../container";
import logo from '../../assets/logo.svg'
import Icons from "../Icons";
import Select from 'react-select'

const style = {
    control: (baseStyles, state) => ({
        ...baseStyles,

        borderColor: state.isFocused ? "green" : 'none',
        border: "none",
        width: "150px",
        outline: state.isFocused ? "none" : "",
        height: "50px"

    }),
}
const Header = () => {
    const option = (styles) => ({ ...styles, backgroundColor: 'red', width: "100px" });
    const icons = [
        { id: 1, name: "Compare", counter: "3", icon: <GiRecycle size={30} /> },
        { id: 2, name: "Wishlists", counter: "6", icon: <GoHeart size={30} /> },
        { id: 3, name: "Cart", counter: "2", icon: <IoCartOutline size={30} /> },
        { id: 4, name: "Account", counter: null, icon: <LuUser size={30} /> },
    ];
    return (
        <header>
            <Container>
                <div className={styles.header}>
                    <ul className={styles.header_left}>
                        {
                            leftmanu.map((item) => <Item key={item.id} to={item.to} name={item.name} />)
                        }
                    </ul>
                    <p>Trendy 25silver jewelry, save up 35% off today</p>
                    <ul className={styles.header_right}>
                        <Item name="Need help? Call Us:" value="+ 1800 900" />
                        <div style={{ width: "100px" }}><Select options={languages} defaultValue={languages[0]} isSearchable={true} /></div>
                        <div style={{ width: "100px" }}><Select options={currency} defaultValue={currency[0]} isSearchable={true} /></div>
                    </ul>
                </div>
                <div className={styles.header2}>
                    <div>
                        <img src={logo} alt="logo" />
                    </div>
                    <div className={styles.searchbar}>
                        <Select
                            styles={style}
                            options={options} defaultValue={options[0]} isSearchable={true} />
                        <input placeholder="Search your product" type="text" />
                    </div>
                    <div style={{ width: "150px" }}>
                        <Select
                            styles={{
                                control: (baseStyles, state) => ({
                                    ...baseStyles,
                                    width: "150px",
                                    height: "53px",
                                }
                                )
                            }}

                            options={options} defaultValue={options[0]} isSearchable={true} />
                    </div>
                    <div className={styles.icons}>
                        {
                            icons.map((item, index) => {
                                return (
                                    <Icons key={index} icon={item.icon} counter={item.counter} name={item.name} />
                                )
                            })
                        }
                    </div>
                </div>
            </Container>
        </header>
    )
};

export default Header;
