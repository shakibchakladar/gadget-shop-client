import { NavLink } from "react-router-dom";
import useUserData from "../../hooks/useUserData";
import { MdOutlineInventory2 } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";
import useAuth from "../../hooks/useAuth";
import { CiLogout } from "react-icons/ci";

const sellerRoutes = [
  {
    id: 1,
    route: "/dashboard/my-products",
    title: "My Product",
    icon: <MdOutlineInventory2 />,
  },
  {
    id: 2,
    route: "/dashboard/add-products",
    title: "Add Product",
    icon: <IoIosAddCircle />,
  },
];

const Sidebar = () => {
  const userData = useUserData();
  const { LogOut } = useAuth();
  return (
    <div className="min-h-screen border-r-2 border-black shadow-md bg-sky-700">
      <ul className="flex flex-col justify-center gap-5 pt-6">
        <li className="p-2 mx-2 border border-black btn">
          <NavLink className="" to="/dashboard/overview">
            Overview
          </NavLink>
        </li>

        {userData.role === "seller" &&
          sellerRoutes.map((route) => (
            <li key={route.id} className="p-2 mx-2 border border-black btn">
              <NavLink className="flex items-center gap-x-2 " to={route.route}>
                <>{route.icon}</>
                <p>{route.title}</p>
              </NavLink>
            </li>
          ))}
        <li className="p-2 mx-2 border border-black btn">
          <NavLink className="p-2 m-2 " to="/">
            Home{" "}
          </NavLink>
        </li>
        <li className="p-2 mx-2 border border-black btn">
          <button onClick={LogOut} className="">
            <div className="flex justify-center gap-5">
              <CiLogout />
              Log Out
            </div>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
