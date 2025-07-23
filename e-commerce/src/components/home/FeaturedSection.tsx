import { products } from "@/assets/data";
import ProductCard from "@/components/ProductCard";

const FeaturedSection = () => {
  return (
    <section className='bg-white px-4 sm:px-8 md:px-10'>
      <div className='max-w-7xl mx-auto flex flex-col gap-10 items-center'>
        <div className='flex flex-col items-center gap-3 text-center'>
          <h2 className='text-gray-900 font-bold text-4xl'>
            Featured Products
          </h2>
          <p className='text-gray-600 text-lg'>
            Handpicked sustainable essentials for conscious living
          </p>
        </div>

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
export default FeaturedSection;
