import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const AuthSignup = () => {
  const { isAuthenticated, setIsAuthenticated } =
    useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = e.target;
    const loginData = {
      email: email.value,
      password: password.value,
    };
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginData),
    };
    console.log(`${process.env.REACT_APP_API_URL}/user/signup`);
    await fetch(
      `${process.env.REACT_APP_API_URL}/user/signup`,
      options
    )
      .then((res) => res.json())
      .then((data) => {
        setIsAuthenticated(true);
        localStorage.setItem("token", data);
      })
      .catch((err) => console.log(err));
  };
  if (isAuthenticated) return <Navigate to="../post-login" />;
  return (
    <form onSubmit={handleSubmit}>
      <div className="my-3 row">
        <label htmlFor="email" className="col-sm-2 col-form-label">
          Email
        </label>
        <div className="col-sm-5">
          <input
            type="text"
            className="form-control"
            id="email"
            name="email"
          />
        </div>
      </div>
      <div className="mb-3 row">
        <label
          htmlFor="inputPassword"
          className="col-sm-2 col-form-label"
        >
          Password
        </label>
        <div className="col-sm-5">
          <input
            type="password"
            className="form-control"
            id="inputPassword"
            name="password"
          />
        </div>
      </div>
      <button type="submit" className="btn btn-primary">
        Jetzt registrieren
      </button>
    </form>
  );
};

export default AuthSignup;
