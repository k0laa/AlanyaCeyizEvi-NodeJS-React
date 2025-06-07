import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import products from '../data/products';
import LazyImage from '../components/LazyImage';

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === parseInt(id));
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product?.colors[0]);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <h1 className="text-2xl font-bold text-gray-800">Ürün bulunamadı</h1>
          <button
            onClick={() => navigate('/urunler')}
            className="mt-4 px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
          >
            Ürünlere Dön
          </button>
        </motion.div>
      </div>
    );
  }

  const handleWhatsAppOrder = () => {
    const message = `Merhaba, ${product.name} ürünü hakkında bilgi almak istiyorum.`;
    const whatsappUrl = `https://wa.me/905XXXXXXXXX?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container mx-auto px-4 py-8"
    >
      <div className="grid md:grid-cols-2 gap-8">
        {/* Ürün Görselleri */}
        <div className="space-y-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative aspect-square rounded-lg overflow-hidden"
          >
            <LazyImage
              src={product.images[selectedImage]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="grid grid-cols-4 gap-2">
            {product.images.map((image, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedImage(index)}
                className={`aspect-square rounded-lg overflow-hidden ${
                  selectedImage === index ? 'ring-2 ring-primary' : ''
                }`}
              >
                <LazyImage
                  src={image}
                  alt={`${product.name} - ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.button>
            ))}
          </div>
        </div>

        {/* Ürün Bilgileri */}
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="space-y-6"
        >
          <div>
            <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
            <p className="text-2xl font-semibold text-primary mt-2">
              {product.price.toLocaleString('tr-TR', {
                style: 'currency',
                currency: 'TRY'
              })}
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-2">Ürün Açıklaması</h2>
            <p className="text-gray-600">{product.description}</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-2">Özellikler</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-2">Renk Seçenekleri</h2>
            <div className="flex gap-2">
              {product.colors.map((color) => (
                <motion.button
                  key={color}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedColor(color)}
                  className={`px-4 py-2 rounded-full border ${
                    selectedColor === color
                      ? 'bg-primary text-white border-primary'
                      : 'bg-white text-gray-800 border-gray-300'
                  }`}
                >
                  {color}
                </motion.button>
              ))}
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleWhatsAppOrder}
            className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-colors"
          >
            WhatsApp ile Sipariş Ver
          </motion.button>
        </motion.div>
      </div>

      {/* Müşteri Yorumları */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="mt-12"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Müşteri Yorumları</h2>
        {product.reviews.length > 0 ? (
          <div className="space-y-4">
            {product.reviews.map((review) => (
              <motion.div
                key={review.id}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                className="bg-white p-4 rounded-lg shadow-sm"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-gray-800">{review.name}</h3>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${
                          i < review.rating ? 'text-yellow-400' : 'text-gray-300'
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600">{review.comment}</p>
              </motion.div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600">Henüz yorum yapılmamış.</p>
        )}
      </motion.div>
    </motion.div>
  );
}

export default ProductDetail; 