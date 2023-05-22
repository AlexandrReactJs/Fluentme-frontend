import React from "react";
import styles from './AddCategory.module.css'
import {useDispatch, useSelector} from 'react-redux'
import { setCategoryName, setCategoryEngName, setNewCategory } from "../../../../Redux/Slices/admin-slices/admin-categories-slice";
import axios from "axios";

const AddCategory = () => {
    const dispatch = useDispatch()

    const createNewCategory =  (body) => {
        const token = localStorage.getItem('adminToken')
        axios.post('http://localhost:4444/wordsCategory/createCategory', body, { headers: { Authorization: "Bearer " + token }}).then(response => {
            if(response.data.resultCode === 0){
                dispatch(setNewCategory(response.data.category))
            }
    
        }).catch(response => {
            console.log(response)
        })
        
    }


    const newCategoryData = useSelector(state => state.adminCategories.createNewCategoryData)
    const nameValue = useSelector(state => state.adminCategories.createNewCategoryData.name)
    const engNameValue = useSelector(state => state.adminCategories.createNewCategoryData.engName)


    const categoryNameRef = React.useRef(null)
    const categoryEngNameRef = React.useRef(null)

    const onChangeName = () => {
        const text = categoryNameRef.current.value
        dispatch(setCategoryName(text))
    }

    const onChangeEngName = () => {
        const text = categoryEngNameRef.current.value
        dispatch(setCategoryEngName(text))
    }
    

    return(
        <div className={styles.AddCategory}>
            <input ref={categoryNameRef} value={nameValue} onChange={() => {onChangeName()}} type="text" placeholder="Название категории"/>
            <input ref={categoryEngNameRef} value={engNameValue} onChange={() => {onChangeEngName()}} type="text" placeholder="Название на английском"/>
            <div className={styles.buttons}>
                <button onClick={() => {createNewCategory(newCategoryData)}}>Add category</button>
            </div>
            
        </div>
    )
}


export default AddCategory;