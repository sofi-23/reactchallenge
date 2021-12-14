import { useNavigate } from 'react-router-dom'
import {useLoginContext} from '../context/Context'
export default function HeroeDetailContainer () {
    const navigate = useNavigate()
    const { loggedIn } = useLoginContext()
    if (!loggedIn) {
        return navigate("/")
    } else {
        return (
        <>
        <h1>I'm HeroesDetailContainer!</h1>
        </>
    ) 
    }

}