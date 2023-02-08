import React from "react";
import GoogleButton from "react-google-button";
import { auth } from "./firebase";
import firebase from "firebase/compat/app";
function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return (
    <>
      <button className="sign-in" onClick={signInWithGoogle}>
        <GoogleButton />
      </button>
      <p className="new_para">
        Do not violate the community guidelines or you will be banned for life!
      </p>
    </>
  );
}
export default SignIn;
