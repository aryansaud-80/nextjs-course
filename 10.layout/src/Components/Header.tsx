import Link from 'next/link';

const Header = () => {
  return (
    <div className='bg-white shadow-sm flex items-center justify-between p-4 border-b border-gray-500'>
      <Link href='/' className='text-gray-900 text-3xl font-bold'>
        Logo
      </Link>

      <div className='flex gap-6 items-center text-lg'>
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
        <Link href='/contact'>Contact</Link>
      </div>
    </div>
  );
};
export default Header;
