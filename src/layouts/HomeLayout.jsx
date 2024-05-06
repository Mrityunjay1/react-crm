/* eslint-disable react/prop-types */
import { BsFillMenuButtonWideFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../redux/slices/AuthSlice";

const HomeLayout = ({ children }) => {
  const authState = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogout = () => {
    dispatch(logout);
    navigate("/login");
  };
  return (
    <div className="min-h-[90vh]">
      <div className="drawer absolute left-0 right-0 cursor-pointer top-4 ml-4">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label htmlFor="my-drawer">
            <BsFillMenuButtonWideFill size={32} className="cursor-pointer" />
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li>
              <a>View All Tickets</a>
            </li>
            <li>
              <a>Dashboard</a>
            </li>
            <li className="absolute bottom-8 w-3/4">
              <div className=" w-full flex justify-center items-center gap-8">
                {!authState.isLoggedIn ? (
                  <>
                    <Link to="/login">
                      <button className="btn btn-primary">Login</button>
                    </Link>

                    <Link to="/signup">
                      <button className="btn btn-secondary">Sign Up</button>
                    </Link>
                  </>
                ) : (
                  <>
                    <button onClick={onLogout} className="btn btn-primary">
                      Logout
                    </button>

                    <Link to="/profile">
                      <button className="btn btn-secondary">Profile</button>
                    </Link>
                  </>
                )}
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="">
        <div>{children}</div>
      </div>
    </div>
  );
};

export default HomeLayout;
