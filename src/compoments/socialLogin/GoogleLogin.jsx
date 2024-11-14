import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const GoogleLogin = () => {
  const { GoogleLogin } = useAuth();
  const navigate=useNavigate();

  const handleGoogleLogIn = () => {
    GoogleLogin();
    navigate("/")
  };
  return (
    <div>
      <div className="divider">OR</div>
      <button onClick={handleGoogleLogIn} className="btn btn-outline  ">
        <FcGoogle /> Google
      </button>
    </div>
  );
};

export default GoogleLogin;
