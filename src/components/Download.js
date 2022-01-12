import Schwein1 from "../assets/meerschwein1.jpg";
import Schwein2 from "../assets/meerschwein2.jpg";
import Schwein3 from "../assets/meerschwein3.jpg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Download = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const pics = [Schwein1, Schwein2, Schwein3];
  return (
    <div>
      {isAuthenticated ? (
        <>
          <h1>Hier kannst du Bilder runterladen!!!</h1>
          <div className="container">
            <div className="row">
              {pics.map((pic) => (
                <div key={pic} className="col-4">
                  <img
                    src={pic}
                    alt={pic}
                    className="img-fluid my-3"
                  />
                  <Link to={pic} target="_blank" download>
                    Download
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <h1>
          Du musst dich einloggen, um die Bilder herunterzuladen
        </h1>
      )}
    </div>
  );
};

export default Download;
