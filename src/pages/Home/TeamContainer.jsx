import { useAppContext } from "../../context/Context"
import { useNavigate } from 'react-router-dom'
import api from "../../services/axios"
import { useEffect, useState } from "react"
import Searchbar from "../../components/Seachbar/Searchbar"
import { Formik } from 'formik'
import HeroCard from "../../components/HeroCard/HeroCard"

export default function TeamContainer () {
    const [heroName, setHeroName] = useState("");
    const [heroesFound, setHeroesFound] = useState([])
    const navigate = useNavigate()
    const { loggedIn } = useAppContext()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        const fetchHeroes = async () => {
            try {
                const response = await api.get(`/search/${heroName}`)
                if (response && response.data) {
                    setHeroesFound(response.data.results)
                }
                }catch(err){
                console.log(err)
                }finally{
                    setLoading(false)
                }
            }
        fetchHeroes()
    }, [heroName])


    const handleOnSubmit = (e) => {
        setHeroName(e.heroName)
    }

    return (
        <>
        {
            !loggedIn ?
            ()=> {
                navigate("/")
                }
            :
            <div className="teamContainer ">
                <h1 className="teamHeader pt-5">Say hello to your Team: </h1>
                <span>Here goes the team</span>
                <Formik 
                    validateOnChange={false}
                    initialValues={
                        {heroName: ""}
                    }
                    onSubmit={(e ) => 
                        handleOnSubmit(e)
                    }
                    validate={(value) => {
                        if (value.heroName === "") {
                            setError("Please enter a hero or villain's name")
                        } else if (!heroesFound ) {
                            setError("There's no hero with that name")
                        } else {
                            setError("")
                        }
                    }}
                >
                    {({handleSubmit, values, handleChange})=> (
                    <Searchbar handleSubmit={handleSubmit} values={values} handleChange={handleChange} />
                    )}
                    </Formik>
                <div className="heroesResultContainer">
                <div className="d-flex m-5 flex-wrap justify-content-evenly">
                    {   loading ? <div>LOADING</div> :
                        heroesFound ?
                        heroesFound.map((hero) => {
                            return (
                            <HeroCard key={hero.id} name={hero.name} img={hero.image.url} />
                            )
                        }): 
                        <div className="errorMessage"> {error}  </div>
                    }
                    </div>
                </div>
            </div>  
        
        }
        </>  
    )

}
