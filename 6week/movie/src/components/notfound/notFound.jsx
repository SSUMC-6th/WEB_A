import { useNavigate } from "react-router-dom"
import { StyledNotFound } from "./notFound.style"

export const NotFound =() => {
    const navigate = useNavigate();

    const handleToGoMain = () => {
        navigate('/');
    }
    return(
        <StyledNotFound>
            <h1>Not Found</h1>
            <h1 onClick={handleToGoMain}>메인으로 돌아가기</h1>
        </StyledNotFound>
    )
}