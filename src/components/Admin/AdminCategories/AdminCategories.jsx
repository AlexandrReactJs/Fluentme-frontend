import React from "react";
import styles from './AdminCategories.module.css';
import AddCategory from "./AddCategory/AddCategory";
import Categories from "./Categories/Categories";



const AdminCategories = () => {
    




    return (
        <div className={styles.categories}>
            
            <Categories/>
            <AddCategory />

        </div>
    )
}


export default AdminCategories;