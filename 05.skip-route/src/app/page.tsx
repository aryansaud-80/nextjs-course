import home from '@/assets/home.png';

const Home = () => {
  return (
    <div className='h-screen bg-gray-200 p-6 text-gray-900'>
      <div className='flex flex-col gap-10 items-center justify-center'>
        <h1 className='text-4xl font-bold'>Welcome back Aryan Saud</h1>

        <img src={home.src} alt='' className='animate-pulse'/>  


        <p className='bg-green-300 p-4 text-gray-500 rounded-md'>
          This is about Route Organization and Ignoring Routes in Next.js
        </p>
      </div>
    </div>
  );
};
export default Home;
