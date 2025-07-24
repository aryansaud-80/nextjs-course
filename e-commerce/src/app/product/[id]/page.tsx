import { products } from '@/assets/data';
import ProductCard from '@/components/ProductCard';
import { MoveLeft, Recycle, Shield, StarIcon, Truck } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const ProductDetail = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;

  const product = products.find((product) => product.id === Number(id));
  const imageSrc = product
    ? typeof product.image === 'string'
      ? product.image
      : product.image.src
    : '';

  const recommendProduct = products.filter(
    (product) => product.id !== Number(id)
  );

  return (
    <section className='min-h-screen mb-10  '>
      <div className='flex flex-col gap-10 bg-gray-50'>
        <div className=' h-[70px] bg-white border-b shadow-sm border-gray-300 '>
          <Link
            href='/products'
            className='text-emerald-600 flex gap-2 items-center hover:text-emerald-700 py-6 px-8'
          >
            <MoveLeft className='w-4 h-4' />
            Back to Products
          </Link>
        </div>

        <div className='container mx-auto flex gap-10 py-10'>
          <div className='overflow-hidden border flex-1 rounded-md border-gray-300 shadow-lg h-[500px]'>
            <Image
              src={imageSrc}
              height={500}
              width={500}
              alt=''
              className='w-full h-full object-cover'
            />
          </div>

          <div className='flex-1 flex flex-col gap-6 text-gray-900'>
            <div className='flex  flex-col gap-4'>
              <h1 className='text-4xl font-bold  text-gray-900'>
                {product?.name}
              </h1>
              <div className='flex gap-4  items-center'>
                <div className='flex gap-1'>
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product?.rating ?? 0)
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <div className='flex gap-2 text-gray-500'>
                  <span>{product?.rating}</span>
                  <span>{`(${product?.reviews} reviews)`}</span>
                </div>
              </div>
              <span className='text-emerald-600 text-2xl font-bold'>
                Rs. {product?.price}
              </span>
            </div>

            <div className='flex flex-col gap-3'>
              <h3 className='text-xl font-bold'>Description</h3>
              <p className='text-gray-500'>{product?.description}</p>
            </div>

            <div className='flex flex-col gap-3'>
              <h3 className='text-xl font-bold'>Key Features</h3>
              <ul className='space-y-2'>
                {product?.features.map((feature, index) => (
                  <li key={index} className='flex items-center text-gray-600'>
                    <div className='w-2 h-2 bg-emerald-600 rounded-full mr-3'></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className='flex flex-col gap-4'>
              <button className='bg-emerald-600 py-3 text-white rounded-full font-bold hover:bg-emerald-700 transition-colors duration-300 shadow-sm'>
                Add to Cart
              </button>
              <button className='bg-white py-3 text-emerald-500 hover:text-gray-900 rounded-full font-bold hover:bg-emerald-50 transition-colors duration-300 border border-emerald-400'>
                Add to Wishlist
              </button>
            </div>
            <div className='bg-gray-400 w-full h-[1px]'></div>

            <div className='flex  items-center  justify-evenly'>
              <div className=' flex flex-col gap-2 items-center'>
                <Truck className='text-emerald-600 h-8 w-8' />
                <span className='text-gray-500 text-base'>Free Shipping</span>
              </div>

              <div className=' flex flex-col gap-2 items-center'>
                <Shield className='text-emerald-600 h-8 w-8' />
                <span className='text-gray-500 text-base'>
                  Quality Guarantee
                </span>
              </div>

              <div className=' flex flex-col gap-2 items-center'>
                <Recycle className='text-emerald-600 h-8 w-8' />
                <span className='text-gray-500 text-base'>Eco-Friendly</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-col items-center p-10 gap-10'>
        <h1 className='text-3xl font-bold '>You Might Also Like</h1>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
          {recommendProduct.slice(0, 3).map((product) => {
            return <ProductCard product={product} key={product.id} />;
          })}
        </div>
      </div>
    </section>
  );
};
export default ProductDetail;
