import { useAppContext } from "../../context/Context";
import  ProgressBar  from "react-bootstrap/ProgressBar";
import { Container, Row, Col } from 'reactstrap'

export default function GeneralStats () {
    const { powerstats, bestPowerstat } = useAppContext()
    console.log(powerstats)
    return (
        <Container >
            <Row>
            <h2 style={{color: "#ffff"}}>Team powerstats: </h2>
            {bestPowerstat !== [] && 
            <h3>Team's main power: {bestPowerstat.map(pw=> pw + " ")}</h3>
            }
            </Row>
            {
                powerstats.map(pw=> 
                    <Row key={pw.powerstat} className="pt-4 justify-content-center align-content-start">
                        <Col >
                            <h3 className="powerstatTitle">{pw.powerstat}:</h3>
                        </Col>
                        <Col  className="m-auto ">
                            <ProgressBar striped now={pw.value/6} label={`${parseInt(pw.value/6)}%`} animated min={0} max={100} variant="success" className="generalProgressBar" />
                        </Col>
                        <Col  className="numberContainer">
                            <h4 className="m-auto">{parseInt(pw.value/6)}%</h4>
                        </Col>
                    </Row>)
            }
        </Container>
    )
}