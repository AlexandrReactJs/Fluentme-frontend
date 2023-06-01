import React from "react";
import { Link } from "react-router-dom";
import styles from './AuthButtons.module.css';

const AuthButtons = () => {

    return (
        <div className={styles.authButtons}>
            <Link className={styles.loginBt} to='/login'>Login</Link>
            <p>or</p>
            <Link className={styles.registerBt} to='/register'>Register</Link>
        </div>
    )
}


export default AuthButtons;