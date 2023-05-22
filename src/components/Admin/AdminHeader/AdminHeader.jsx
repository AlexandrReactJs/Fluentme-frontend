import React from "react";
import styles from './AdminHeader.module.css'
import {Link} from 'react-router-dom'
import { exit } from "../../../Redux/Slices/admin-slices/admin-slice";
import { useDispatch } from "react-redux";

const AdminHeader = () => {
    const dispatch = useDispatch()



    return(
        <div className={styles.header}>
            <div className={styles.logoWrapper}>
               <p className={styles.logo}>FLUENT<span>ME</span></p>
            </div>
            <div className={styles.menu}>
                <Link to='/admin/words'>Слова</Link>
                <Link to='/admin/categories'>Категории</Link>
                <button onClick={() => {dispatch(exit())}}>Выйти</button>
            </div>

        </div>
    )
}


export default AdminHeader;