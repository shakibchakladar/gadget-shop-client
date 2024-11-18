import { useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useUserData from "../../hooks/useUserData";
import Loding from "../../pages/Loding";

const BuyerRoute = ({children}) => {
    const userData=useUserData()
    const {user,loading}=useAuth();
    const location=useLocation();
    if(loading || !userData.role){
        return <Loding/>
    }
    if(user && userData.role==='buyer'){
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace/>

};

export default BuyerRoute;