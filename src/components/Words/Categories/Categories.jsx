import React from "react";
import styles from './Categories.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchWords } from "../../../Redux/Slices/words-slice";



const Categories = () => {
    const dispatch = useDispatch()
    const categories = useSelector(state => state.words.categories)



    return (
        <div className={styles.categories}>
            <div className={styles.title}>
                <h3>Категории</h3>
            </div>
            <div className={styles.categoriesWrapper}>
                {
                    categories && categories.map(el =>
                        <div onClick={() => { dispatch(fetchWords(el.engName)) }} className={styles.category}>
                            <p>{el.name}</p>
                        </div>)
                }
            </div>


        </div>
    )
}


export default Categories;