import React from "react";
import userIcon from '../../../../assets/icons/userIcon.png'
import styles from './Menu.module.css'
import { setIsAuth, setMe } from "../../../../Redux/Slices/user-slice";
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom'



const Menu = ({ userInfo }) => {
    const dispatch = useDispatch()
    const userName = userInfo.email.split('@')


    return (
        <div className={styles.Menu}>
            <div className={styles.userInfo}>
                <img className={styles.userAvatar} src={userIcon} alt="userAvatar" />
                <div className={styles.userName}>
                    <h3>{userName[0]}</h3>
                    <p>Your account</p>
                </div>
            </div>

            <div className={styles.menuNavigation}>
                <div className={styles.link}>
                    <img src="" alt="" />
                    <Link>My words</Link>
                </div>


                <div
                    onClick={() => {
                        dispatch(setMe(null))
                        dispatch(setIsAuth(false))
                        localStorage.removeItem('userToken')
                    }}
                    className={styles.link}>
                    <img src="" alt="" />
                    <Link>Sign Out</Link>
                </div>
            </div>
            
        </div>
    )
}

export default Menu