import { useState } from "react";
import Navbar from "../components/Navbar";

export default function Upload() {
  const [video, setVideo] = useState(null);
  const [title, setTitle] = useState("");
  const [preview, setPreview] = useState("");

  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setVideo(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!video || !title.trim()) {
      alert("Please add a video and title before uploading.");
      return;
    }

    alert(`Video "${title}" uploaded (local only).`);
    setVideo(null);
    setTitle("");
    setPreview("");
  };

  return (
    <div style={{ backgroundColor: "#0f0f0f", color: "#fff", minHeight: "100vh" }}>
      <Navbar />
      <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
        <h1>Upload a New Video</h1>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "10px" }}>
            <label>Video Title:</label><br />
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter a catchy title"
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #333",
                background: "#181818",
                color: "#fff",
              }}
            />
          </div>

          <div style={{ marginBottom: "10px" }}>
            <label>Select Video File:</label><br />
            <input type="file" accept="video/*" onChange={handleVideoChange} />
          </div>

          {preview && (
            <div style={{ marginBottom: "10px" }}>
              <video src={preview} controls width="100%" />
            </div>
          )}

          <button
            type="submit"
            style={{
              backgroundColor: "#1e90ff",
              color: "#fff",
              border: "none",
              padding: "10px 20px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Upload
          </button>
        </form>
      </div>
    </div>
  );
}
