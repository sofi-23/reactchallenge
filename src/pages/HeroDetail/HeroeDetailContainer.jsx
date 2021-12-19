import { useParams } from 'react-router-dom';
import api from "../../services/axios";
import { useEffect, useState } from 'react';
import { Container, Row } from 'reactstrap';
import HeroDetail from './HeroDetail'

export default function HeroeDetailContainer () {
    const { heroId } = useParams();
    const [hero, setHero] = useState({});
    const [loading, setLoading] = useState(true);
    
    const fetchHero = async () => {
        try {
            const response = await api.get(`/${heroId}`)
                if (response && response.data) {
                    setHero(response.data)
                }
            }catch(err) {
                console.log(err)    
            }finally {
                setLoading(false)
            }
        }

    useEffect(() => {
        fetchHero()
        console.log(hero)
    }, [heroId])

    return (
        <>
            <Container className="pt-5">
                <Row className="mt-5">
                    { loading ? 
                        <h1>Loading... </h1> : 
                        <HeroDetail name={hero.name} 
                                    img={hero.image.url} 
                                    weight={hero.appearance.weight} 
                                    height={hero.appearance.height} 
                                    alterEgos={hero["biography"]["alter-egos"]} 
                                    eyeColor={hero["appearance"]["eye-color"]} 
                                    hairColor={hero["appearance"]["hair-color"]} 
                                    workBase={hero.work.base} 
                        />
                    }
                    
                </Row>
            </Container>
        </>
    ) 
}

