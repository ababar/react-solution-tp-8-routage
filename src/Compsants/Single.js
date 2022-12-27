import { Link, useParams } from "react-router-dom"
function Single(props) {
    const {id} = useParams();
    const product = props.produits.find((p)=>p.id===parseInt(id));
    return (
        <div>
            <img src={`/pictures/${product.thumbnail}`} alt="" />
            <div className="card-body">
                <p className="card-title">{product.title}</p>
                <p className="card-text">{product.price}</p>
                <Link to={"/"}>Aller vers la page d'accuiel</Link>
            </div>
        </div>
    )
}
export default Single