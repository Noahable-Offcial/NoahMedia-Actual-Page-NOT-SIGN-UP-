import VideoCard from "../components/VideoCard";
import ChatBox from "../components/ChatBox";

export default function Home() {
  const videos = [
    { id: 1, url: "/example.mp4", title: "Demo Video", author: "Noah" },
  ];

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <div style={{ flex: 2, overflowY: "scroll", padding: "10px" }}>
        {videos.map(v => <VideoCard key={v.id} video={v} />)}
      </div>
      <div style={{ flex: 1, borderLeft: "1px solid #ccc", padding: "10px" }}>
        <ChatBox />
      </div>
    </div>
  );
}
