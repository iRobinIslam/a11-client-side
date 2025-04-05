import Lottie from "lottie-react";
import signInLottieData from "../../assets/lottie/signIn.json";
import useAuth from "../../hook/useAuth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaArrowLeftLong } from "react-icons/fa6";

const SignIn = () => {
  const { signInUser, handleGoogleLogin } = useAuth();
  const navigate = useNavigate()
  const location = useLocation()
  const handleSignIn = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then((res) => {
        toast.success("Login is successfully", {
          position: "top-center",
        });

        if (location.state) {
          navigate(location.state.from);
        } else {
          navigate("/");
        }
      })
      .catch((error) => {
        toast.error(error.code, {
          position: "top-center",
        });
      });
  };

  const handleGoogleLoginHandler = () => {
    handleGoogleLogin();
    if (location.state) {
      navigate(location.state.from);
    } else {
      navigate("/");
    }
  };
  return (
    <div className=" bg-blue-500 min-h-screen">
      <Link to="/">
        <div className="pt-6 pl-6 md:pt-12 md:pl-12">
        <button className="flex items-center gap-2 px-3 py-2 bg-white text-green-700 rounded-lg font-semibold"><FaArrowLeftLong className="mt-1"/> Back to home</button>
        </div>
      </Link>
      <div className="hero">
      <div className="hero-content flex-col lg:flex-row-reverse gap-6 md:gap-10 lg:gap-24">
        <div className="md:w-96">
          <Lottie animationData={signInLottieData}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSignIn} className="card-body">
            <h3 className="text-center text-2xl font-bold">
              Login Your Account
            </h3>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-4">
              <button className="btn border border-blue-500 bg-transparent text-secondary hover:bg-secondary hover:text-white text-lg">
                Login
              </button>
            </div>
          </form>
          <div className="text-left pl-7 -mt-6">
            <button
              className="btn border border-secondary bg-transparent text-secondary hover:bg-secondary hover:text-white text-lg"
              onClick={handleGoogleLoginHandler}
            >
              Logon with Google
            </button>
          </div>
          <p className="text-center font-semibold my-3">
            Don't Have Your Account ?{" "}
            <Link className="text-red-500" to="/Register">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default SignIn
