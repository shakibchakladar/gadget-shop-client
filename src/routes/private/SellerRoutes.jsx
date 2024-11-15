import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Loding from "../../pages/Loding";
import useUserData from "../../hooks/useUserData";

const SellerRoutes = ({children}) => {
    const userData=useUserData()
    const {user,loading}=useAuth();
    const location=useLocation();
    if(loading || !userData.role){
        return <Loding/>
    }
    if(user && userData.role==='seller'){
        return children;
    }
    return <Navigate to="/" state={{from: location}} replace/>

};

export default SellerRoutes;