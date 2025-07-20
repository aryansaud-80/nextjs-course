import Link from 'next/link';
const Setting = () => {
  return (
    <div className='h-screen bg-gray-200 text-gray-900'>
      <div className='p-6 flex flex-col gap-6'>
        <div className='flex justify-between items-center bg-green-100 p-4 rounded shadow'>
          <Link href="/dashboard" className='text-2xl underline font-semibold'>Dashboard</Link>

          <div className='flex gap-4 text-lg'>
            <Link
              href='/'
              className='bg-white py-1 px-4 rounded hover:bg-blue-500 hover:text-white transition'
            >
              Home
            </Link>
            <Link
              href='/dashboard/profile'
              className='bg-white py-1 px-4 rounded hover:bg-blue-500 hover:text-white transition'
            >
              Profile
            </Link>
            <Link
              href='/dashboard/setting'
              className='bg-white py-1 px-4 rounded hover:bg-blue-500 hover:text-white transition'
            >
              Setting
            </Link>
          </div>
        </div>

        <div className='text-center text-xl text-gray-700 mt-10'>
          <p>Welcome to Setting Page</p>
        </div>
      </div>
    </div>
  );
};
export default Setting;
