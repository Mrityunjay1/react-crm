const Login = () => {
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
          type="password"
          placeholder="Password"
          autoComplete="one-time-code"
          className="input input-bordered input-error w-full max-w-xs"
        />
        <div className="card-actions w-full justify-end mt-4">
          <button className="btn w-full font-bold hover:text-yellow-50 text-xl">
            LOGIN
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
