import React from "react";
import { useFormik } from 'formik';
import { useDispatch } from "react-redux";
import { fetchRegister } from "../../../Redux/Slices/user-slice";
import styles from './Register.module.css'





const Register = () => {
    const dispatch = useDispatch()

    const register = (body) => {
        dispatch(fetchRegister(body))
    }



    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: values => {
            if (values.password !== values.confirmPassword) {
                console.log(values)
                alert('Проверте пароль, пароли не совпадают')
            }

            
            register(values)

        },
    });


    return (
        <div className={styles.register}>
            <form className={styles.registerForm} onSubmit={formik.handleSubmit}>
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

                <div className={styles.inputWrapper}>
                    <label>Confirm Password</label>
                    <input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        onChange={formik.handleChange}
                        value={formik.values.confirmPassword}
                    />
                </div>
                <div className={styles.loginBt}>
                    <button type="submit">Submit</button>
                </div>

            </form>
        </div>
    )
}


export default Register;