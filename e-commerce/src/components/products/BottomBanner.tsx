import Link from 'next/link';

const BottomBanner = () => {
  return (
    <section className='bg-emerald-600 text-white flex flex-col gap-4 items-center justify-center h-[300px] sm:px-8 md:px-10 text-center'>
      <h1 className='text-3xl font-bold'>
        Can't find what you're looking for?
      </h1>
      <p className='text-xl '>
        We're constantly adding new sustainable products to our collection
      </p>
      <Link
        href='#'
        className='border border-white px-10 py-3 rounded-full font-bold hover:bg-white hover:text-emerald-500 transition-colors duration-200'
      >
        Request a Product
      </Link>
    </section>
  );
};
export default BottomBanner;
