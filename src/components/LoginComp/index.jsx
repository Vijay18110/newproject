import React from "react";
import styles from './index.module.css';
import Container from '../../ui/Container';
import img from '../../assets/login-1.png'
import { Link } from "react-router-dom";
const LoginComp = () => {
    return <Container>
        <div className={styles.cont}>
            <div className={styles.left}>
                <img src={img} alt="" />
            </div>
            <div className={styles.right}>
                <h1>Login</h1>
                <Link to="/register">
                    <p>Don't have an account?   <span>Create here</span></p>
                </Link>
                <input type="email" name="email" id="" placeholder="Enter Email or Username" />
                <input type="password" name="" id="password" placeholder="password" />
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
                    <div>
                        <span><input type="checkbox" /></span>
                        <span> Remember me</span>
                    </div>
                    <div>
                        <spaxn>Forgot Password</spaxn>
                    </div>

                </div>
                <button> Log In</button>
            </div>
        </div>
    </Container>
};

export default LoginComp;
