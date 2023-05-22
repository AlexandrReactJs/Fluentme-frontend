import React from "react";
import styles from './Header.module.css'
import { useSelector, useDispatch } from "react-redux";
import Profile from "./Profile/Profile";
import AuthButtons from "./AuthButtons/AuthButtons";
import { fetchAuthMe } from "../../Redux/Slices/user-slice";



const Header = () => {
    const dispatch = useDispatch()

  
    const isAuth = useSelector(state => state.user.isAuth)
  


    React.useEffect(() => {

        dispatch(fetchAuthMe())



    }, [dispatch])



    return (
        <div className={styles.Header}>
            <div className={styles.container}>
                <div className={styles.headerInner}>
                    <div className={styles.logo}>
                        <p className={styles.logoText}>FLUENT<span>ME</span></p>
                    </div>
                    {
                        isAuth ? <Profile /> : <AuthButtons />
                    }
                </div>
            </div>
        </div>
    )
}


export default Header;