import  { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';


import { AuthContext } from '../Provider/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loading}= useContext(AuthContext)
    console.log(user);
    const location = useLocation();
    if(loading){
        return <p>hi</p>;
    }
  if(user){
    return children;
  }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>;
}

export default PrivateRoute;