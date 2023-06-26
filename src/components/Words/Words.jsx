import React from "react";
import styles from './Words.module.css'
import { fetchCategory } from "../../Redux/Slices/words-slice";
import { useDispatch, useSelector } from 'react-redux'
import Categories from "./Categories/Categories";
import { addWordToUserWordList } from '../../Redux/Slices/user-mywords-slice'


const Words = () => {
    const dispatch = useDispatch()

    const words = useSelector(state => state.words.words)


    React.useEffect(() => {
        dispatch(fetchCategory())
    }, [])


    return (
        <div>
            <Categories />
            <div className={styles.words}>
                <div className={styles.title}>
                    <h3>Слова</h3>
                </div>
                <div className={styles.wordsWrapper}>
                    {
                        words && words.map(el =>
                            <div className={styles.word}>
                                <div className={styles.wordInfo}>
                                    <div><p className={styles.engWord}>{el.word}</p></div>
                                    <div><p className={styles.translate}>{el.translate}</p></div>
                                </div>
                                <div>
                                    <div className={styles.usageExample}><p>{el.usageExample}</p></div>
                                </div>
                                <div onClick={() => {dispatch(addWordToUserWordList(el._id))}} className={styles.addWordBt}>+</div>
                            </div>)

                    }
                </div>

            </div>
        </div>
    )
}




export default Words;