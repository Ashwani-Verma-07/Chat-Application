import "./App.css";
import React from "react";
import "firebase/firestore";
import "firebase/auth";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import "firebase/analytics";
import SignIn from "./SignIn";
import SignOut from "./SignOut";
import ChatRoom from "./ChatRoom";
import { auth } from "./firebase";

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>
        <h1>⚛️🔥✉️💬</h1>
        <SignOut />
      </header>

      <section>{user ? <ChatRoom /> : <SignIn />}</section>
    </div>
  );
}

export default App;
