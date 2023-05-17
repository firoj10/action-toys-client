import { Link } from "react-router-dom";

import icon from "../../assets/33.jpg"

const Navbar = () => {
  const navItems = <>
    <li className="text-white  font-bold"><Link to="/">Home</Link></li>
    <li className="text-white font-bold "><Link to="/about">All Toys</Link></li>
    <>
      <li className="text-white  font-bold"><Link to="/bookings">My Toys</Link></li>
      <li className="text-white font-bold "><Link to="/bookings">Blogs</Link></li>
      <li className="text-white font-bold "><Link to="/bookings">Login</Link></li>


    </>



  </>
  return (
    <div className="navbar bg-cyan-400 h-28 mb-4">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">

          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>

          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-end">

            {navItems}

          </ul>
        </div>
        <Link className="btn btn-ghost normal-case text-xl">

          <img src={icon} alt="" className="h-8 w-8 rounded-xl" />
          <span className="font-xl text-white">Heros</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-end">
          {navItems}
        </ul>
      </div>
      <div className="navbar-end">


      </div>
    </div>

  );
};

export default Navbar;