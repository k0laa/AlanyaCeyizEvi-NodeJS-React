import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "Sipariş süreci nasıl işliyor?",
    answer: "Siparişleriniz WhatsApp üzerinden alınmaktadır. Ürün sayfasındaki 'WhatsApp ile Sipariş Ver' butonuna tıklayarak bizimle iletişime geçebilirsiniz. Siparişiniz onaylandıktan sonra ödeme bilgileri size iletilecektir."
  },
  {
    question: "Ödeme seçenekleri nelerdir?",
    answer: "Havale/EFT, kredi kartı ve kapıda ödeme seçeneklerimiz mevcuttur. Kredi kartı ile ödemelerde 3D Secure güvenlik sistemi kullanılmaktadır."
  },
  {
    question: "Teslimat süresi ne kadardır?",
    answer: "Siparişleriniz ödeme onayından sonra 1-3 iş günü içerisinde kargoya verilmektedir. Teslimat süresi bulunduğunuz bölgeye göre 1-3 iş günü arasında değişmektedir."
  },
  {
    question: "İade politikası nedir?",
    answer: "Ürünlerimizde 14 gün içerisinde iade hakkı bulunmaktadır. İade etmek istediğiniz ürünün orijinal ambalajında ve kullanılmamış olması gerekmektedir."
  },
  {
    question: "Ürünleriniz garantili midir?",
    answer: "Tüm ürünlerimiz 2 yıl garantilidir. Üretim hatalarına karşı ücretsiz değişim ve onarım hizmeti sunuyoruz."
  },
  {
    question: "Özel sipariş verebilir miyim?",
    answer: "Evet, özel siparişleriniz için bizimle iletişime geçebilirsiniz. İstediğiniz renk, boyut ve desen seçeneklerini değerlendirip size özel üretim yapabiliriz."
  }
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container mx-auto px-4 py-8"
    >
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-3xl font-bold text-gray-800 mb-8 text-center"
      >
        Sık Sorulan Sorular
      </motion.h1>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-sm overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
            >
              <span className="font-semibold text-gray-800">{faq.question}</span>
              <motion.svg
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                className="w-5 h-5 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </motion.svg>
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 py-4 text-gray-600 border-t">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-12 text-center"
      >
        <p className="text-gray-600 mb-4">
          Başka sorularınız mı var?
        </p>
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="/iletisim"
          className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
        >
          Bize Ulaşın
        </motion.a>
      </motion.div>
    </motion.div>
  );
}

export default FAQ; 