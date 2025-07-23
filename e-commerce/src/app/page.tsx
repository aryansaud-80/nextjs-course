import BottomBanner from '@/components/home/BottomBanner';
import FeaturedSection from '@/components/home/FeaturedSection';
import HeroSection from '@/components/home/HeroSection';

const Home = () => {
  return (
    <div className='min-h-screen flex flex-col gap-20'>
      <HeroSection />
      <FeaturedSection />
      <BottomBanner />
    </div>
  );
};

export default Home;
