import { useLoaderData } from "react-router-dom";


const ToyDetails = () => {
    const toyDetails = useLoaderData();
  
    return (
        <div>
           <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img src={toyDetails.photo} alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">{toyDetails.name}</h2>
    <p>{toyDetails.sellername}</p>
    <p>{toyDetails.selleremail}</p>
    <p>{toyDetails.price}</p>
    <p>{toyDetails.rating}</p>
    <p>{toyDetails.availablequantity}</p>
    <p>{toyDetails.detaildescription}</p>
   
  </div>
</div>
        </div>
    );
};

export default ToyDetails;