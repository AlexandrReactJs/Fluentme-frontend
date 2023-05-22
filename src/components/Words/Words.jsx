import React from "react";
import styles from './Words.module.css'
import { fetchCategory } from "../../Redux/Slices/words-slice";
import { useDispatch, useSelector } from 'react-redux'
import { fetchWords } from "../../Redux/Slices/words-slice";



const Words = () => {
    const dispatch = useDispatch()
    const categories = useSelector(state => state.words.categories)
    const words = useSelector(state => state.words.words)


    React.useEffect(() => {
        dispatch(fetchCategory())
    }, [])


    if (categories) {
        return (
            <div>
                <div className={styles.categories}>
                    {
                        categories.map(el =>
                            <div onClick={() => { dispatch(fetchWords(el.engName)) }} className={styles.category}>
                                <p>{el.name}</p>
                            </div>)
                    }
                </div>

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

    return <div>Loading</div>
}


export default Words;