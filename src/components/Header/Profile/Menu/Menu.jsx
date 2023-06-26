import React, { useRef } from "react";
import userIcon from '../../../../assets/icons/userIcon.png'
import styles from './Menu.module.css'
import { setIsAuth, setMe } from "../../../../Redux/Slices/user-slice";
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom'
import exitIcon from '../../../../assets/icons/exitIcon.png'
import listIcon from '../../../../assets/icons/listIcon.png'
import { CSSTransition } from "react-transition-group";

const Menu = ({ userInfo, open }) => {
    const transitionClasses = {
        enter: styles.enter,
        enterActive: styles.enterActive,
        enterActive: styles.enterDone,
        exit: styles.exit,
        exitActive: styles.exitActive
    }

    

    const dispatch = useDispatch()


    const userName = userInfo.email.split('@')


    return (
        <CSSTransition  in={open} timeout={300} classNames={transitionClasses} unmountOnExit mountOnEnter>
            <div  className={styles.Menu}>
                <div className={styles.userInfo}>
                    <img className={styles.userAvatar} src={userIcon} alt="userAvatar" />
                    <div className={styles.userName}>
                        <h3>{userName[0]}</h3>
                        <p>Your account</p>
                    </div>
                </div>

                <div className={styles.menuNavigation}>
                    <div className={styles.link}>
                        <img src={listIcon} alt="" />
                        <Link to='/mywords'>My words</Link>
                    </div>


                    <div
                        onClick={() => {
                            dispatch(setMe(null))
                            dispatch(setIsAuth(false))
                            localStorage.removeItem('userToken')
                        }}
                        className={styles.link}>
                        <img src={exitIcon} alt="" />
                        <Link>Sign Out</Link>
                    </div>
                </div>

            </div>
        </CSSTransition>
    )
}

export default Menu;