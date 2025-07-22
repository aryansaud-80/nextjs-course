import tea from './greenTea.jpg';
import bottle from './bambooBottle.jpg';
import soap from './soap.webp';
import { StaticImageData } from 'next/image';

interface ProductType {
  id: number;
  name: string;
  price: number;
  image: string | StaticImageData;
  description: string;
  features: string[];
  rating: number;
  reviews: number;
}

const products: ProductType[] = [
  {
    id: 1,
    name: 'Organic Green Tea',
    price: 1200,
    image: tea,
    description:
      'Premium organic green tea sourced directly from sustainable farms in the mountains of Japan. Rich in antioxidants and carefully processed to preserve its natural flavor and health benefits.',
    features: [
      '100% Organic Certified',
      'Fair Trade Sourced',
      'Biodegradable Packaging',
      'Rich in Antioxidants',
    ],
    rating: 4.8,
    reviews: 127,
  },
  {
    id: 2,
    name: 'Bamboo Water Bottle',
    price: 2500,
    image: bottle,
    description:
      'Stylish and sustainable water bottle made from natural bamboo with a leak-proof stainless steel interior. Perfect for staying hydrated while reducing plastic waste.',
    features: [
      'Natural Bamboo Exterior',
      'Stainless Steel Interior',
      'Leak-Proof Design',
      '500ml Capacity',
    ],
    rating: 4.9,
    reviews: 89,
  },
  {
    id: 3,
    name: 'Natural Soap Set',
    price: 1800,
    image: soap,
    description:
      'Handcrafted soap set made with organic ingredients and essential oils. Gentle on skin and completely biodegradable, perfect for eco-conscious skincare.',
    features: [
      'Handcrafted with Love',
      'Organic Ingredients',
      'Essential Oil Infused',
      'Plastic-Free Packaging',
    ],
    rating: 4.7,
    reviews: 203,
  },
];

export { products };
