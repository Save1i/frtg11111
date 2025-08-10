import { useNavigate } from "react-router-dom"
import styles from "../styles/button.module.css"

const BackBtn = () => {
    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1)
    }
    return (
        <button onClick={goBack} className={styles.back__btn}>Back</button>
    )
}

export default BackBtn