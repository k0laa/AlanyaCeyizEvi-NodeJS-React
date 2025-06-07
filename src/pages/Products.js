import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import products from '../data/products';
import LazyImage from '../components/LazyImage';

function Products() {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 5000 });
  const [selectedColors, setSelectedColors] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Tüm renkleri topla
  const allColors = [...new Set(products.flatMap(product => product.colors))];

  // Kategorileri topla
  const categories = [
    { id: 'all', name: 'Tümü' },
    { id: 'yatak-ortuleri', name: 'Yatak Örtüleri' },
    { id: 'yorganlar', name: 'Yorganlar' },
    { id: 'masa-ortuleri', name: 'Masa Örtüleri' },
    { id: 'yastik-kiliflari', name: 'Yastık Kılıfları' },
    { id: 'nevresim-takimlari', name: 'Nevresim Takımları' }
  ];

  useEffect(() => {
    let filtered = products;

    // Kategori filtresi
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Fiyat aralığı filtresi
    filtered = filtered.filter(
      product => product.price >= priceRange.min && product.price <= priceRange.max
    );

    // Renk filtresi
    if (selectedColors.length > 0) {
      filtered = filtered.filter(product =>
        product.colors.some(color => selectedColors.includes(color))
      );
    }

    // Arama filtresi
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        product =>
          product.name.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query)
      );
    }

    setFilteredProducts(filtered);
  }, [selectedCategory, priceRange, selectedColors, searchQuery]);

  const handleColorToggle = (color) => {
    setSelectedColors(prev =>
      prev.includes(color)
        ? prev.filter(c => c !== color)
        : [...prev, color]
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container mx-auto px-4 py-8"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Ürünlerimiz</h1>

      {/* Filtreler */}
      <div className="grid md:grid-cols-4 gap-8">
        <div className="md:col-span-1 space-y-6">
          {/* Arama */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-2">Arama</h2>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Ürün ara..."
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Kategoriler */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-2">Kategoriler</h2>
            <div className="space-y-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-primary text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Fiyat Aralığı */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-2">Fiyat Aralığı</h2>
            <div className="space-y-4">
              <input
                type="range"
                min="0"
                max="5000"
                step="100"
                value={priceRange.max}
                onChange={(e) => setPriceRange(prev => ({ ...prev, max: Number(e.target.value) }))}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-gray-600">
                <span>{priceRange.min} TL</span>
                <span>{priceRange.max} TL</span>
              </div>
            </div>
          </div>

          {/* Renkler */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-2">Renkler</h2>
            <div className="flex flex-wrap gap-2">
              {allColors.map(color => (
                <button
                  key={color}
                  onClick={() => handleColorToggle(color)}
                  className={`px-3 py-1 rounded-full border ${
                    selectedColors.includes(color)
                      ? 'bg-primary text-white border-primary'
                      : 'bg-white text-gray-800 border-gray-300'
                  }`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Ürün Listesi */}
        <div className="md:col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredProducts.map(product => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="bg-white rounded-lg shadow-sm overflow-hidden"
                >
                  <Link to={`/urunler/${product.id}`}>
                    <div className="aspect-square relative">
                      <LazyImage
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        {product.name}
                      </h3>
                      <p className="text-primary font-semibold">
                        {product.price.toLocaleString('tr-TR', {
                          style: 'currency',
                          currency: 'TRY'
                        })}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filteredProducts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-gray-600">Aramanızla eşleşen ürün bulunamadı.</p>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default Products; 