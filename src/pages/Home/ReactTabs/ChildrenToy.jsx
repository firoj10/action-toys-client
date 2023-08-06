
import { Link } from "react-router-dom";

const ChildrenToy = ({childrenToy}) => {
    const {_id, photo,name,  price, rating,  
    } = childrenToy;


return (
    <div className="card w-auto bg-base-100 shadow-xl">

    <div className="card-body items-center text-center">
    
    <div className="">
  <img className="h-[150px] w-[200px]" src={photo}  />
</div>
<div className="card-body items-center text-center">
  <h2 className="card-title text-orange-900">{name}</h2>
  <p className="font-bold text-[25px]">${price} </p>
  {/* <p className="font-bold">Price: ${price} </p>
  <p className="font-bold">Rating: {rating} <span>Star</span> </p> */}
  <div className="card-actions">
  <Link to={`/toyDetails/${_id}`}><button className=" p-3   bg-orange-900  text-white ">View Details</button></Link>
  </div>
</div>
</div>
</div>
    );
};

export default ChildrenToy;