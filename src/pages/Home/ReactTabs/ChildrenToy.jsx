
import { Link } from "react-router-dom";

const ChildrenToy = ({childrenToy}) => {
    const {_id, photo,name,  price, rating,  
    } = childrenToy;


return (
    <div className="card w-auto bg-base-100 shadow-xl">

    <div className="card-body items-center text-center">
    
    <div className="h-3/4 w-2/4">
  <img src={photo}  />
</div>
<div className="card-body items-center text-center">
  <h2 className="card-title text-orange-900">{name}</h2>
  <p className="font-bold">Price: ${price} </p>
  <p className="font-bold">Rating: {rating} <span>Star</span> </p>
  <div className="card-actions">
  <Link to={`/toyDetails/${_id}`}><button className=" p-3 rounded   bg-orange-900  text-white font-bold">View Details</button></Link>
  </div>
</div>
</div>
</div>
    );
};

export default ChildrenToy;