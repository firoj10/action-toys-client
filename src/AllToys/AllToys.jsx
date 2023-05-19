import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";



const AllToys = () => {
    const actionToys = useLoaderData();
    // console.log(actionToys.length)
    const [results, setResults] = useState(actionToys.slice(0, 20));
    const [showAll, setShowAll] = useState(false);

    const showAllResults = () => {
      setResults(actionToys);
      setShowAll(true);
    };
    return (
  <div className="text-center mx-auto">
          <table className="table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>sellername</th>
                    <th>Toy name</th>
                    <th>sub categoris</th>
                    <th>price</th>
                    <th>Available quantity</th>
                    <th>Action</th>
                
                </tr>
            </thead>
            <tbody>
                {results.map((data, index) => {
                    return (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td >{data.sellername}</td>
                            <td >{data.name}</td>
                            <td >{data.subcategoris}</td>
                            <td >{data.price}</td>
                            <td >{data.availablequantity}</td>
                           
                        <Link to={`/toyDetails/${data._id}`}><button className="btn btn-accent">View Details</button></Link>
                        </tr>
                    );
                })}
        {!showAll && (
        <button   className="btn btn-accent text-center" onClick={showAllResults}>Show All</button>
      )}
            </tbody>
        </table>
  </div>

    );
};

export default AllToys;