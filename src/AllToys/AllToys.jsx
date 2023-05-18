import { Link, useLoaderData } from "react-router-dom";



const AllToys = () => {
    const actionToys = useLoaderData();
    console.log(actionToys.length)

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
                {actionToys.map((data, index) => {
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
            </tbody>
        </table>
  </div>

    );
};

export default AllToys;