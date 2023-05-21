import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaGoogle} from "react-icons/fa";


const Login = () => {
  useEffect(()=>{
    document.title = " HeroToys | Login"
})
  const { sinInWithGoogle,  singIn} = useContext(AuthContext)
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState('')
  const from = location.state?.from?.pathname || '/';

  const handleSingin = event =>{
    event.preventDefault()
    const form = event.target
    const email = form.email.value
    const password = form.password.value
    console.log(email,password)
    setError('');
    if(password.length <6){
       setError('Password must be 6 cherectar longer');
       return ;
   }


    singIn(email, password)
    .then((result) => {
        const loggerSingIn = result.user;
        console.log(loggerSingIn)
      
        setError('')
        form.reset();
          navigate(from ,{replace: true})
     
   
      })
      .catch((error) => {
    console.log (error.message)
        setError('users email or password doesnt match')
      })
}
  const handleGoogleSignIn = () => {
    sinInWithGoogle()
    .then(result=>{
      const loggedUser = result.user;
      console.log(loggedUser)
      navigate(from ,{replace: true})
    })
    .catch(error=>{
      console.log(error)
    })
  }
  
  return (
    <div>
    <div className="bg-base-200">

<div className="">
<div className="card-body w-3/4 mx-auto">
<h1 className="text-3xl font-bold">Login  now!</h1>

<form onSubmit={handleSingin}>
<div className="form-control">
<label className="label">
 <span className="label-text">Email</span>
</label>
<input type="email"  name="email" placeholder="email" className="input input-bordered" required/>
</div>
<div className="form-control">
<label className="label">
 <span className="label-text">Password</span>
</label>
<input type="password" name="password" placeholder="password" className="input input-bordered" required/>

</div>

<div className="form-control mt-6">
<input className=  " btn bg-orange-900 text-white " type="submit" value="Login" />

</div>
<button onClick={handleGoogleSignIn}  className='m-2 bg-orange-900 text-white flex items-center text-2xl p-3 rounded-md' >
        
             <FaGoogle /> Login with Google</button>
</form>
<p className='my-4 text-center'>New to action Toy <Link className='text-orange-900 text-2xl underline' to="/register">Register now</Link></p>
<p className="text-orange-900 text-2xl">{error}</p>
</div>
</div>
</div> 
</div>

  );
};

export default Login;