import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const UserDropDown = () => {
  const { user, LogOut } = useAuth();

  const handleLogOut = () => {
    LogOut();
  };
  return (
    <div className="dropdown dropdown-bottom dropdown-end">
      <div tabIndex={0} role="button">
        <div className="avatar">
          <div className="w-12 rounded-full ">
            <img
              src={`${user?.photoURL || "https://i.ibb.co/KNLwjrH/user-1.png"}`}
            />
          </div>
        </div>
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
      >
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <button onClick={handleLogOut} className="btn">
            Log Out
          </button>
        </li>
      </ul>
    </div>
  );
};

export default UserDropDown;
