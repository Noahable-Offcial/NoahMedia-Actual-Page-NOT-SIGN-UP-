// components/ChatBox.js
import { useEffect, useState } from "react";
import { db } from "../utils/firebase";
import { ref, onValue, push, serverTimestamp } from "firebase/database";

export default function ChatBox() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  // Load messages from Firebase in real-time
  useEffect(() => {
    const messagesRef = ref(db, "chatMessages");
    onValue(messagesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const msgArray = Object.values(data);
        // Sort messages by time (oldest first)
        msgArray.sort((a, b) => a.timestamp - b.timestamp);
        setMessages(msgArray);
      } else {
        setMessages([]);
      }
    });
  }, []);

  // Send a message
  const sendMessage = () => {
    if (!input.trim()) return;

    const messagesRef = ref(db, "chatMessages");
    push(messagesRef, {
      text: input,
      user: "Noah", // Replace later with logged-in username
      timestamp: Date.now(),
    });

    setInput("");
  };

  return (
    <div>
      <div
        style={{
          height: "400px",
          overflowY: "scroll",
          border: "1px solid #333",
          padding: "5px",
          backgroundColor: "#111",
          marginBottom: "10px",
        }}
      >
        {messages.map((msg, i) => (
          <p key={i}>
            <strong style={{ color: "#1e90ff" }}>{msg.user}:</strong> {msg.text}
          </p>
        ))}
      </div>

      <div>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          style={{
            width: "80%",
            padding: "8px",
            background: "#181818",
            color: "#fff",
            border: "1px solid #333",
            borderRadius: "5px",
          }}
        />
        <button
          onClick={sendMessage}
          style={{
            backgroundColor: "#1e90ff",
            color: "#fff",
            border: "none",
            padding: "9px 15px",
            borderRadius: "5px",
            marginLeft: "8px",
            cursor: "pointer",
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
}

}
