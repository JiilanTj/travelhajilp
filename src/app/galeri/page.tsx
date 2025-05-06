'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import { X } from 'lucide-react';

// Array of gallery images with categories
const galleryImages = [
  {
    id: 1,
    url: 'https://placehold.co/600x400/004D40/ffffff/png?text=Masjidil+Haram',
    title: 'Masjidil Haram',
    category: 'Makkah'
  },
  {
    id: 2,
    url: 'https://placehold.co/600x400/00695C/ffffff/png?text=Masjid+Nabawi',
    title: 'Masjid Nabawi',
    category: 'Madinah'
  },
  {
    id: 3,
    url: 'https://placehold.co/600x400/00796B/ffffff/png?text=Jamaah+Umroh',
    title: 'Jamaah Umroh',
    category: 'Kegiatan'
  },
  {
    id: 4,
    url: 'https://placehold.co/600x400/00897B/ffffff/png?text=Hotel+Makkah',
    title: 'Hotel Makkah',
    category: 'Akomodasi'
  },
  {
    id: 5,
    url: 'https://placehold.co/600x400/009688/ffffff/png?text=Ziarah+Madinah',
    title: 'Ziarah Madinah',
    category: 'Kegiatan'
  },
  {
    id: 6,
    url: 'https://placehold.co/600x400/26A69A/ffffff/png?text=Hotel+Madinah',
    title: 'Hotel Madinah',
    category: 'Akomodasi'
  },
  {
    id: 7,
    url: 'https://placehold.co/600x400/4DB6AC/ffffff/png?text=Jabal+Uhud',
    title: 'Jabal Uhud',
    category: 'Ziarah'
  },
  {
    id: 8,
    url: 'https://placehold.co/600x400/80CBC4/ffffff/png?text=Jabal+Rahmah',
    title: 'Jabal Rahmah',
    category: 'Ziarah'
  },
  {
    id: 9,
    url: 'https://placehold.co/600x400/B2DFDB/ffffff/png?text=Manasik+Umroh',
    title: 'Manasik Umroh',
    category: 'Kegiatan'
  },
  // Tambahan gambar baru
  {
    id: 10,
    url: 'https://placehold.co/600x400/004D40/ffffff/png?text=Raudhah',
    title: 'Raudhah',
    category: 'Madinah'
  },
  {
    id: 11,
    url: 'https://placehold.co/600x400/00695C/ffffff/png?text=Mina',
    title: 'Mina',
    category: 'Makkah'
  },
  {
    id: 12,
    url: 'https://placehold.co/600x400/00796B/ffffff/png?text=Muzdalifah',
    title: 'Muzdalifah',
    category: 'Makkah'
  },
  {
    id: 13,
    url: 'https://placehold.co/600x400/00897B/ffffff/png?text=Arafah',
    title: 'Arafah',
    category: 'Makkah'
  },
  {
    id: 14,
    url: 'https://placehold.co/600x400/009688/ffffff/png?text=Bus+Jamaah',
    title: 'Bus Jamaah',
    category: 'Transportasi'
  },
  {
    id: 15,
    url: 'https://placehold.co/600x400/26A69A/ffffff/png?text=Pesawat+Jamaah',
    title: 'Pesawat Jamaah',
    category: 'Transportasi'
  },
  {
    id: 16,
    url: 'https://placehold.co/600x400/4DB6AC/ffffff/png?text=Masjid+Quba',
    title: 'Masjid Quba',
    category: 'Madinah'
  },
  {
    id: 17,
    url: 'https://placehold.co/600x400/80CBC4/ffffff/png?text=Masjid+Qiblatain',
    title: 'Masjid Qiblatain',
    category: 'Madinah'
  },
  {
    id: 18,
    url: 'https://placehold.co/600x400/B2DFDB/ffffff/png?text=Jabal+Nur',
    title: 'Jabal Nur',
    category: 'Ziarah'
  }
];

// All unique categories
const categories = ['Semua', ...new Set(galleryImages.map(img => img.category))];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  const closeModal = useCallback((e: React.MouseEvent) => {
    // Jika yang diklik adalah background modal (bukan konten modal)
    if ((e.target as HTMLElement).classList.contains('modal-backdrop')) {
      setSelectedImage(null);
    }
  }, []);

  const filteredImages = selectedCategory === 'Semua'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Header Section */}
      <section className="pt-32 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Galeri Perjalanan
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Dokumentasi perjalanan ibadah umroh dan haji bersama Grasindo Travel. Momen berharga jamaah dalam menjalankan ibadah di tanah suci.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-green-600 text-white shadow-lg shadow-green-600/20'
                  : 'bg-white text-gray-600 hover:bg-green-50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              onClick={() => setSelectedImage(image)}
              className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src={image.url}
                  alt={image.title}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center text-white p-4">
                  <h3 className="text-xl font-semibold mb-2">{image.title}</h3>
                  <span className="inline-block px-3 py-1 bg-green-600/80 rounded-full text-sm">
                    {image.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 modal-backdrop"
          onClick={closeModal}
        >
          <div className="relative max-w-5xl w-full" onClick={e => e.stopPropagation()}>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-green-400 transition-colors p-2"
            >
              <X size={24} />
            </button>
            <div className="relative aspect-[4/3]">
              <Image
                src={selectedImage.url}
                alt={selectedImage.title}
                fill
                className="object-contain"
              />
            </div>
            <div className="text-center mt-4">
              <h3 className="text-xl font-semibold text-white mb-2">
                {selectedImage.title}
              </h3>
              <span className="inline-block px-3 py-1 bg-green-600 rounded-full text-sm text-white">
                {selectedImage.category}
              </span>
            </div>
          </div>
        </div>
      )}
    </main>
  );
} 