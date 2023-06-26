import React from "react";
import styles from './MyWords.module.css'
import { useSelector, useDispatch } from "react-redux";
import cancelIcon from '../../assets/icons/iconCancel1.png'
import { fetchUserWordsList } from "../../Redux/Slices/user-mywords-slice";
import { removeWord } from "../../Redux/Slices/user-mywords-slice";
import axios from "axios";




const MyWords = () => {
    const dispatch = useDispatch()



    const userWordsList = useSelector(state => state.userMyWords.userWordsList)

    React.useEffect(() => {
        dispatch(fetchUserWordsList())
    }, [])


    const removeWordFromUserWordsList = (id) => {
        const token = localStorage.getItem('userToken')
        axios.delete(`http://localhost:4444/user/removeWordFromUserWordsList/${id}`, { headers: { Authorization: 'Bearer ' + token } }).then(res => {
            dispatch(removeWord(id))
        })
       
    }

    return (
        <div className={styles.myWords}>
            <div className={styles.title}>
                <h3>Мои слова</h3>
            </div>
            <div className={styles.wordsWrapper}>
                {
                    userWordsList && userWordsList.map(el =>
                        <div className={styles.word}>
                            <div className={styles.wordInfo}>
                                <p>{el.word}</p>
                                <p>{el.translate}</p>
                            </div>

                            <div className={styles.usageExample}>
                                <p>{el.usageExample}</p>
                            </div>
                            <div onClick={() => {removeWordFromUserWordsList(el._id)}} className={styles.removeBt}>
                                <img src={cancelIcon} alt="" />
                            </div>
                        </div>)

                }
            </div>

        </div>
    )
}



export default MyWords;