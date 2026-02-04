import VideoClient from "./VideoClient";
import { videos } from "@/data/video";

export default function Videos() {
  return <VideoClient initialVideos={videos} isHomePage={true} />;
}