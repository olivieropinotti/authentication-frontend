import { useNavigate } from "react-router-dom"

export function LandingPage() {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/login')
    }
    return (
        <div>
            <button onClick={handleClick}>Login</button>
        </div>
    )
}