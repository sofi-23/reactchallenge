import { useAppContext } from "../../context/Context"
import { useNavigate } from 'react-router-dom'
import api from "../../services/axios"
import { useEffect, useState } from "react"
import Searchbar from "../../components/Seachbar/Searchbar"
import { Formik } from 'formik'
import HeroCard from "../../components/HeroCard/HeroCard"
import Team from "./Team"
import {Container, Row, Col} from 'reactstrap'

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
            <div className="homeContainer" >
                <Team />
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
                            <Container>
                                <Row>
                                {  loading ? <div>LOADING</div> :
                                    heroesFound ?
                                        heroesFound.map((hero) => {
                                            return ( 
                                            <Col key={hero.id} md={4}>
                                                <HeroCard key={hero.id} props={hero} />
                                            </Col>
                                        )
                                    }): loading &&
                                    <div className="errorMessage"> {error}  </div>
                                }
                            
                                </Row>
                            </Container>

                        </div>
                    </div>
            </div>  
        
        }

        </>  
    )

}
