import { useEffect, useState } from "react";
import { db } from "../utils/firebase";
import { ref, onValue, push } from "firebase/database";

export default function ChatBox() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const messagesRef = ref(db, "messages");
    onValue(messagesRef, snapshot => {
      const data = snapshot.val();
      setMessages(data ? Object.values(data) : []);
    });
  }, []);

  const sendMessage = () => {
    if (!input.trim()) return;
    push(ref(db, "messages"), { text: input, user: "Noah" });
    setInput("");
  };

  return (
    <div>
      <div style={{ height: "400px", overflowY: "scroll", border: "1px solid #ccc", padding: "5px" }}>
        {messages.map((msg, i) => <p key={i}><strong>{msg.user}:</strong> {msg.text}</p>)}
      </div>
      <input value={input} onChange={e => setInput(e.target.value)} style={{ width: "80%" }} />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}
