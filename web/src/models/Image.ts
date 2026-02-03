export type ImageCategory =
  | "wedding"
  | "prewedding"
  | "engagement"
  | "maternity"
  | "event";

export interface GalleryImage {
  _id?: string;
  title: string;
  category: ImageCategory;
  imageUrl: string;
  publicId: string;
  createdAt?: Date;
}
