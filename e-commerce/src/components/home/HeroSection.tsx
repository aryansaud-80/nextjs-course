import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className='relative h-[500px] bg-emerald-50 sm:px-8 md:px-10'>
      <div
        className='absolute inset-0 z-0'
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(5, 150, 105, 0.1) 1px, transparent 0)',
          backgroundSize: '20px 20px',
        }}
      ></div>

      <div className='relative flex flex-col items-center justify-center h-full gap-4 z-10'>
        <h1 className=' text-4xl sm:text-7xl text-gray-900 font-bold text-center'>
          Welcome to <span className='text-emerald-700'>GreenCart</span>
        </h1>

        <p className='text-center text-lg sm:text-2xl text-gray-600'>
          Discover sustainable, eco-friendly products that make a difference{' '}
          <br /> for you and the planet
        </p>

        <Link
          href='/products'
          className='px-5 py-3 bg-emerald-600 rounded-full font-bold text-white'
        >
          Shop now
        </Link>
      </div>
    </section>
  );
};
export default HeroSection;
