import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  OAuthProvider,
} from "firebase/auth";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { initializeApp } from "firebase/app";
import { createContext, useState } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyBUzU0Fmi2V9piRT_2xk1WcZmsI0Y0qRWM",
  authDomain: "fire-a1cd7.firebaseapp.com",
  projectId: "fire-a1cd7",
  storageBucket: "fire-a1cd7.appspot.com",
  messagingSenderId: "897359868901",
  appId: "1:897359868901:web:73a9adb38fb9aa0b93750c",
  measurementId: "G-67MHDN42QL",
};

const app = initializeApp(firebaseConfig);

export const fireContext = createContext();

const FirebaseProvaider = ({ children }) => {
  const [google, setGoogle] = useState();
  const [gitHub, setGitHub] = useState();
  const [micrisoft, setMicrisoft] = useState();

  // Log In With With Google
  function googleLogin() {
    setGitHub("");
    setMicrisoft("");
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);
    signInWithPopup(auth, provider)
      .then((result) => setGoogle(result))
      .catch((error) => console.log(error));
  }

  if (google) {
    toast("Loged In");
  }

  // Log In With With Git Hub
  function gitHubLogin() {
    setGoogle("");
    setMicrisoft("");
    const provider = new GithubAuthProvider();
    const auth = getAuth(app);
    signInWithPopup(auth, provider)
      .then((result) => setGitHub(result))
      .catch((error) => console.log(error));
  }

  // Log In With With MICROSOFT
  function microsoftLogin() {
    setGoogle("");
    setGitHub("");
    const provider = new OAuthProvider("microsoft.com");
    const auth = getAuth(app);
    signInWithPopup(auth, provider)
      .then((result) => console.log(result.user))
      .catch((error) => console.log(error));
  }

  //All Function LogOut
  function allLogOut() {
    setMicrisoft("");
    setGoogle("");
    setGitHub("");
  }

  return (
    <fireContext.Provider
      value={{
        allLogOut,
        gitHubLogin,
        googleLogin,
        microsoftLogin,
        gitHub,
        google,
        micrisoft,
        setGoogle,
        setGitHub,
        setMicrisoft,
      }}
    >
      <ToastContainer />
      {children}
    </fireContext.Provider>
  );
};

export default FirebaseProvaider;
