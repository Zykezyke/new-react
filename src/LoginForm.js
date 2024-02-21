function LoginForm() {
  return (
    <div className="container">
      <div className="form-container">
        <div className="form-group">
          <label for="uname">
            <b>Username</b>
          </label>

          <input
            type="text"
            className="form-control"
            placeholder="Enter Username"
            name="uname"
            required
          ></input>
        </div>
        <div className="form-group">
          <label for="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter Password"
            name="psw"
            required
          ></input>
        </div>

        <button className="btn btn-outline-primary" type="submit">
          Login
        </button>
      </div>
    </div>
  );
}

export default LoginForm;
