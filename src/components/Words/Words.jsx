import React from "react";
import styles from './Words.module.css'
import { fetchCategory } from "../../Redux/Slices/words-slice";
import { useDispatch, useSelector } from 'react-redux'
import Categories from "./Categories/Categories";



const Words = () => {
    const dispatch = useDispatch()
    
    const words = useSelector(state => state.words.words)


    React.useEffect(() => {
        dispatch(fetchCategory())
    }, [])


   
        return (
            <div>
                <Categories/>
                <div className={styles.words}>
                    {
                        words ? words.map(el =>
                            <div className={styles.word}>
                                <div><p>{el.word}</p></div>
                                <div><p>{el.translate}</p></div>
                            </div>) :
                            <div>Выберите категорию</div>
                    }
                </div>
            </div>
        )
    }




export default Words;