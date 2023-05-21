import { Link } from "react-router-dom";

import icon from "../../assets/logo.jpg"
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Tippy from "@tippyjs/react";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const handleLogout = () => {
    logout()
      .then(() => { })
      .catch(error => console.error(error))
  }
  const navItems = <>
    <li className="text-white   text-xl"><Link to="/">Home</Link></li>
    <li className="text-white  text-xl "><Link to="/alltoys">All Toys</Link></li>
    <>


      <li className="text-white   text-xl"><Link to="/addToy">Add Toy</Link></li>
      <li className="text-white   text-xl"><Link to="blog">Blogs</Link></li>
      {
        user?.email ? <>
          <li className="text-white   text-xl"><Link to="/myToy">My Toy</Link></li>
          <button className="text-white  mr-auto text-xl"
            onClick={handleLogout}>Logout</button>
        </> : <Link to='/login'><button className="text-white  text-xl mt-3" >Login</button></Link>
      }
      {user && <Tippy className='text-white px-2 bg-dark' content={user?.displayName}>
        <img className='rounded-full h-12  mx-2 w-12' src={user?.photoURL} />
      </Tippy>
      }
    </>
  </>
  return (
    <div className="navbar bg-orange-800 h-28 mb-4 rounded">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn  bg-orange-800   lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
              stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 py-2 shadow  bg-orange-800   rounded-box w-52 text-right">
            {navItems}
          </ul>
        </div>
        <Link className="btn btn-ghost normal-case  pl-20 text-xl">

          <img className='rounded-full h-10 w-10' src={icon} />
          <span className="font-4xl text-white">HeroToys</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal px-1 text-right">
          {navItems}

        </ul>
      </div>
    </div>

  );
};

export default Navbar;