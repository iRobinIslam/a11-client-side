import Lottie from "lottie-react";
import registerLottieData from "../../assets/lottie/register.json";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import useAuth from "../../hook/useAuth";
import { FaArrowLeftLong } from "react-icons/fa6";

const Register = () => {
  const navigate = useNavigate();
  const { createUser, manageProfile, setUser } = useAuth();
  const [showPassword, setShowPassword] = useState(false);

  // handle register
  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (password.length < 6) {
      toast.error("Length must be at least 6 character", {
        position: "top-center",
      });
      return;
    }

    const regex = /^(?=.*[a-z])(?=.*[A-Z]).+$/;

    if (!regex.test(password)) {
      toast.error(
        "Must have a Uppercase and Lowercase letter in the password  ",
        {
          position: "top-center",
        }
      );
      return;
    }

    createUser(email, password).then((res) => {
      manageProfile(name, photo);
      setUser({ displayName: name, photoURL: photo, email: email });
      toast.success("Register is successfully", {
        position: "top-center",
      });
      navigate("/");
    });
  };

  return (
    <div className="bg-blue-500 min-h-screen">
      <Link to="/">
        <div className="pt-6 pl-6 md:pt-12 md:pl-12">
          <button className="flex items-center gap-2 px-3 py-2 bg-white text-green-700 rounded-lg font-semibold">
            <FaArrowLeftLong className="mt-1" /> Back to home
          </button>
        </div>
      </Link>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse gap-6 md:gap-10 lg:gap-24">
          <div className="w-full md:w-96">
            <Lottie animationData={registerLottieData}></Lottie>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit} className="card-body">
              <h3 className="text-center text-2xl font-bold">
                Register Your Account
              </h3>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="photo-url"
                  className="input input-bordered"
                  required
                />
              </div>
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
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="btn btn-xs absolute right-5 top-12"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
              <div className="form-control mt-4">
                <button className="btn border border-secondary bg-transparent text-secondary hover:bg-secondary hover:text-white text-lg">
                  Register
                </button>
              </div>
            </form>
            <p className="text-center font-semibold my-3">
              Already Have an account ?{" "}
              <Link className="text-red-500" to="/signIn">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default  Register
