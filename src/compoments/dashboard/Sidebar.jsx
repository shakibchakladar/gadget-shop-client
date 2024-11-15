import { NavLink } from "react-router-dom";
import useUserData from "../../hooks/useUserData";
import { MdOutlineInventory2 } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";

const sellerRoutes = [
  {
    id: 1,
    route: "/dashboard/my-products",
    icon: <MdOutlineInventory2 />,
  },
  {
    id: 2,
    route: "/dashboard/add-products",
    icon: <IoIosAddCircle />,
  },
];

const Sidebar = () => {
  const userData = useUserData();
  return (
    <div className="min-h-screen border-r-2 border-black bg-slate-200">
      <ul className="flex flex-col justify-center gap-5 pt-6">
        <li className="btn">
          <NavLink className="" to="/dashboard/overview">
            Overview
          </NavLink>
        </li>

        {
            useUserData.role==='seller' &&
            sellerRoutes.map(route=> <li key={route.id} className="p-2 borb">
                <NavLink className="flex items-center gap-2 " to={route.route}>
                    <>{route.icon}</>
                  My products
                </NavLink>
              </li>)
        }
        <li className="btn">
          <NavLink className="p-2 m-2 " to="/my-products">
            My products
          </NavLink>
        </li>
        <li className="btn">
          <NavLink className="p-2 m-2 " to="/add-products">
            Add Products
          </NavLink>
        </li>
        <li className="btn">
          <NavLink className="p-2 m-2 " to="/">
            Home{" "}
          </NavLink>
        </li>
        <li className="ml-3 btn">
          <button className="btn">Log Out</button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
