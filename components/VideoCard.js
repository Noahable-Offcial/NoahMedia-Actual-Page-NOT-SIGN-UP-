// components/VideoCard.js
export default function VideoCard({ video }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <video src={video.url} controls width="100%" />
      <h3>{video.title}</h3>
      <p>Uploaded by {video.author}</p>
    </div>
  );
}
