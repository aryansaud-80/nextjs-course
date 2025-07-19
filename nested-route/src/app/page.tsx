import Link from 'next/link';

const Home = () => {
  return (
    <div className='h-screen text-gray-900 bg-gray-200 p-6'>
      <div className='flex flex-col justify-center items-center gap-10'>
        <h1 className='text-4xl font-bold'>Home Page</h1>

        <Link
          className='hover:bg-blue-300 hover:text-blue-700 rounded-full px-4 py-2 transition-colors duration-200 bg-white'
          href='products'
        >
          Go to Products Page
        </Link>
      </div>
    </div>
  );
};
export default Home;
