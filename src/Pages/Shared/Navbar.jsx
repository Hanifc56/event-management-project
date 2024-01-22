import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { Toaster, toast } from "sonner";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact </NavLink>
      </li>
      <li>
        <NavLink to="/services">Services </NavLink>
      </li>
      <li>
        <NavLink to="/blog">Blog </NavLink>
      </li>
      <li>
        <NavLink to="/contents">Contents</NavLink>
      </li>
    </>
  );
  const handleLogOut = () => {
    logOut()
      .then((result) => {
        console.log(result);
        toast.success("Log Out Successful!");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="py-8 bg-transparent">
      <div className="navbar  ">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost text-2xl">J&J Events.</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>

        <div className="navbar-end ">
          {user ? (
            <>
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img alt="User Image" src={user.photoURL} />
                </div>
              </div>
              <div className="pl-2">
                <p>{user.displayName}</p>
              </div>
            </>
          ) : (
            <></>
          )}
          <div className="pl-3">
            <Toaster position="top-right"></Toaster>
            {user ? (
              <button
                onClick={handleLogOut}
                className="btn btn-outline text-xl font-semibold "
              >
                LogOut
              </button>
            ) : (
              <Link to="/login">
                <button className="btn btn-outline text-xl font-semibold">
                  Login
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
