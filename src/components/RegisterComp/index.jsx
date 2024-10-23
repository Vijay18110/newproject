import React from "react";
import styles from './index.module.css';
import Container from '../../ui/Container';
import img from '../../assets/login-1.png'
import { BiBook, BiBookBookmark } from "react-icons/bi";
import Rfrom from "../RegisterFrom";
import { FaApple, FaFacebookSquare, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
const RegisterComp = () => {
    return <Container>
        <div className={styles.cont}>

            <div className={styles.right}>
                <h1>Create an Account</h1>
                <Link to="/login">
                    <p>Already have an account? <span>login</span></p>
                </Link>
                <input type="text" name="" id="password" placeholder="Username" />
                <input type="email" name="email" id="" placeholder="Enter Email" />
                <input type="password" name="" id="password" placeholder="password" />
                <input type="password" name="" id="password" placeholder="confirm password" />
                <div className={styles.securityCode}>
                    <input type="text" name="" id="" placeholder="security code" />
                    <div className={styles.code}>
                        <span>8</span>
                        <span>7</span>
                        <span>6</span>
                        <span>5</span>
                    </div>
                </div>
                <div className={styles.rememberpass}>
                    <span>
                        <input type="radio" name="chech" id="" />
                        <span className={styles.s}>I am a customer</span>
                    </span>
                    <span>
                        <input type="radio" name="chech" id="" />
                        <span className={styles.s}>I am a vendor</span>
                    </span>
                </div>

                <div className={styles.rememberpass}>
                    <span>
                        <input type="checkbox" name="" id="" />
                        <span>I agree to terms & Policy.</span>
                    </span>

                    <span>
                        <span><BiBookBookmark></BiBookBookmark></span>
                        <span className={styles.l}>Learn more</span>

                    </span>
                </div>
                <button>submit & register </button>
                <p className={styles.p}>Note:Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy</p>
            </div>
            <div className={styles.left}>
                <Rfrom bg="#1877f2" from="continue with facebook" logo={<FaFacebookSquare size="30px" />} />
                <Rfrom color="rgb(126, 126, 126)" bg="rgb(242, 243, 244)" from="continue with google" logo={<FaGoogle size="30px" />} />
                <Rfrom bg="black" from="continue with Apple" logo={<FaApple size="30px" />} />
            </div>
        </div>
    </Container>
};

export default RegisterComp;
