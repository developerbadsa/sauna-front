import type { MatchingProduct, Product } from './product-types';

export const MAIN_PRODUCT: Product = {
  id: 'grandview-barrel-sauna',
  slug: 'the-grandview-barrel-sauna',
  name: 'The Grandview Barrel Sauna',
  price: 1999,
  currency: 'USD',
  inStock: 3,
  stockMessage: 'In stock, only 3 left!',
  shippingBadge: 'Free Shipping',
  rating: 5.0,
  reviewCount: 24,
  images: [
    {
      id: 'main',
      src: 'https://i.ibb.co.com/ks7KS3jT/Generated-Image-November-16-2025-10-02-AM-1.png',
      alt: 'The Grandview Barrel Sauna installed in a modern backyard',
    },
    {
      id: '2',
      src: 'https://i.ibb.co.com/wZsc3W4M/Generated-Image-November-16-2025-10-06-AM-1.pngg',
      alt: 'Side view of the Grandview Barrel Sauna',
    },
    {
      id: '3',
      src: 'https://i.ibb.co.com/zTmfsCqp/Generated-Image-November-16-2025-9-59-AM-1.png',
      alt: 'Interior of the Grandview Barrel Sauna with warm lighting',
    },
    {
      id: '4',
      src: 'https://i.ibb.co.com/xKZYc1VC/SADSFSDSDFSD-1-1.png',
      alt: 'Grandview Barrel Sauna in a snowy backyard',
    },
  ],
  detailSections: [
    {
      id: 'description',
      title: 'Description',
      body:
        'Transform your backyard into a private wellness retreat with the Grandview Barrel Sauna. Crafted from premium western red cedar, the barrel profile maximizes heat circulation and reduces energy consumption while offering a compact footprint that fits most outdoor spaces. Large panoramic windows, a tempered-glass door and subtle exterior details create a luxurious spa-like feel that pairs perfectly with contemporary architecture.',
    },
    {
      id: 'features',
      title: 'Features',
      items: [
        'Premium Western Red Cedar barrel staves with tongue-and-groove fit',
        'Panoramic rear window for immersive nature views',
        'Ergonomic multi-level seating for 2–6 bathers',
        'High-efficiency electric heater with precision thermostat',
        'Exterior LED warm white strip lighting with dimmer',
      ],
    },
    {
      id: 'specifications',
      title: 'Specifications',
      items: [
        'Dimensions: 7 ft (L) × 6 ft (Ø)',
        'Recommended capacity: 2–6 persons',
        'Heater output: 6 kW / 240 V, hard-wired',
        'Wood species: Kiln-dried Western Red Cedar',
        'Installation: 2–3 hours with two adults, no special tools required',
      ],
    },
    {
      id: 'materials',
      title: 'Materials',
      items: [
        'Sustainably harvested Western Red Cedar exterior and benches',
        'Tempered safety glass door and window',
        'Marine-grade stainless steel bands and hardware',
        'Weather-resistant EPDM roof gasket system',
      ],
    },
    {
      id: 'consultation',
      title: 'Request Consultation',
      body:
        'Need help planning your backyard sauna project? Request a free 20-minute design consultation with our wellness specialists. We will review placement, power requirements and climate considerations to ensure your barrel sauna performs perfectly in Canadian weather.',
    },
  ],
  reviewTags: [
    { id: 'beautiful', label: 'Beautiful' },
    { id: 'love-it', label: 'Love it' },
    { id: 'fast-delivery', label: 'Fast delivery' },
    { id: 'quality-build', label: 'Quality build' },
    { id: 'worth-investment', label: 'Worth the investment' },
  ],
  reviews: [
    {
      id: 'review-1',
      author: 'Matt T.',
      rating: 5,
      date: 'Nov 3, 2025',
      text:
        'Absolutely love this sauna. The design is stunning and fits perfectly in our garden. Heat-up time is quick and the cedar smells incredible. We use it almost every evening now.',
      badges: ['Beautiful', 'Quality build'],
    },
    {
      id: 'review-2',
      author: 'Ethan McAlister',
      rating: 5,
      date: 'Nov 1, 2025',
      text:
        'The whole purchase experience felt premium. The wood quality is amazing and the barrel shape holds heat very efficiently. Assembly was straightforward with two people.',
      badges: ['Fast delivery'],
    },
    {
      id: 'review-3',
      author: 'Sophie Tremblay',
      rating: 5,
      date: 'Oct 29, 2025',
      text:
        'This has become our favourite ritual. The interior feels spacious, and the view through the window gives it a boutique-hotel vibe. Perfect for Canadian winters.',
      badges: ['Worth the investment'],
    },
    {
      id: 'review-4',
      author: 'Logan Peterson',
      rating: 5,
      date: 'Oct 25, 2025',
      text:
        'Shipping was fast and well-packaged. The warm wood scent combined with the soft exterior lighting makes it feel like a high-end spa right at home.',
      badges: ['Fast delivery', 'Quality build'],
    },
  ],
};

export const MATCHING_PRODUCTS: MatchingProduct[] = [
  {
    id: 'cedar-cold-plunge',
    name: 'Cedar Cold Plunge Tub',
    price: 1299,
    currency: 'USD',
    image: {
      id: 'cold-plunge',
      src: '/images/products/cold-plunge/main.jpg',
      alt: 'Outdoor cedar cold plunge tub beside a sauna',
    },
    tagline: 'Perfect contrast therapy partner.',
  },
  {
    id: 'sauna-steps',
    name: 'Cedar Sauna Steps & Deck',
    price: 599,
    currency: 'USD',
    image: {
      id: 'steps',
      src: '/images/products/sauna-steps/main.jpg',
      alt: 'Cedar steps and landing deck for a barrel sauna',
    },
    tagline: 'Safer access and extra seating.',
  },
  {
    id: 'sauna-accessory-kit',
    name: 'Premium Sauna Accessory Kit',
    price: 249,
    currency: 'USD',
    image: {
      id: 'accessories',
      src: '/images/products/sauna-accessories/main.jpg',
      alt: 'Sauna bucket, ladle, thermometer and hourglass set',
    },
    tagline: 'All the essentials in one bundle.',
  },
];
