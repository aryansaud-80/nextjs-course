import Link from 'next/link';

const NotFound = () => {
  return (
    <section className='bg-gray-200 min-h-screen w-full flex items-center justify-center'>
      <div className='flex flex-col gap-5 text-center items-center justify-center h-full'>
        <div className='flex flex-col gap-1'>
          <h1 className='bg-gradient-to-l from-blue-500 to-blue-700 text-transparent bg-clip-text txt font-bold w-full text-center '>
            404
          </h1>
          <div className='bg-blue-500 w-[500px] mx-auto h-2'></div>
        </div>

        <div className='flex flex-col gap-2'>
          <p className='text-3xl text-gray-900 '>The page not found</p>

          <span className='text-blue-400 text-lg font-bold'>
            The link you followed is broken or the page isn't exist
          </span>
        </div>

        <Link
          href='/'
          className='bg-gradient-to-l from-blue-500 to-blue-700 px-6 py-2 rounded-full text-white'
        >
          Home Page
        </Link>
      </div>
    </section>
  );
};
export default NotFound;
