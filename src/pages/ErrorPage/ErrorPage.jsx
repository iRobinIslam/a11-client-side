import { Link } from "react-router-dom";
import error from "../../assets/error.gif";
import { FaArrowLeftLong } from "react-icons/fa6";
const ErrorPage = () => {
  return (
    <div className="h-screen">
      <div className="flex justify-center items-center">
        <img className="w-5/12 h-[400px] mt-12" src={error} alt="" />
      </div>
        <Link to="/">
            <div className="flex justify-center">
            <button className="flex items-center gap-2 px-3 py-2 text-white bg-green-500 hover:bg-green-600 rounded-lg font-semibold">
              <FaArrowLeftLong className="mt-1" /> Back to home
            </button>
            </div>
        </Link>
    </div>
  );
};

export default ErrorPage;
