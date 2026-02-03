import GalleryClient from "./GalleryClient";
import { galleryImages } from "@/data/gallery"; // Adjust path as needed

export default function Gallery({
  initialCategory = "all",
  hideTabs = false
}: {
  initialCategory?: string,
  hideTabs?: boolean
}) {
  // We use the local static data instead of Sanity fetch
  const images = galleryImages;
  return (
    <GalleryClient
      initialImages={images}
      initialCategory={initialCategory}
      hideTabs={hideTabs}
    />
  );
}