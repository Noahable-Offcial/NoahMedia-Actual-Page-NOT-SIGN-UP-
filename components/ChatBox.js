import { useState } from "react";

export default function ChatBox() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    const newMsg = { user: "You", text: input };
    setMessages([...messages, newMsg]);
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
