import { useLoginContext } from "../context/Context"
import { useNavigate } from 'react-router-dom'

export default function HeroesListContainer () {
    const navigate = useNavigate()
    const { loggedIn } = useLoginContext()
    if (!loggedIn) {
        return navigate("/")
    } else {
        return (
        <>
        <h1>I'm HeroesListContainer!</h1>
        </>
    ) 
    }

}
