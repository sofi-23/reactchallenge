import { useLoginContext } from "../context/Context"
import { useNavigate } from 'react-router-dom'


export default function HeroesListContainer () {
    
    const navigate = useNavigate()
    const { loggedIn } = useLoginContext()
    return (
        <>
        {
        !loggedIn ?
        ()=> {
            navigate("/")
        }
            :
            <h1>I'm HeroesListContainer!</h1>
        }
        </>
    )
 

}
