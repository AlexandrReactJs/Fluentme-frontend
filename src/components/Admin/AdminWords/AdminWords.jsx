import React from "react";
import styles from './AdminWords.module.css'
import AddWords from "./AddWords/AddWords";
import AdminWordsList from "./AdminWordsList/AdminWordsList";



const AdminWords = () => {
    const [isOpenAddWords, setIsOpenAddWords] = React.useState(false)
    const [isOpenWordsList, setIsOpenWordsList] = React.useState(false)

    return (
        <div className={styles.adminWords}>
            <div className={styles.menu}>
                <div className={styles.menuBt}>
                    <button onClick={() => { setIsOpenAddWords(!isOpenAddWords) }}>Добавить слова</button>
                    <div className={styles.underline}></div>
                </div>
                <div className={styles.menuBt}>
                    <button onClick={() => { setIsOpenWordsList(!isOpenWordsList) }}>Посмотреть слова</button>
                    <div className={styles.underline}></div>
                </div>

            </div>
            {
                isOpenAddWords && <AddWords />
            }
            {
                isOpenWordsList && <AdminWordsList />
            }

        </div>
    )
}


export default AdminWords;