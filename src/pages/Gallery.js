import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LazyImage from '../components/LazyImage';

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  // Örnek galeri resimleri
  const galleryImages = [
    {
      id: 1,
      src: '/images/gallery/1.jpg',
      alt: 'El yapımı yastık örneği',
      category: 'Yastık'
    },
    {
      id: 2,
      src: '/images/gallery/2.jpg',
      alt: 'El yapımı yorgan örneği',
      category: 'Yorgan'
    },
    {
      id: 3,
      src: '/images/gallery/3.jpg',
      alt: 'El yapımı nevresim örneği',
      category: 'Nevresim'
    },
    {
      id: 4,
      src: '/images/gallery/4.jpg',
      alt: 'El yapımı yastık örneği',
      category: 'Yastık'
    },
    {
      id: 5,
      src: '/images/gallery/5.jpg',
      alt: 'El yapımı yorgan örneği',
      category: 'Yorgan'
    },
    {
      id: 6,
      src: '/images/gallery/6.jpg',
      alt: 'El yapımı nevresim örneği',
      category: 'Nevresim'
    }
  ];

  const categories = ['Tümü', ...new Set(galleryImages.map(img => img.category))];
  const [selectedCategory, setSelectedCategory] = useState('Tümü');

  const filteredImages = selectedCategory === 'Tümü'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="container mx-auto px-4 py-8"
    >
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-gray-800 mb-8"
      >
        Galeri
      </motion.h1>

      {/* Kategori Filtreleme */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="flex flex-wrap gap-4 mb-8"
      >
        {categories.map(category => (
          <motion.button
            key={category}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full transition-colors ${
              selectedCategory === category
                ? 'bg-primary text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {category}
          </motion.button>
        ))}
      </motion.div>

      {/* Galeri Grid */}
      <motion.div
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="wait">
          {filteredImages.map(image => (
            <motion.div
              key={image.id}
              variants={itemVariants}
              layout
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md"
              onClick={() => setSelectedImage(image)}
            >
              <LazyImage
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 flex items-center justify-center"
              >
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-white"
                >
                  {image.alt}
                </motion.span>
              </motion.div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh]"
            >
              <LazyImage
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-[80vh] object-contain"
              />
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300"
                onClick={() => setSelectedImage(null)}
              >
                ✕
              </motion.button>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="absolute bottom-4 left-4 text-white text-lg"
              >
                {selectedImage.alt}
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default Gallery; 