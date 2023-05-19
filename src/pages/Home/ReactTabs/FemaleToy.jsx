import { Link } from "react-router-dom";


const FemaleToy = ({femaleToy}) => {
    const {_id, photo,name,  price, rating,  
    } = femaleToy;
return (

     <div className="container card w-96 bg-base-100 shadow-xl">
<figure className="px-10 pt-10">
<img src={photo} />
</figure>
<div className="card-body items-center text-center">
<h2 className="card-title">{name}</h2>
<p>price: ${price} </p>
<p>price: {rating} <span>Star</span> </p>
<div className="card-actions">
 
<Link to={`/toyDetails/${_id}`}><button className="btn btn-accent">View Details</button></Link>
</div>
</div>
</div>
    );
};

export default FemaleToy;