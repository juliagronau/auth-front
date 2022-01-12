import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AuthSignup from "./components/AuthSignup";
import AuthLogin from "./components/AuthLogin";
import Download from "./components/Download";
import Welcome from "./components/Welcome";
import AuthLogout from "./components/AuthLogout";
import AuthState from "./context/AuthContext";

function App() {
  return (
    <AuthState>
      <div className="container-fluid">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<AuthSignup />} />
          <Route path="/signin" element={<AuthLogin />} />
          <Route path="/downloads" element={<Download />} />
          <Route path="/post-login" element={<Welcome />} />
          <Route path="/logout" element={<AuthLogout />} />
        </Routes>
      </div>
    </AuthState>
  );
}

export default App;
