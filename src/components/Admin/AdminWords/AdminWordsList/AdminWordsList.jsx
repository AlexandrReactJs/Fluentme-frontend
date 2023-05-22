import React from "react";
import styles from './AdminWordsList.module.css'
import { useDispatch, useSelector } from "react-redux";
import { fetchAdminCategory } from "../../../../Redux/Slices/admin-slices/admin-words-slice";
import { fetchAdminWords } from "../../../../Redux/Slices/admin-slices/admin-words-slice";


const AdminWordsList = () => {
    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(fetchAdminCategory())
    }, [])

    const categories = useSelector(state => state.adminWords.categories)
    const words = useSelector(state => state.adminWords.words)



    const fetchWords = (category) => {
        dispatch(fetchAdminWords(category))
    }

    return(
        <div>
            <div className={styles.categories}>
                {
                   categories && categories.map(el => <div onClick={() => {fetchWords(el.engName)}} className={styles.category}>{el.name}</div>)
                }
            </div>
            <div className={styles.words}>
                {
                    words && words.map(el => 
                    <div className={styles.wordInfo}>
                        <div className={styles.wordTranslate}>
                            <div><p>{el.word}</p></div>
                            <div><p>{el.translate}</p></div>
                            
                        </div>
                        <div className={styles.usageExample}>
                            {el.usageExample}
                        </div>
                    </div>)
                }
            </div>
            
        </div>
    )
}



export default AdminWordsList;