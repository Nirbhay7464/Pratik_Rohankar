import VideoClient from "./VideoClient";
import { videos } from "@/data/video"; // Adjust path as per your folder structure
export default function Videos() {
  // Use local static data instead of Sanity fetch
  const staticVideos = videos;
  return <VideoClient initialVideos={staticVideos} />;
}