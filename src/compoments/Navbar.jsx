import { Link, NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import UserDropDown from "./UserDropDown";

const Navbar = () => {
  const { user } = useAuth();
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <a className="text-xl btn btn-ghost"><span className="font-bold text-red-800">Gadget</span> Shop</a>
      </div>
      <div className="hidden navbar-center lg:flex">
        <ul className="px-1 menu menu-horizontal">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/products">Products</NavLink>
          </li>
          <li>
            <NavLink to="/about-us">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <UserDropDown />
        ) : (
          <div className="flex items-center gap-2">
            <Link to="/login">
              <button className="px-4 text-black rounded-md btn btn-sm border-t-gray-400">
                Login
              </button>
            </Link>
            <Link to="register">
              <button className="px-4 text-white bg-black rounded-md btn btn-sm">
                Regestration
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
