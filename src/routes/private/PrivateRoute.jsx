import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Loding from "../../pages/Loding";

const PrivateRoute = ({children}) => {
    const {user,loading}=useAuth();
    const location=useLocation();
    if(loading){
        return <Loding/>
    }
    if(user){
        return children;
    }
    return <Navigate to="/" state={{from: location}} replace/>

};

export default PrivateRoute;