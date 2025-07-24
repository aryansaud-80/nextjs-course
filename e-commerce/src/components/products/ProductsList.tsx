import { products } from '@/assets/data';
import ProductCard from '@/components/ProductCard';

const ProductsList = () => {
  return (
    <section className='bg-white p-4 sm:p-8 md:p-10'>
      <div className='max-w-7xl mx-auto flex flex-col gap-10 items-center'>
        {products.length > 0 ? (
          <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 items-center justify-center'>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p className='text-gray-500'>No products available right now.</p>
        )}
      </div>
    </section>
  );
};
export default ProductsList;
