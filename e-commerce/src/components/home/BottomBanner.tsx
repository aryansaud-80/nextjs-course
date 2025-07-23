import Link from 'next/link';

const BottomBanner = () => {
  return (
    <section className='bg-emerald-600 text-white flex flex-col gap-4 items-center justify-center h-[300px] sm:px-8 md:px-10 text-center'>
      <h1 className='text-3xl font-bold'>Join the Green Revolution</h1>
      <p className='text-xl '>
        Every purchase supports sustainable practices and environmental
        conservation
      </p>
      <Link
        href='/about'
        className='border border-white px-10 py-3 rounded-full font-bold hover:bg-white hover:text-emerald-500 transition-colors duration-200'
      >
        Learn More About Us
      </Link>
    </section>
  );
};
export default BottomBanner;
