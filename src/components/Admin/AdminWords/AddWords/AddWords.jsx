import React from "react";
import styles from './AddWords.module.css'
import { useSelector, useDispatch } from "react-redux";
import { fetchAdminCategory } from "../../../../Redux/Slices/admin-slices/admin-words-slice";
import { setWordName, setWordTranslate, setCategory, setUsageExample } from "../../../../Redux/Slices/admin-slices/admin-words-slice";
import axios from "axios";

const AddWords = () => {

    const addWord = async (body) => {
        const token = localStorage.getItem('adminToken')
        const response = await axios.post('http://localhost:4444/words/createWord', body, { headers: { Authorization: "Bearer " + token } })
        return response.data
    }



    const dispatch = useDispatch()
    const newWordData = useSelector(state => state.adminWords.createNewWordData)
    const categories = useSelector(state => state.adminWords.categories)


    const wordNameRef = React.useRef(null)
    const wordName = useSelector(state => state.adminWords.createNewWordData.word)


    const wordTranslateRef = React.useRef(null)
    const wordTranslate = useSelector(state => state.adminWords.createNewWordData.translate)


    const usageExampleRef = React.useRef(null)
    const usageExample = useSelector(state => state.adminWords.createNewWordData.usageExample)



    React.useEffect(() => {
        dispatch(fetchAdminCategory())
    }, [])


    const onChangeWordName = () => {
        const text = wordNameRef.current.value
        dispatch(setWordName(text))
    }


    const onChangeWordTranslate = () => {
        const text = wordTranslateRef.current.value
        dispatch(setWordTranslate(text))
    }

    const onChangeUsageExample = () => {
        const text = usageExampleRef.current.value
        dispatch(setUsageExample(text))
    }

    const [selectCategory, setSelectCategory] = React.useState(null)

    return (
        <div className={styles.addWord}>
            <div className={styles.inputs}>
                <input ref={wordNameRef} onChange={onChangeWordName} value={wordName} type="text" placeholder="Введите слово" />
                <input ref={wordTranslateRef} onChange={onChangeWordTranslate} value={wordTranslate} type="text" placeholder="Введите перевод" />
                <input ref={usageExampleRef} onChange={onChangeUsageExample} value={usageExample} type="text" placeholder="Введите пример использования" />
            </div>
            <div className={styles.categories}>
                {
                    categories && categories.map(
                        (el, i) => <div
                            onClick={() => {
                                dispatch(setCategory(el.engName))
                                setSelectCategory(i)
                            }}
                            className={styles.category}
                            style={selectCategory === i ? { background: '#dfb02f', color: '#fff' } : null}>
                            {el.name}
                        </div>
                    )
                }
            </div>
            <div>
                <button className={styles.addWordBt} onClick={() => { addWord(newWordData) }}>Add word</button>
            </div>
        </div>
    )
}


export default AddWords;