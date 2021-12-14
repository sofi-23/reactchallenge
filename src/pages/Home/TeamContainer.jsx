import { useLoginContext } from "../../context/Context"
import { useNavigate } from 'react-router-dom'
import api from "../../services/axios"
import { useEffect } from "react"
import Searchbar from "../../components/Seachbar/Searchbar"

export default function TeamContainer () {
    
    const navigate = useNavigate()
    const { loggedIn } = useLoginContext()

    useEffect(() => {
        const fetchHeroes = async () => {
            try {
                const response = await api.get("/70")
                if (response && response.data) {console.log(response)}
            }catch(err){
                console.log("ERROR" + err)
            }
        }
        fetchHeroes()
    }, [])
    return (
        <>
        {
        !loggedIn ?
        ()=> {
            navigate("/")
        }
            :
            <div className="teamContainer ">
                <Searchbar />
                <div>
                    <h1 className="teamHeader pt-5">Say hello to your Team: </h1>
                </div>
            </div>  
        }
        </>
    )
 

}
