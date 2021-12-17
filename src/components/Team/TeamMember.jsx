import QuestionMark from "../../assets/questionMark.png";
import ProgressBar from 'react-bootstrap/ProgressBar'
import { useAppContext } from "../../context/Context"

export default function TeamMember (props) {

    const { isItGood, removeFromTeam } = useAppContext()
    
    return <>
            {props.props !== false ? 
                <div className="teamCard ">
                    <div className="cardFront ">
                        <img src={props.props.image.url} alt={props.props.name}/>
                        <h3>{props.props.name}</h3>
                    </div>
                    <div className="cardBack notEmptyCard ">
                        <h3>{props.props.name}</h3>
                        <span></span>
                        <div className=" d-flex flex-column p-3 pt-0">
                            <span>Intelligence </span>
                                <ProgressBar now={props.props.powerstats.intelligence} label={`${props.props.powerstats.intelligence}%`} animated max={100} min={0} variant={isItGood(props.props.id) ? "primary" : "danger"} /> 
                                <span>Strength </span>
                                <ProgressBar now={props.props.powerstats.strength} label={`${props.props.powerstats.strength}%`} animated  variant={isItGood(props.props.id) ? "primary" : "danger"} /> 
                                <span>Speed </span>
                                <ProgressBar now={props.props.powerstats.speed} label={`${props.props.powerstats.speed}%`} animated variant={isItGood(props.props.id) ? "primary" : "danger"} /> 
                                <span>Durability </span>
                                <ProgressBar now={props.props.powerstats.durability} label={`${props.props.powerstats.durability}%`} animated  variant={isItGood(props.props.id) ? "primary" : "danger"}/> 
                                <span>Power </span>
                                <ProgressBar now={props.props.powerstats.power} label={`${props.props.powerstats.power}%`} animated variant={isItGood(props.props.id) ? "primary" : "danger"} /> 
                                <span>Combat </span>
                                <ProgressBar now={props.props.powerstats.combat} label={`${props.props.powerstats.combat}%`} animated variant={isItGood(props.props.id) ? "primary" : "danger"} /> 
                        </div>
                        <div className=" d-flex justify-content-evenly pb-1">
                            <button className={`p-1 btn btn-${isItGood(props.props.id) ? "primary" : "danger"}`} onClick={()=> removeFromTeam(props.props.id, props.props.powerstats)}> Remove</button>
                            <button className={`p-1 btn btn-${isItGood(props.props.id) ? "primary" : "danger"}`}>Details</button>
                        </div>
                        
                    </div>
                </div>
                    
                : 
                <div className="teamCard emptyCard">
                    <div className="cardFront d-flex align-items-center">
                        <img src={QuestionMark} alt="question mark"/>
                    </div>
                    <div className="cardBack emptyCard d-flex align-items-center justify-content-center">
                        <h3>Empty space</h3>
                    </div>
                </div>
                
            }
            

    </>
}