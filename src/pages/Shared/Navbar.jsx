import { Link } from "react-router-dom";
import volunteerLogo from "../../assets/volunteerLogo.jpg";
import useAuth from "../../hook/useAuth";
import { useEffect, useState } from "react";
import { CiDark, CiLight } from "react-icons/ci";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const menu = (
    <>
      <li>
        <Link className="text-lg" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="text-lg" to="/about">
          About Us
        </Link>
      </li>
      <li>
        <Link className="text-lg" to="/allVoNeePost">
          All volunteer Need posts
        </Link>
      </li>
      <li>
        {user && (
          <details className="dropdown">
            <summary className="text-lg bg-transparent">My Profile</summary>
            <ul className="menu dropdown-content bg-base-100 rounded-lg z-[1] w-52 shadow">
              <li>
                <Link to="/addVoNeedPost">Add Volunteer need Post</Link>
              </li>
              <li>
                <Link to="/manageMyPost">Manage My Posts </Link>
              </li>
            </ul>
          </details>
        )}
      </li>
    </>
  );
  return (
    <div className=" bg-green-400 sticky top-0 lg:py-1 z-50">
    <div className="navbar max-w-7xl mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {menu}
          </ul>
        </div>
        <Link to='/' className="flex gap-3">
        <img
          className="w-8 h-8 md:w-12 md:h-12 rounded-full"
          src={volunteerLogo}
          alt="logo"
        />
        <div>
        <h1 className="hidden md:flex text:xl lg:text-2xl font-bold">
          Volunteer
        </h1>
        <span className="hidden md:flex">Management</span>
        </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{menu}</ul>
      </div>
      <div className="navbar-end">
        <button
          className="bg-white w-8 h-8 md:w-10 md:h-10 flex justify-center items-center rounded-full"
          onClick={handleThemeSwitch}
        >
          {theme === "dark" ? (
            <p>
              <CiDark size={25} />
            </p>
          ) : (
            <p>
              <CiLight size={30} />
            </p>
          )}
        </button>
        {!user && (
          <Link
            className="ml-5 text-xl btn bg-[#571214] text-white"
            to="/signIn"
          >
            <button>Login</button>
          </Link>
        )}
        {user && (
          <div className="ml-5 dropdown dropdown-hover">
            <div tabIndex={0} className="m-1">
              <img
                className="w-8 h-8 md:w-12 md:h-12 rounded-full"
                src={user?.photoURL}
                alt=""
              />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-white -right-3 rounded-lg z-[1] w-52 p-2 shadow"
            >
              <li>
                <h3>{user?.displayName}</h3>
              </li>
              <li>
                <button onClick={logOut}>logOut</button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
    </div>
  );
};

export default Navbar
