import useAuth from "../../hooks/useAuth";

const Overview = () => {
    const {user}=useAuth();
    console.log(user);
    return (
        <div className="flex flex-col items-center justify-center ml-4">
            <img src={user?.photoURL ||"https://i.ibb.co/KNLwjrH/user-1.png"}/>
            <h2>{user?.displayName || 'No name found'} </h2>
            <p>{user?.email}</p>
        </div>
    );
};

export default Overview;