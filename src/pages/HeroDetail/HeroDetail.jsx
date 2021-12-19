import { Col, Row } from 'reactstrap';

export default function HeroDetail ({name, img, weight, height, workBase, eyeColor, hairColor, alterEgo}){
    return (
        <>
            <Col md={6}><img src={img} alt={name} /></Col>
            <Col md={6}>
                <Row><h2>{name}</h2></Row>
                <Col md={6}>
                    <h5>Alter-ego:{alterEgo}</h5>
                    <h5>Wieght: {weight}</h5>
                    <h5>Height: {height}</h5>
                    
                </Col>
                <Col md={6}>
                    <h5>Work base: {workBase}</h5>
                    <h5>Eye color: {eyeColor}</h5>
                    <h5>Hair color: {hairColor}</h5>
                </Col>
            </Col>
        </>
    )
}