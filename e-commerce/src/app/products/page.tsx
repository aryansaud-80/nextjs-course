import BottomBanner from '@/components/home/BottomBanner';
import HeroSection from '@/components/products/HeroSection';
import ProductsList from '@/components/products/ProductsList';

const Products = () => {
  return (
    <div className='min-h-screen flex gap-10 flex-col '>
      <HeroSection />
      <ProductsList />
      <BottomBanner />
    </div>
  );
};
export default Products;
