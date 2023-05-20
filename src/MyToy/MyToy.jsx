import { useContext, useEffect, useState,  } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyToy = () => {
  useEffect(()=>{
    document.title = " | MyToy"
})
  const { user } = useContext(AuthContext);
  const [mytoys, setmytoys] = useState([]);
  const [isAsc, setIsAsc] = useState(true);



  useEffect(() => {
    fetch(`http://localhost:5000/myToy/${user?.email}?order=${ isAsc ? 'asc' : 'desc'}`)
    .then((res) => res.json())
    .then((data) => {
      setmytoys(data);
      console.log(data)
    });
  }, [ isAsc, user ]);


  
 
  const handleDelet = _id =>{
    console.log(_id)
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {

        if(result.isConfirmed){
          fetch(`http://localhost:5000/actionToy/${_id}`,{
            method: 'DELETE'
          })
          .then(res => res.json())
          .then(data=>{
            console.log(data);
            if(data.deletedCount > 0){
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
              const remaining = mytoys.filter(cof=> cof._id !==_id);
              setmytoys(remaining);
            }
          })
        }
    })
  }

  
    return (
      <div className="text-center mx-auto">
         <button className='btn btn-ghost' onClick={() => setIsAsc(!isAsc)}>{isAsc ? 'desc' : 'asc'}</button>
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
            {mytoys?.map((data) => {
                return (
                    <tr key={data._id}>
                        <td>{data?._id}</td>
                        <td >{data?.sellername}</td>
                        <td >{data?.name}</td>
                        <td >{data?.subcategoris}</td>
                        <td >{data?.price}</td>
                        <td >{data?.availablequantity}</td>
                    <Link to={`/updateToy/${data._id}`}><button className="btn btn-accent">Update Toy</button></Link>
                    <button
  onClick={()=>handleDelet(data._id)}
  className="btn">Delete</button>
                    </tr>
                );
            })}
        </tbody>
    </table>
</div>
    );
};

export default MyToy;