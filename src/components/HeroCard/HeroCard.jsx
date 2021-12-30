import { useAppContext } from '../../context/Context'

export default function HeroCard (props) {
    const { addToTeam, isItGood } = useAppContext()
    console.log(props.props)
    return (
        <div key={props.props.id} className="card" >
            <img className="card-img-top" src={props.props.image.url} alt={props.props.name} />
            <div className="card-body">
                <h5 className="card-title">{props.props.name}</h5>
                <button onClick={()=>addToTeam(props.props)} className={`btn btn-${props.props.biography.alignment === "good" ? "primary" : "danger"}`} >Add to team</button>
            </div>
        </div>
        
    )
}