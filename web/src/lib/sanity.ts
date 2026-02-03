// Old way (deprecated)
// import imageUrlBuilder from '@sanity/image-url' 

// New way (Correct)
import { createClient } from "next-sanity";
import createImageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: "4ra053sh",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});

const builder = createImageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}

