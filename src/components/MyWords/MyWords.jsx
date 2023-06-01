import React from "react";
import styles from './MyWords.module.css'
import { useSelector, useDispatch } from "react-redux";

const MyWords = () => {
    const mywords = useSelector(state => state.user.userInfo.userWordsList)


    return (
        <div className={styles.myWords}>
            <div className={styles.title}>
                <h3>Мои слова</h3>
            </div>
            <div className={styles.wordsWrapper}>
                {
                    mywords && mywords.map(el =>
                        <div className={styles.word}>
                            <div className={styles.wordInfo}>
                                <p>{el.word}</p>
                                <p>{el.translate}</p>
                            </div>

                            <div className={styles.usageExample}>
                                <p>{el.usageExample}</p>
                            </div>
                        </div>)

                }
            </div>

        </div>
    )
}



export default MyWords;