import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import cancelIcon from '../../../../assets/icons/iconCancel.png'
import styles from './Categories.module.css'
import { fetchAdminCategory, deleteCategory } from "../../../../Redux/Slices/admin-slices/admin-categories-slice";
import axios from "axios";


const Categories = () => {
    

    const removeCategory = (id) => {
        const token = localStorage.getItem('adminToken');
        axios.delete(`http://localhost:4444/wordsCategory/removeCategory/${id}`,{ headers: { Authorization: "Bearer " + token }}).then(res => {
            if(res.data.resultCode === 0){
                dispatch(deleteCategory(id))
            }
        })

    }

    const dispatch = useDispatch()
    React.useEffect(() => {
        dispatch(fetchAdminCategory())
    }, [])

    const categories = useSelector(state => state.adminCategories.categories)



    return(
        <div className={styles.categoriesWrapper}>
                {
                    categories && categories.map(el =>
                        <div className={styles.category}>
                            <div className={styles.categoryInfo}>
                                <p className={styles.name}>{el.name}</p>
                                <p className={styles.engName}>{el.engName}</p>
                            </div>
                            <div className={styles.cancelBt} onClick={() => {removeCategory(el._id, el.engName)}}>
                                <img src={cancelIcon} alt="cancel" />
                            </div>
                        </div>
                    )
                }
            </div>
    )
}

export default Categories;



