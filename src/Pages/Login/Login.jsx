import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext } from "react";
import { Toaster, toast } from "sonner";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  const { singIn, googleLogin } = useContext(AuthContext);
  const location = useLocation();
  console.log("loaction form login page", location);
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);

    // Login With email and password
    singIn(email, password)
      .then((result) => {
        console.log(result);

        // navigate user after login
        toast.success("login Successful") &&
          navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleLoginWithGoogle = () => {
    //   login with google
    googleLogin()
      .then((result) => {
        console.log(result);
        // navigate to the disired loaction
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="bg-[url('https://i.ibb.co/R0Sd9MZ/pexels-simon-berger-1323550.jpg')] pb-12 pt-4 rounded-lg my-10 bg-cover">
      <Navbar></Navbar>
      <div className="lg:w-1/2 md:w-3/4 mx-auto p-8 bg-gray-100 hero-overlay bg-opacity-50 border-2  rounded-lg">
        <h2 className="text-4xl text-center font-semibold">
          Login you account
        </h2>
        <hr className="border-black my-8" />
        <form onSubmit={handleLogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter you email"
              name="email"
              className="input input-bordered
              bg-transparent"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="input input-bordered
              bg-transparent"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <Toaster position="top-right"></Toaster>
            <button
              onClick={() => toast.success("Login Successful!")}
              className="btn btn-outline bg-transparent  "
            >
              Login
            </button>
          </div>
        </form>
        <hr className="border-black pb-5" />
        <div className="flex justify-center pb-5">
          <button
            onClick={handleLoginWithGoogle}
            className="btn btn-outline bg-transparent w-3/4
            text-blue-700"
          >
            <FaGoogle></FaGoogle> Login With Google
          </button>
        </div>
        <p className="text-center">
          Do not Have An Account ?
          <Link to="/register" className="text-green-400 font-bold pl-1">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
