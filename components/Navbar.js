// components/Navbar.js
import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-around",
      backgroundColor: "#111",
      color: "white",
      padding: "10px"
    }}>
      <Link href="/">Home</Link>
      <Link href="/upload">Upload</Link>
      <Link href="/profile">Profile</Link>
    </nav>
  );
}
