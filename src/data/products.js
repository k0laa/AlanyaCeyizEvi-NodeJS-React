const products = [
  {
    id: 1,
    name: "El İşi Yatak Örtüsü",
    description: "Yüksek kaliteli pamuklu kumaştan üretilmiş, el işi nakışlı yatak örtüsü. Yatak odanıza şıklık katacak bu özel parça, 200x220 cm boyutlarındadır.",
    price: 1299.99,
    category: "yatak-ortuleri",
    images: [
      "/images/products/yatak-ortusu-1.jpg",
      "/images/products/yatak-ortusu-1-detail.jpg"
    ],
    features: [
      "100% Pamuklu kumaş",
      "El işi nakış detayları",
      "Makinede yıkanabilir",
      "200x220 cm boyut"
    ],
    colors: ["Beyaz", "Krem", "Açık Mavi"],
    inStock: true,
    rating: 4.8,
    reviews: [
      {
        id: 1,
        name: "Ayşe Y.",
        rating: 5,
        comment: "Harika bir ürün, kalitesi çok iyi. Nakışları çok güzel."
      },
      {
        id: 2,
        name: "Mehmet K.",
        rating: 4.5,
        comment: "Beklediğimden daha kaliteli çıktı, teşekkürler."
      }
    ]
  },
  {
    id: 2,
    name: "Patchwork Yorgan",
    description: "El yapımı patchwork tekniği ile üretilmiş, rengarenk desenli yorgan. Her bir parça özenle seçilmiş kumaşlardan oluşmaktadır.",
    price: 2499.99,
    category: "yorganlar",
    images: [
      "/images/products/yorgan-1.jpg",
      "/images/products/yorgan-1-detail.jpg"
    ],
    features: [
      "Patchwork tekniği",
      "Yumuşak iç dolgu",
      "Makinede yıkanabilir",
      "220x240 cm boyut"
    ],
    colors: ["Çok Renkli"],
    inStock: true,
    rating: 4.9,
    reviews: [
      {
        id: 1,
        name: "Zeynep A.",
        rating: 5,
        comment: "Renkleri ve desenleri çok güzel, evime çok yakıştı."
      }
    ]
  },
  {
    id: 3,
    name: "Nakışlı Masa Örtüsü",
    description: "El işi nakışlı, şık desenli masa örtüsü. Özel günleriniz için ideal bir seçim.",
    price: 899.99,
    category: "masa-ortuleri",
    images: [
      "/images/products/masa-ortusu-1.jpg",
      "/images/products/masa-ortusu-1-detail.jpg"
    ],
    features: [
      "El işi nakış",
      "Yüksek kaliteli kumaş",
      "Makinede yıkanabilir",
      "160x160 cm boyut"
    ],
    colors: ["Beyaz", "Krem"],
    inStock: true,
    rating: 4.7,
    reviews: []
  },
  {
    id: 4,
    name: "Patchwork Yastık Kılıfı",
    description: "El yapımı patchwork tekniği ile üretilmiş yastık kılıfı. Her bir parça özenle seçilmiş kumaşlardan oluşmaktadır.",
    price: 299.99,
    category: "yastik-kiliflari",
    images: [
      "/images/products/yastik-kilifi-1.jpg",
      "/images/products/yastik-kilifi-1-detail.jpg"
    ],
    features: [
      "Patchwork tekniği",
      "Yumuşak kumaş",
      "Makinede yıkanabilir",
      "50x70 cm boyut"
    ],
    colors: ["Çok Renkli"],
    inStock: true,
    rating: 4.6,
    reviews: []
  },
  {
    id: 5,
    name: "Nakışlı Nevresim Takımı",
    description: "El işi nakışlı, yüksek kaliteli kumaştan üretilmiş nevresim takımı. Yatak odanıza şıklık katacak bu özel set, yastık kılıfları ile birlikte gelmektedir.",
    price: 1799.99,
    category: "nevresim-takimlari",
    images: [
      "/images/products/nevresim-1.jpg",
      "/images/products/nevresim-1-detail.jpg"
    ],
    features: [
      "100% Pamuklu kumaş",
      "El işi nakış detayları",
      "Makinede yıkanabilir",
      "200x220 cm boyut",
      "2 adet yastık kılıfı dahil"
    ],
    colors: ["Beyaz", "Krem", "Açık Mavi"],
    inStock: true,
    rating: 4.9,
    reviews: [
      {
        id: 1,
        name: "Fatma S.",
        rating: 5,
        comment: "Nakışları çok güzel, kalitesi çok iyi. Kesinlikle tavsiye ederim."
      }
    ]
  }
];

export default products; 