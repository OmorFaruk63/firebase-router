import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { fireContext } from "../context/Firebase";

const Navbar = () => {
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
    allLogOut,
  } = useContext(fireContext);
  console.log(micrisoft);

  const data = gitHub || google || micrisoft;

  return (
    <nav>
      <NavLink to="/"> Home</NavLink>
      <NavLink to="/blog"> Blog</NavLink>
      <NavLink to="/about"> About</NavLink>
      <NavLink to="/posts"> Post</NavLink>

      <div className="login-btn">
        {!data ? (
          <NavLink to="/popup">
            <button>Login</button>
          </NavLink>
        ) : (
          <Link>
            <button onClick={allLogOut}>Login Out</button>{" "}
          </Link>
        )}

        <span className="profile-photo">
          <img
            src={
              google
                ? google?.user?.photoURL
                : "https://img.freepik.com/premium-vector/aesthetic-boy-avatar-profily_431668-1965.jpg"
            }
          />
          <span>{google?.user?.displayName}</span>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;

{
  /* <div className="popup-container">
      <button onClick={!google ? googleLogin : () => setGoogle("")}>
        {!google ? "Google Login" : "log Out"}
      </button>
      <span className="profile-photo">
        <img
          src={
            google
              ? google?.user?.photoURL
              : "https://img.freepik.com/premium-vector/aesthetic-boy-avatar-profily_431668-1965.jpg"
          }
        />
        <span>{google?.user?.displayName}</span>
      </span>

      {/* Git Hub Log In */
}
//   <button onClick={!gitHub ? gitHubLogin : () => setGitHub("")}>
//     {!gitHub ? "GitHub Login" : "log Out"}
//   </button>
//   <span className="profile-photo">
//     <img
//       src={
//         gitHub
//           ? gitHub?.user?.photoURL
//           : "https://img.freepik.com/premium-vector/aesthetic-boy-avatar-profily_431668-1965.jpg"
//       }
//     />
//     <span>{gitHub?.user?.displayName}</span>
//   </span>

//   {/* MICROSOFT Log In */}
//   <button onClick={!micrisoft ? microsoftLogin : () => setMicrisoft("")}>
//     {!micrisoft ? "micrisoft Login" : "log Out"}
//   </button>

//   <span className="profile-photo">
//     <img
//       src={
//         micrisoft
//           ? micrisoft?.user?.photoURL
//           : "https://img.freepik.com/premium-vector/aesthetic-boy-avatar-profily_431668-1965.jpg"
//       }
//     />
//     <span>{micrisoft?.user?.displayName}</span>
//   </span>
// </div> */}
