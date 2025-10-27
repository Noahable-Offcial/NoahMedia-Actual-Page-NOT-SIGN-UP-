// pages/index.js
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import VideoCard from "../components/VideoCard";
import ChatBox from "../components/ChatBox";

export default function Home() {
  const [videos, setVideos] = useState([]);

  // Fetch videos in real time
  useEffect(() => {
    const videosRef = ref(db, "videos");
    onValue(videosRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        // Convert Firebase object to array
        const videoList = Object.values(data);
        // Sort by newest first
        setVideos(videoList.sort((a, b) => new Date(b.uploadedAt) - new Date(a.uploadedAt)));
      } else {
        setVideos([]);
      }
    });
  }, []);

  return (
    <div style={{ backgroundColor: "#0f0f0f", color: "#fff", minHeight: "100vh" }}>
      <Navbar />

      <div style={{ display: "flex", height: "calc(100vh - 60px)" }}>
        {/* Video Feed */}
        <div style={{
          flex: 2,
          overflowY: "scroll",
          padding: "20px",
