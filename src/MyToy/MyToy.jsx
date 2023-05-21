import { useContext, useEffect, useState,  } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyToy = () => {
  useEffect(()=>{
    document.title = " HeroToys | MyToy"
})
  const { user } = useContext(AuthContext);
  const [mytoys, setmytoys] = useState([]);
  const [isAsc, setIsAsc] = useState(true);



  useEffect(() => {
    fetch(`https://action-toys-server-seven.vercel.app/myToy/${user?.email}?order=${ isAsc ? 'asc' : 'desc'}`)
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
          fetch(`https://action-toys-server-seven.vercel.app/actionToy/${_id}`,{
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
      <div className="container mx-auto">
        <div className="text-center">
        <button className='p-3 my-10 px-8 text-white  bg-orange-900 rounded font-bold' onClick={() => setIsAsc(!isAsc)}>{isAsc ? ' Data Desc' : 'Data Asc'}</button>

        </div>
      <table className="table">
        <thead>
            <tr>
                
                <th>Photo</th>
                <th>Sellername</th>
                <th>Toy name</th>
                <th>sub categoris</th>
                <th>Price</th>
                <th>Selleremail</th>
                <th>Rating</th>
                <th>Availablequantity</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>

   
            {mytoys?.map((data) => {
                return (
                    <tr key={data._id}>
                        <td> <img className="h-7 w-7" src={data?.photo} alt="" /></td>
                        <td >{data?.sellername}</td>
                        <td >{data?.name}</td>
                        <td >{data?.subcategoris}</td>
                        <td >{data?.price}</td>
                        <td >{data?.selleremail}</td>
                        <td >{data?.rating}</td>
                        <td >{data?.availablequantity}</td>
                        
                    <Link to={`/updateToy/${data._id}`}><button className=" p-3 text-white bg-orange-900 rounded">Update Toy</button></Link>
                    <button
  onClick={()=>handleDelet(data._id)}
  className="p-3 text-white bg-orange-900 rounded m-4 text-center">Delete</button>
                    </tr>
                );
            })}
        </tbody>
    </table>
</div>
    );
};

export default MyToy;