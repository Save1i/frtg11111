import { useNavigate } from "react-router-dom"
import styles from "../styles/button.module.css"

const FormBtn = () => {
    const navigate = useNavigate()

    const goToForm = () => {
        navigate('/form')
    }
    return (
        <button onClick={goToForm} className={styles.form__btn}>Form</button>
    )
}

export default FormBtn