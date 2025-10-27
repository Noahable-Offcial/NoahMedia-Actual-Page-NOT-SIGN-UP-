// components/ChatBox.js
import { useState } from "react";

export default function ChatBox() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    const newMessage = { user: "You", text: input };
    setMessages([...messages, newMessage]);
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
            <stron
