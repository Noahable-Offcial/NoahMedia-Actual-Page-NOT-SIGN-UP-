// /utils/api.js

// Example: fetch videos from Firebase Realtime Database
import { db } from "./firebase";
import { ref, get } from "firebase/database";

export const fetchVideos = async () => {
  const videosRef = ref(db, "videos");
  const snapshot = await get(videosRef);
  return snapshot.val() ? Object.values(snapshot.val()) : [];
};
