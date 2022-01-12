import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const AuthLogin = () => {
  //Context importieren
  const { isAuthenticated, setIsAuthenticated } =
    useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    //email & pw aus dem form ziehen
    const { email, password } = e.target;
    //post req mit email & password im body der req
    const loginData = {
      email: email.value,
      password: password.value,
    };
    const options = {
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginData),
      method: "POST",
    };
    await fetch(
      `${process.env.REACT_APP_API_URL}/user/login`,
      options
    )
      .then((res) => res.json())
      .then((data) => {
        //bei positiver response -> isAuthenticated(true) & token in localstorage speichern
        setIsAuthenticated(true);
        localStorage.setItem("token", data);
      })
      .catch((err) => console.log(err));
  };
  //nach Login Weiterleitung zu /post-login
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
        Jetzt einloggen
      </button>
    </form>
  );
};

export default AuthLogin;
