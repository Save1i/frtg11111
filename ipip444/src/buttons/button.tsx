import { useNavigate } from "react-router-dom"

const FormBtn = () => {
    const navigate = useNavigate()

    const goToForm = () => {
        navigate('/form')
    }
    return (
        <button onClick={goToForm}>Form</button>
    )
}

export default FormBtn