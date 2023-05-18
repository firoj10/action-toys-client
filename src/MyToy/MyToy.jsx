import { useContext, useEffect, useState,  } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router-dom";





const MyToy = () => {
  const { user } = useContext(AuthContext);
  const [jobs, setJobs] = useState(null);

 
  console.log()

  useEffect(() => {
    fetch(`http://localhost:5000/myToy/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
   
   
      });
  }, [user]);
    console.log(jobs)
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
            {jobs?.map((data) => {
                return (
                    <tr key={data._id}>
                        <td></td>
                        <td >{data?.detaildescription}</td>
                        <td >{data?.name}</td>
                        <td >{data?.subcategoris}</td>
                        <td >{data?.price}</td>
                        <td >{data?.availablequantity}</td>
                       
                    <Link to={`/toyDetails/${data._id}`}><button className="btn btn-accent">View Details</button></Link>
                    </tr>
                );
            })}
        </tbody>
    </table>
</div>
    );
};

export default MyToy;