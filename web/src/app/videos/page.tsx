import Navbar from "@/components/Navbar"; // Adjust this path to where your Navbar file is
import VideoClient from "@/components/VideoClient"; 
import { videos } from "@/data/video";

export default function VideoPage() {
  return (
    <main className="bg-black min-h-screen">
      {/* 1. Add the Navbar here */}
      <Navbar />

      {/* 2. Content Section 
          Note: VideoClient already has pt-24 which handles the 
          spacing so the Navbar doesn't overlap the title.
      */}
      <VideoClient initialVideos={videos} isHomePage={false} />
      
      {/* 3. Optional: Extra spacing at the bottom 
          to match the premium feel 
      */}
      <div className="pb-20 bg-black" />
    </main>
  );
}