import { useContext } from "react";
import { fireContext } from "../context/Firebase";
import { Link } from "react-router-dom";

const Popup = () => {
  const {
    gitHubLogin,
    googleLogin,
    microsoftLogin,
    gitHub,
    google,
    micrisoft,
    setGoogle,
    setGitHub,
    setMicrisoft,
  } = useContext(fireContext);
  return (
    <div className="popup-body">
      <div className="popup-container">
        <Link to="/posts">
          <button onClick={!google ? googleLogin : () => setGoogle("")}>
            {!google ? "Google Login" : "log Out"}
          </button>
        </Link>

        {/* Git Hub Log In */}
        <Link to="/posts">
          <button onClick={!gitHub ? gitHubLogin : () => setGitHub("")}>
            {!gitHub ? "GitHub Login" : "log Out"}
          </button>
        </Link>

        {/* MICROSOFT Log In */}
        <Link to="/posts">
          <button
            onClick={!micrisoft ? microsoftLogin : () => setMicrisoft("")}
          >
            {!micrisoft ? "micrisoft Login" : "log Out"}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Popup;
