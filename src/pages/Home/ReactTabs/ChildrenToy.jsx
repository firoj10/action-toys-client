import { Link } from "react-router-dom";


const ChildrenToy = ({childrenToy}) => {
    const {_id, photo,name,  price, rating,  
    } = childrenToy;
return (

     <div className="card w-96 bg-base-100 shadow-xl">

<div className="card-body items-center text-center">

<div className="h-3/4 w-2/4">
<img src={photo}  />
</div>

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

export default ChildrenToy;