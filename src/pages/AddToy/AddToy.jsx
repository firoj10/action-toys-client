import {useContext,  useEffect,  useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
// import { AuthContext } from "../../Provider/AuthProvider";


const AddToy = () => {
    useEffect(()=>{
        document.title = " | AddToy"
    })

    const {user}= useContext(AuthContext)
    const [selectedValue, setSelectedValue] = useState('');
    const handleChange = (event) => {
        setSelectedValue(event.target.value);
      };
    const handleSubmit = async (event) => {

        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const sellername = form.sellername.value;
        const selleremail = form.selleremail.value;
        const price = parseInt(form.price.value);
        const availablequantity = form.availablequantity.value;
        const rating = form.rating.value;
        const detaildescription = form.detaildescription.value;
        const photo = form.photo.value;
        const subcategoris =form.select.value;


    
        const newToy = { photo,name,  sellername, selleremail,subcategoris, price, rating, availablequantity, 
            detaildescription }
       
        //send data to server
        fetch('http://localhost:5000/actionToy', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'success',
                        text: 'Toy added successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      })
                }
            })
    }

    return (
        <div className="bg-[#F4F3F0] p-24">
            <h2 className="text-3xl font-extralight">Add A Toy</h2>
            <form onSubmit={handleSubmit}>

                <div className="md:flex mb-7">
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Toy Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="coffee Name"
                                className="input input-bordered w-full" required />
                        </label>
                    </div>
                    <div className="form-control  md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Seller name</span>
                        </label>
                        <label className="input-group">

                            <input type="text" placeholder="seller name" name="sellername"
                                className="input input-bordered w-full" required />
                        </label>
                    </div>
                </div>

                <div className="md:flex mb-7">
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Seller email</span>
                        </label>
                        <label className="input-group">
                            <input type="text" defaultValue={user?.email} name="selleremail" placeholder="seller email"
                                className="input input-bordered w-full" required />
                        </label>
                    </div>
                    <div className="form-control  md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">

                            <input type="number" placeholder="Price" name="price"
                                className="input input-bordered w-full" required />
                        </label>
                    </div>
                </div>

                <div className="md:flex mb-7">
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Available quantity</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="availablequantity" placeholder="Available quantity"
                                className="input input-bordered w-full" required />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Sub category</span>
                        </label>
                        <select name="select" value={selectedValue} onChange={handleChange}>
                            <option value="">Select an option</option>
                            <option value="male-hero">Male hero</option>
                        <option value="female-hero">female hero</option>
                        <option value="children-hero">children hero</option>
                        </select>
                    </div>
                </div>

                <div className="md:flex mb-7">
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="number" name="rating" placeholder="Rating"
                                className="input input-bordered w-full" required/>
                        </label>
                    </div>
                    <div className="form-control  md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Detail description</span>
                        </label>
                        <label className="input-group">

                            <input type="text" placeholder="Detail description" name="detaildescription"
                                className="input input-bordered w-full" required />
                        </label>
                    </div>
                </div>
                <div className="ml-4 mb-7">
                    <div className="form-control md-full">
                        <label className="label">
                            <span className="label-text">Photo Url</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="photo" placeholder="Photo Url"
                                className="input input-bordered w-full" required />
                        </label>
                    </div>
                </div>


                <input type="submit" value="add Toy" className="btn btn-block" />
            </form>
        </div>
    );
};

export default AddToy;