import React, { useRef, useState } from "react";
import "firebase/firestore";
import "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import SendIcon from "@mui/icons-material/Send";
import { useCollectionData } from "react-firebase-hooks/firestore";
import ChatMessage from "./ChatMessage";
import { auth, firestore } from "./firebase";

function ChatRoom() {
  const dummy = useRef();
  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt").limit(25);

  const [messages] = useCollectionData(query, { idField: "id" });

  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    });

    setFormValue("");
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {" "}
      <main>
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
      </main>
      <form onSubmit={sendMessage}>
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder="say something nice"
        />

        <button type="submit" disabled={!formValue} className="Button-1">
          <SendIcon />
        </button>
      </form>
    </>
  );
}

export default ChatRoom;
