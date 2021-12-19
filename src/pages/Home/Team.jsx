import { useAppContext } from "../../context/Context";
import TeamMember from "../../components/Team/TeamMember";
import {Container, Row, Col} from 'reactstrap';
import GeneralStats from "../../components/Team/GeneralStats";

export default function Team () {
    const { team } = useAppContext()

    return (
        <>
            <Container>
                <Row>
                    <h2 className="emptyTeamMessage pt-5">{team.length === 0 ? "Your team is empty": "Say hello to your team"}</h2> 
                    </Row>
                <Row>
                    <Col> <TeamMember props={team[0] ?team[0] : false} /></Col>
                    <Col> <TeamMember props={team[1] ?team[1] : false}/></Col>
                    <Col> <TeamMember props={team[3] ?team[3] : false}/></Col>
                </Row>
                <Row>
                    <Col><TeamMember props={team[4]?team[4] : false}/></Col>
                    <Col><TeamMember props={team[5]?team[5] : false}/></Col>
                    <Col><TeamMember props={team[2]?team[2] : false}/></Col>
                </Row>  
            </Container>
            <Container>
                <Row className="mt-5 backgroundStats">
                    <Col>
                    <GeneralStats />
                    </Col>
                </Row>        
            </Container>
            
        </>
    )
}