import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";



const AllToys = () => {
  useEffect(()=>{
    document.title = " | AllToys"
})
    const actionToys = useLoaderData();
    const [results, setResults] = useState(actionToys.slice(0, 20));
    const [showAll, setShowAll] = useState(false);
  const [searchText, setSearchText] = useState("");

    const showAllResults = () => {
      setResults(actionToys);
      setShowAll(true);
    };

    const handleSearch = () => {
        fetch(`http://localhost:5000/toySearchByName/${searchText}`)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setResults(data);
          });
      };


    return (
  <div className="text-center mx-auto">
     <div className="search-box p-2 text-center">
          <input className="input input-bordered w-full max-w-xs"
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
          placeholder=" search toy name"
          />{" "}
          <button className="p-3 text-white bg-orange-900 rounded" onClick={handleSearch}>Search</button>
      
        </div>
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
                           
                        <Link to={`/toyDetails/${data._id}`}><button className="p-3 text-white bg-orange-900 rounded">View Details</button></Link>
                        </tr>
                    );
                })}
        {!showAll && (
        <button   className="p-3 m-4 text-center text-white bg-orange-900 rounded" onClick={showAllResults}>Show All</button>
      )}
            </tbody>
        </table>
  </div>

    );
};

export default AllToys;