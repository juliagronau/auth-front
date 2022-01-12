import React from "react";
import { Navigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

const Welcome = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const [userInfo, setUserInfo] = useState();
  const token = localStorage.getItem("token");

  const handleClick = async () => {
    console.log(token);
    await fetch(`${process.env.REACT_APP_API_URL}/info/me`, {
      headers: { token: token },
    })
      .then((res) => res.json())
      .then((data) => setUserInfo(data))
      .catch((err) => console.log(err));
  };

  return (
    <>
      {isAuthenticated ? (
        <>
          <h1>Willkommen im Loginbereich</h1>
          {userInfo ? (
            <>
              <p>Deine UserID ist {userInfo._id}</p>
              <p>Dein Profil wurde {userInfo.__v} Mal bearbeitet</p>
            </>
          ) : (
            <button className="btn btn-primary" onClick={handleClick}>
              Userinfos anzeigen
            </button>
          )}
        </>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
};

export default Welcome;
