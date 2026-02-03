import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Gallery from "@/components/Gallery";
import Navbar from "@/components/Navbar"; 
import Footer from "@/components/Footer"; // 1. Import the Footer
import {
  GalleryCategory,
  categoryMeta,
} from "@/data/gallery";

interface PageProps {
  params: Promise<{
    category: GalleryCategory;
  }>;
}

/* ============================
   SEO METADATA
============================ */
export async function generateMetadata(
  { params }: PageProps
): Promise<Metadata> {
  const { category } = await params;
  if (!categoryMeta[category]) return {};

  const { title, description } = categoryMeta[category];
  const siteName = "Cinematic Studio";
  
  return {
    title: `${title} | ${siteName}`,
    description,
    openGraph: {
      title: `${title} | ${siteName}`,
      description,
      type: "website",
    },
  };
}

/* ============================
   PAGE COMPONENT
============================ */
export default async function PortfolioCategoryPage({
  params,
}: PageProps) {
  const { category } = await params;
  
  if (!categoryMeta[category]) {
    notFound();
  }
  
  const { title, description } = categoryMeta[category];

  return (
    <div className="flex flex-col min-h-screen bg-black">
      {/* Fixed Navigation */}
      <Navbar />

      <main className="flex-grow pt-32 md:pt-48">
        {/* Header Section */}
        <section className="max-w-7xl mx-auto px-6 mb-16">
          <div className="relative z-10">
            <h1 className="text-5xl md:text-7xl font-serif italic text-white mb-4">
              {title}
            </h1>
            <p className="text-gray-500 max-w-2xl border-l border-[#D4AF37] pl-6 text-sm md:text-base leading-relaxed">
              {description}
            </p>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="pb-24">
           <Gallery initialCategory={category} hideTabs={true} />
        </section>
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}