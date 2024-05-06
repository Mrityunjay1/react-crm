import { useState } from "react";
import { useDispatch } from "react-redux";

import { Link, useNavigate } from "react-router-dom";
import { signUp } from "../../redux/slices/AuthSlice";
// import toast from "react-hot-toast";

const SignUp = () => {
  const dispatch = useDispatch();
  const [signupDetails, setSignUpDetails] = useState({
    email: "",
    password: "",
    name: "",
    userType: "",
    userStatus: "",
    clientName: "",
  });

  const navigate = useNavigate();

  function handleInputChange(e) {
    const { name, value } = e.target;
    setSignUpDetails({
      ...signupDetails,
      [name]: value,
    });
  }
  const resetLoginState = () => {
    setSignUpDetails({
      email: "",
      password: "",
      name: "",
      userType: "",
      userStatus: "",
      clientName: "",
    });
  };

  async function onSubmit() {
    if (
      !signupDetails.email ||
      !signupDetails.password ||
      !signupDetails.clientName ||
      !signupDetails.userType ||
      !signupDetails.name
    )
      return;
    console.log("clicked here");
    const response = await dispatch(signUp(signupDetails));
    console.log(response);
    if (response.payload) {
      // toast.success("Successfully Signed Up");
      navigate("/login");
    } else resetLoginState();
  }
  const handleUserType = (e) => {
    const userTypeSelected = e.target.textContent;
    setSignUpDetails({
      ...signupDetails,
      userType: userTypeSelected,
      userStatus: userTypeSelected === "customer" ? "approved" : "suspended",
    });
    const dropdown = document.getElementById("userTypeDropdown");
    dropdown.open = !dropdown.open;
  };
  return (
    <div className="card w-96 bg-primary  text-white">
      <div className="card-body">
        <h2 className="card-title text-center">Sign UP</h2>
        <input
          type="text"
          placeholder="Email"
          className="input input-bordered input-error w-full max-w-xs"
          onChange={handleInputChange}
          name="email"
          value={signupDetails.email}
        />
        <input
          type="password"
          placeholder="Password"
          autoComplete="one-time-code"
          onChange={handleInputChange}
          name="password"
          className="input input-bordered input-error w-full max-w-xs"
          value={signupDetails.password}
        />

        <input
          type="text"
          placeholder="name"
          autoComplete="one-time-code"
          onChange={handleInputChange}
          name="name"
          className="input input-bordered input-error w-full max-w-xs"
          value={signupDetails.name}
        />
        <div className="flex justify-start gap-2 mb-4 items-center w-full">
          <details className="dropdown w-full" id="userTypeDropdown">
            <summary className="m-1 btn w-full">
              {!signupDetails.userType ? "User Type" : signupDetails.userType}
            </summary>
            <ul
              onClick={handleUserType}
              className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-full"
            >
              <li>
                <a>customer</a>
              </li>
              <li>
                <a>engineer</a>
              </li>
              <li>
                <a>admin</a>
              </li>
            </ul>
          </details>
          {/* <details className="dropdown w-full">
            <summary className="m-1 btn w-full">user type</summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-full">
              <li>
                <a>Customer</a>
              </li>
              <li>
                <a>Engineer</a>
              </li>
            </ul>
          </details> */}
        </div>

        <input
          type="text"
          placeholder="client name"
          autoComplete="one-time-code"
          onChange={handleInputChange}
          name="clientName"
          className="input input-bordered input-error w-full max-w-xs"
          value={signupDetails.clientName}
        />
        <div className="card-actions w-full justify-end mt-4">
          <button
            onClick={onSubmit}
            className="btn w-full font-bold hover:text-yellow-50 text-xl"
          >
            SIGN UP
          </button>

          <p className="text-md text-white">
            Already Have an Account ?{" "}
            <Link to="/login" className="text-black font-semibold">
              Login Instead
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
