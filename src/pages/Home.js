import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
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
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-12"
    >
      {/* Hero Section */}
      <motion.section
        variants={itemVariants}
        className="text-center py-16 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg"
      >
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-bold text-gray-800 mb-6"
        >
          Alanya Çeyiz Evi
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
        >
          El yapımı, özel tasarım çeyiz ürünleriyle evinize sıcaklık katın
        </motion.p>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Link
            to="/urunler"
            className="inline-block bg-primary text-white px-8 py-3 rounded-full hover:bg-primary/90 transition-colors"
          >
            Ürünlerimizi Keşfedin
          </Link>
        </motion.div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        variants={itemVariants}
        className="grid md:grid-cols-3 gap-8"
      >
        {[
          {
            title: 'El Yapımı',
            description: 'Tüm ürünlerimiz özenle el işçiliği ile üretilmektedir'
          },
          {
            title: 'Özel Tasarım',
            description: 'İsteğinize göre özel tasarım ürünler üretiyoruz'
          },
          {
            title: 'Kaliteli Malzeme',
            description: 'En kaliteli kumaş ve malzemeler kullanıyoruz'
          }
        ].map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </motion.section>

      {/* CTA Section */}
      <motion.section
        variants={itemVariants}
        className="text-center py-12 bg-secondary/10 rounded-lg"
      >
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-gray-800 mb-4"
        >
          Siparişinizi Hemen Verin
        </motion.h2>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-gray-600 mb-8"
        >
          WhatsApp üzerinden bize ulaşın veya iletişim formunu doldurun
        </motion.p>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Link
            to="/iletisim"
            className="inline-block bg-secondary text-white px-8 py-3 rounded-full hover:bg-secondary/90 transition-colors"
          >
            İletişime Geçin
          </Link>
        </motion.div>
      </motion.section>
    </motion.div>
  );
}

export default Home; 