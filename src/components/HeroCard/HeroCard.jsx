import { useAppContext } from '../../context/Context'

export default function HeroCard (props) {
    const { addToTeam } = useAppContext()
    console.log(props.props.error)
    return (
        <div key={props.props.id} className="card" >
            <img className="card-img-top" src={props.props.image.url} alt={props.props.name} />
            <div className="card-body">
                <h5 className="card-title">{props.props.name}</h5>
                <button onClick={()=>addToTeam(props.props)} className="btn btn-primary">Add to team</button>
            </div>
        </div>
        
    )
}