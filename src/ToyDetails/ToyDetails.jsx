import { useLoaderData } from "react-router-dom";


const ToyDetails = () => {
    const toyDetails = useLoaderData();
  
    return (
        <div>
           <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img src={toyDetails.photo} alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title font-bold text-orange-900">{toyDetails.name}</h2>
    <p className="px-2 font-bold">Seller name:<span className="px-2 font-normal">{toyDetails.sellername}</span></p>
    <p className="px-2 font-bold">Selleremail: <span className="px-2 font-normal">{toyDetails.selleremail}</span></p>
    <p className="px-2 font-bold">Price:<span className="px-2 font-normal">${toyDetails.price}</span></p>
    <p className="px-2 font-bold">Rating:<span className="px-2 font-normal">{toyDetails.rating}Star</span></p>
    <p className="px-2 font-bold">Available quantity:<span className="px-2 font-normal">{toyDetails.availablequantity}</span></p>
    <p className="px-2 font-bold">Detailde scription:<span className="px-2 font-normal">{toyDetails.detaildescription}</span></p>
  
   
  </div>
</div>
        </div>
    );
};

export default ToyDetails;