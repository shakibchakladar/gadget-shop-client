import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useForm } from "react-hook-form";
import GoogleLogin from "../compoments/socialLogin/GoogleLogin";
import axios from "axios";
import Swal from "sweetalert2";

const Register = () => {
  const { CreateUser } = useAuth();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const email = data.email;
    const role = data.role;
    const status = role === "buyer" ? "approved" : "pending";
    const wishlist = [];

    const userData = { email, role, status, wishlist };
    CreateUser(data.email, data.password)
      .then(() => {
        axios.post("http://localhost:4000/users", userData).then((res) => {
          if (res.data.insertedId) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Registration Successfully",
              showConfirmButton: false,
              timer: 1500,
            });
          }
          navigate("/");
        });
      })
      .then(() => {});
  };
  return (
    <div className="min-h-screen hero bg-base-200">
      <div className="flex-col hero-content lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="w-full max-w-sm shadow-2xl card bg-base-100 shrink-0">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <p className="text-sm font-light text-red-500">
                  email is required
                </p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                {...register("password", {
                  required: true,
                  minLength: 6,
                })}
              />
              {errors.password?.type === "required" && (
                <p className="text-sm font-light text-red-500">
                  password is required
                </p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-sm font-light text-red-500">
                  password must have atleast 6 character
                </p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="confirm password"
                className="input input-bordered"
                {...register("confirmPassword", {
                  required: true,
                  validate: (value) => {
                    if (watch("password") != value) {
                      return "your password do not match ";
                    }
                  },
                })}
              />
              {errors.confirmPassword && (
                <p className="text-sm font-light text-red-500">
                  password not match
                </p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Role</span>
              </label>
              <select
                className="w-full max-w-xs select select-bordered"
                {...register("role", { required: true })}
              >
                <option value="buyer">Buyer</option>
                <option value="seller">Seller</option>
              </select>
            </div>
            <div className="mt-6 form-control">
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </div>
            <p>
              already have account! <Link to="/login">Log in</Link>
            </p>
            <div className="p-5 mb-2">
              <GoogleLogin />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
