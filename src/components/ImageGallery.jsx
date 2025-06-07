import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { X } from "lucide-react";

const images = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.png",
  "5.jpg",
  "6.png",
  "7.png",
  "8.png",
  "9.png"
];

export default function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, index) => (
          <img
            key={index}
            src={`${window.location.origin}/assets/images/${src}`}
            alt="Gallery"
            className="w-80 h-40  object-cover cursor-pointer rounded-lg shadow-lg hover:scale-105 transition-transform"
            onClick={() => setSelectedImage(src)}
          />
        ))}
      </div>

      {/* Image Modal */}
      <Dialog 
        open={!!selectedImage} 
        onClose={() => setSelectedImage(null)} 
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 p-4"
      >
        <div className="relative flex justify-center items-center max-w-5xl w-full">
          <button 
            onClick={() => setSelectedImage(null)} 
            className="absolute top-4 right-4 text-white bg-gray-800 p-2 rounded-full"
          >
            <X size={24} />
          </button>
          <img 
            src={`${window.location.origin}/assets/images/${selectedImage}`} 
            alt="Selected" 
            className="w-full h-auto max-h-screen rounded-lg shadow-lg object-contain"
          />
        </div>
      </Dialog>
    </div>
  );
}
