import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from './Profile.module.css'
import Menu from "./Menu/Menu";
import userIcon from '../../../assets/icons/userIcon.png'
import { Link } from 'react-router-dom'



const Profile = () => {



    const dispatch = useDispatch()
    const userInfo = useSelector(state => state.user.userInfo)


    const [open, setOpen] = React.useState(false)

    return (
        <>
            <div className={styles.profile}>
                <div className={styles.nav}>
                    <Link to='/words'>Words</Link>
                    <Link>Button</Link>
                    <Link>Button</Link>
                </div>

                <div onClick={() => { setOpen(!open) }} className={styles.profileAvatar}>
                    <img src={userIcon} alt="Profile" />
                </div>
            </div>

            <Menu userInfo={userInfo} open = {open} />

        </>
    )

}

export default Profile;