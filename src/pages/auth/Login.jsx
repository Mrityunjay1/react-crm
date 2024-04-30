import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/slices/AuthSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  function handleInputChange(e) {
    const { name, value } = e.target;
    setLoginDetails({
      ...loginDetails,
      [name]: value,
    });
  }
  const resetLoginState = () => {
    setLoginDetails({
      email: "",
      password: "",
    });
  };

  async function onSubmit() {
    if (!loginDetails.email || !loginDetails.password) return;
    const response = await dispatch(login(loginDetails));
    console.log(response);
    if (response.payload) navigate("/");
    else resetLoginState();
  }
  return (
    <div className="card w-96 bg-primary text-white">
      <div className="card-body">
        <h2 className="card-title text-center">Login</h2>
        <input
          type="text"
          placeholder="Email"
          className="input input-bordered input-error w-full max-w-xs"
          onChange={handleInputChange}
          name="email"
          value={loginDetails.email}
        />
        <input
          type="password"
          placeholder="Password"
          autoComplete="one-time-code"
          onChange={handleInputChange}
          name="password"
          className="input input-bordered input-error w-full max-w-xs"
          value={loginDetails.password}
        />
        <div className="card-actions w-full justify-end mt-4">
          <button
            onClick={onSubmit}
            className="btn w-full font-bold hover:text-yellow-50 text-xl"
          >
            LOGIN
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
