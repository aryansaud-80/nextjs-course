import Link from 'next/link';

const Notfound = () => {
  return (
    <div className='flex items-center flex-col gap-10'>
      <h1 className='text-7xl font-bold'>NotFound Sorry!</h1>

      <Link href='/' className='bg-white px-4 py-1 text-gray-700'>
        Back to home
      </Link>
    </div>
  );
};
export default Notfound;
