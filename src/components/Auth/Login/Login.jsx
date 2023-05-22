import React from "react";
import { useFormik } from 'formik';
import { useDispatch } from "react-redux";
import { fetchLogin } from "../../../Redux/Slices/user-slice";
import styles from './Login.module.css'


const Login = () => {
    const dispatch = useDispatch();

    const login = (body) => {
        dispatch(fetchLogin(body))
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
                    <button type="submit">Submit</button>
                </div>

            </form>
        </div>

    )
}


export default Login;