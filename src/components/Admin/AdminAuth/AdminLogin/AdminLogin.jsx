import React from "react";
import { useFormik } from 'formik';
import { useDispatch } from "react-redux";
import styles from './AdminLogin.module.css'
import { fetchAdminLogin } from "../../../../Redux/Slices/admin-slices/admin-slice";

const AdminLogin = () => {
    const dispatch = useDispatch();

    const login = (body) => {
        dispatch(fetchAdminLogin(body))
    }




    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: values => {
            login(values)

        },
    });

    return (
        <div className={styles.login}>

            <form className={styles.loginForm} onSubmit={formik.handleSubmit}>
                <div className={styles.logo}>
                    <p>FLUENT<span>ME</span><br /><h1 className={styles.underLogo}>Admin Panel</h1></p>
                </div>
                <div className={styles.inputWrapper}>
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        onChange={formik.handleChange}
                        value={formik.values.lastName}
                    />
                </div>

                <div className={styles.inputWrapper}>
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                    />
                </div>

                <div className={styles.loginBt}>
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    )
}


export default AdminLogin;