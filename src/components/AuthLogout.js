import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const AuthLogout = () => {
  const { isAuthenticated, setIsAuthenticated } =
    useContext(AuthContext);

  const handleClick = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("token");
  };
  return (
    <>
      {isAuthenticated ? (
        <button
          onClick={handleClick}
          className="btn btn-primary mt-4"
        >
          Ausloggen
        </button>
      ) : (
        <h1>Du bist abgemeldet</h1>
      )}
    </>
  );
};

export default AuthLogout;
