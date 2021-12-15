import { Card } from 'reactstrap';

export default function HeroCard ({name, key, img}) {
    return (
        <div className="card" >
            <img className="card-img-top" src={img} alt={name} />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <a href="#" className="btn btn-primary">Add to team</a>
            </div>
        </div>
        
    )
}