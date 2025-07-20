'use client';

import { useRouter } from 'next/navigation';

const Home = () => {
  const router = useRouter();
  const navigate = () => {
    router.push('/about');
  };
  return (
    <div className='h-screen bg-gray-200 text-gray-900 p-6'>
      <div className='flex flex-col gap-6 items-center'>
        <h1 className='text-4xl font-bold'>Home Page</h1>

        <article className='bg-green-300 p-6  rounded-md shadow-md'>
          This is the simple demo to use{' '}
          <span className='bg-white p-2 rounded-sm'>useRouter</span> hook for a
          navigation in Next.js{' '}
        </article>

        <button
          className='bg-green-300  p-3 rounded-sm hover:shadow-md cursor-pointer transition-all duration-200'
          onClick={navigate}
        >
          About useRouter
        </button>
      </div>
    </div>
  );
};
export default Home;
