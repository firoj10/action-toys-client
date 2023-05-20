import  { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Register = () => {
  useEffect(()=>{
    document.title = " | Register"
})

  const { createUser, updateUserProfile } = useContext(AuthContext);
  const [error, setError] = useState('')


  const handleSubmit = (event) => {
  event.preventDefault();
  const form = event.target
  const email = form.email.value;
  const password = form.password.value;
  const name = form.name.value;
  const photoURL = form.photoURL.value;
  setError('');
   if(password.length <6){
      setError('Password must be 6 cherectar longer');
      return ;
  }


    const handleUpdateProfile = () => {
      const profile = {
        displayName: name,
        photoURL: photoURL,
     
      };
      updateUserProfile(profile)
        .then(() => {})
        .catch((error) => console.error(error));
        
    }; 
      createUser(email, password)
        .then((result) => {
          const user = result.user;
          console.log(user);
          form.reset();
          setError("");
          handleUpdateProfile(name, photoURL);
        })
        .catch((error) => {
          console.error(error);
          setError(error.message);
        });
      };
    return (

<div className="bg-base-200">
  
  <div className="">
    <div className="card-body w-3/4 mx-auto">
    <h1 className="text-3xl font-bold">Register now!</h1>

    <form onSubmit={handleSubmit}>
      <div className="form-control">
        <label className="label">
          <span className="label-text">name</span>
        </label>
        <input type="text"  name="name" placeholder="email" className="input input-bordered" required/>
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input type="email"  name="email" placeholder="email" className="input input-bordered"  required/>
      </div>
     
      <div className="form-control">
        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
        
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Photo Url</span>
        </label>
        <input type="text" name="photoURL"placeholder="Photo url" className="input input-bordered"  required/>
      </div>
      <div className="form-control mt-6">
      <input className="btn text-white bg-orange-900" type="submit" value="Register"  />

      </div>
      </form>
      <p className='my-4 text-center'>already logged in<Link className='text-orange-900 text-2xl underline' to="/login">Login  now</Link></p>
    </div>
    <div><p className='text-orange-900 font-bold text-2xl'>{error}</p></div>
  </div>
</div>
    );
};

export default Register;