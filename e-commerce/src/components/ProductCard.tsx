'use client';

import { Check } from 'lucide-react';
import Image, { StaticImageData } from 'next/image';
import { useRouter } from 'next/navigation';

interface propsType {
  id: number;
  name: string;
  price: number;
  image: string | StaticImageData;
  description: string;
  features: string[];
  rating: number;
  reviews: number;
}

const ProductCard = ({ product }: { product: propsType }) => {
  const imageSrc =
    typeof product.image === 'string' ? product.image : product.image.src;

  const router = useRouter();

  const navigate = (url: string) => {
    router.push(url);
  };
  return (
    <div className='bg-white rounded-2xl flex flex-col gap-6  overflow-hidden hover:-translate-y-2 hover:shadow-md transition-all duration-300 shadow-sm max-w-[300px]'>
      <div className='flex-1/2'>
        <Image
          src={imageSrc}
          alt={product.name}
          width={300}
          height={300}
          className='w-full h-48 object-cover'
        />
      </div>

      <div className='p-4 text-gray-900 flex flex-col gap-4'>
        <div className='flex flex-col gap-2 '>
          <h2 className='text-2xl font-bold'>{product.name}</h2>
          <p className='text-sm text-gray-400'>
            {product.description.slice(0, 60) + '...'}
          </p>
        </div>

        <div className='flex justify-between sm:items-center max-sm:flex-col  '>
          <div className='flex gap-2 items-center'>
            <span className='text-emerald-700 text-xl font-bold'>
              Rs. {product.price}
            </span>
            <span className='line-through text-gray-400'>
              Rs. {product.price * 1.6}
            </span>
          </div>

          <div className='text-gray-400 flex gap-2 items-center'>
            <Check className='h-4 w-4 text-emerald-600' />
            In Stock
          </div>
        </div>

        <div className='flex flex-col gap-3'>
          <button
            className='bg-emerald-600 py-2  text-white font-semibold rounded-xl hover:scale-105 hover:shadow-md transition-all duration-300 hover:bg-emerald-700'
            onClick={() => navigate(`/product/${product.id}`)}
          >
            View Details
          </button>

          <button className='border border-emerald-300 py-2 rounded-xl text-emerald-600 font-semibold hover:bg-emerald-50 hover:text-gray-900 transition-all duration-300'>
            Quick Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
