const Signup = () => {
  return (
    <div className="card w-96 bg-primary text-white">
      <div className="card-body">
        <h2 className="card-title text-center">Login</h2>
        <input
          type="text"
          placeholder="User Id..."
          className="input input-bordered input-error w-full max-w-xs"
        />
        <input
          type="email"
          placeholder="Email"
          className="input input-bordered input-error w-full max-w-xs"
        />
        <input
          type="password"
          placeholder="Password"
          autoComplete="one-time-code"
          className="input input-bordered input-error w-full max-w-xs"
        />
        <details className="dropdown w-full">
          <summary className="m-1 btn w-full">user type</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-full">
            <li>
              <a>Admin</a>
            </li>
            <li>
              <a>Customer</a>
            </li>
          </ul>
        </details>
        <div className="card-actions w-full justify-end mt-4">
          <button className="btn w-full font-bold hover:text-yellow-50 text-xl">
            SIGN UP
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
