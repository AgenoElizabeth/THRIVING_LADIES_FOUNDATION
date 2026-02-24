"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Maximize2, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

// Array of manually sourced images from the project
const photos = [
  {
    src: "https://ik.imagekit.io/xjtx0zx5v/images/distribution1.jpeg",
    title: "Supply Distribution",
    description: "Providing essential supplies to young girls in rural communities.",
    category: "Outreach",
  },
  {
    src: "https://ik.imagekit.io/xjtx0zx5v/images/children1.jpg",
    title: "Happy Learners",
    description: "Smiles from our community education program.",
    category: "Education",
  },
  {
    src: "https://ik.imagekit.io/xjtx0zx5v/images/outreach1.jpeg",
    title: "Community Outreach",
    description: "Reaching vulnerable populations with necessary resources.",
    category: "Community",
  },
  {
    src: "https://ik.imagekit.io/xjtx0zx5v/images/class1.jpeg",
    title: "Classroom Engagement",
    description: "Active participation in our rural school initiatives.",
    category: "Education",
  },
  {
    src: "https://ik.imagekit.io/xjtx0zx5v/images/making.jpeg",
    title: "Skill Building",
    description: "Teaching practical skills like sewing reusable pads.",
    category: "Empowerment",
  },
  {
    src: "https://ik.imagekit.io/xjtx0zx5v/images/training.jpeg",
    title: "Health Education",
    description: "In-depth training sessions on menstrual health.",
    category: "Education",
  },
  {
    src: "https://ik.imagekit.io/xjtx0zx5v/WhatsApp%20Image%202026-02-17%20at%2014.37.56%20(1).jpeg?updatedAt=1771330506605",
    title: "The Heart of Learning",
    description: "Creating safe havens where girls can learn without interruption.",
    category: "Education",
  },
  {
    src: "https://ik.imagekit.io/xjtx0zx5v/images/house1.jpg",
    title: "Living Conditions",
    description: "Understanding the housing realities in the areas we serve.",
    category: "Environment",
  },
  {
    src: "https://ik.imagekit.io/xjtx0zx5v/images/children2.jpg",
    title: "Rural Schools",
    description: "Bringing education to those in remote areas.",
    category: "Education",
  }
];

export default function GalleryPage() {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex + 1) % photos.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex - 1 + photos.length) % photos.length);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50/50 py-24">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Our Visual Journey
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Explore the real moments of transformation, resilience, and hope across the communities we serve.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col cursor-pointer"
              onClick={() => setSelectedPhotoIndex(index)}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                <Image
                  src={photo.src}
                  alt={photo.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Hover Overlay with Expand Icon */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full text-white transform scale-50 group-hover:scale-100 transition-transform duration-300">
                    <Maximize2 className="h-6 w-6" />
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-slate-800 mb-2">{photo.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-1">
                  {photo.description}
                </p>
                <div className="mt-auto">
                  <span className="inline-flex px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-600 border border-amber-100/50">
                    {photo.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Expanded View */}
      <Dialog
        open={selectedPhotoIndex !== null}
        onOpenChange={(open) => !open && setSelectedPhotoIndex(null)}
      >
        <DialogContent className="max-w-6xl w-full p-0 overflow-hidden bg-black/95 border-none shadow-2xl">
          {selectedPhotoIndex !== null && (
            <div className="relative h-[80vh] w-full flex flex-col group/lightbox">
              {/* Close Button */}
              <button
                onClick={() => setSelectedPhotoIndex(null)}
                className="absolute top-4 right-4 z-50 p-2 bg-black/50 hover:bg-white/20 text-white rounded-full backdrop-blur-sm transition-all"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Main Image Area */}
              <div className="relative flex-1 bg-black flex items-center justify-center p-4">
                <div className="relative w-full h-full">
                  <Image
                    src={photos[selectedPhotoIndex].src}
                    alt={photos[selectedPhotoIndex].title}
                    fill
                    className="object-contain"
                    quality={100}
                  />
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={handlePrev}
                  className="absolute left-6 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-white/20 text-white rounded-full backdrop-blur-sm transition-all opacity-0 group-hover/lightbox:opacity-100"
                >
                  <ChevronLeft className="h-8 w-8" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-6 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-white/20 text-white rounded-full backdrop-blur-sm transition-all opacity-0 group-hover/lightbox:opacity-100"
                >
                  <ChevronRight className="h-8 w-8" />
                </button>
              </div>

              {/* Caption Area */}
              <div className="bg-black/90 p-6 text-white border-t border-white/10 flex justify-between items-center">
                <div>
                  <h2 className="text-2xl font-bold mb-1">
                    {photos[selectedPhotoIndex].title}
                  </h2>
                  <p className="text-white/70">
                    {photos[selectedPhotoIndex].description}
                  </p>
                </div>
                <div className="text-white/50 text-sm font-medium">
                  {selectedPhotoIndex + 1} / {photos.length}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}