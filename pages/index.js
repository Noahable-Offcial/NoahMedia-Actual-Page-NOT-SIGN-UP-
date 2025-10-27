import { useState } from "react";
import Navbar from "../components/Navbar";
import VideoCard from "../components/VideoCard";
import ChatBox from "../components/ChatBox";

export default function Home() {
  const [videos, setVideos] = useState([
    { id: 1, url: "/example.mp4", title: "Welcome Video", author: "Noah" },
  ]);

  return (
    <div style={{ backgroundColor: "#0f0f0f", color: "#fff", minHeight: "100vh" }}>
      <Navbar />

      <div style={{ display: "flex", height: "calc(100vh - 60px)" }}>
        {/* Video Feed */}
        <div
          style={{
            flex: 2,
            overflowY: "scroll",
            padding: "20px",
            borderRight: "2px solid #222",
          }}
        >
          <h2 style={{ marginBottom: "10px" }}>🔥 Latest Videos</h2>
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>

        {/* Chat Panel */}
        <div
          style={{
            flex: 1,
            padding: "20px",
            backgroundColor: "#181818",
          }}
        >
          <h2>💬 Community Chat</h2>
          <ChatBox />
        </div>
      </div>
    </div>
  );
}
