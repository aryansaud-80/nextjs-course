  'use client';

  import { Divide, Leaf, MenuIcon, X } from 'lucide-react';
  import Link from 'next/link';
  import { useState } from 'react';

  const navData = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'About', href: '/about' },
  ];

  const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
      <header className='sticky top-0 z-40 inset-0 h-15 shadow px-8 md:px-10 flex justify-between items-center bg-white'>
        <Link href='/' className='flex gap-2 items-center'>
          <div className='bg-emerald-600 p-2 rounded-full'>
            <Leaf className='text-white h-6 w-6' />
          </div>
          <span className='text-2xl font-bold'>GreenCart</span>
        </Link>
        <nav className='sm:flex gap-8 text-lg items-center hidden'>
          {navData.map((data) => (
            <Link
              href={data.href}
              key={data.label}
              className='hover:text-emerald-600 transition-colors duration-300'
            >
              {data.label}
            </Link>
          ))}
        </nav>

        {!open ? (
          <button className='block sm:hidden' onClick={() => setOpen(true)}>
            <MenuIcon />
          </button>
        ) : (
          <button className='block sm:hidden' onClick={() => setOpen(false)}>
            <X />
          </button>
        )}

        {open && (
          <div
            className='z-20 backdrop-blur-sm fixed inset-0 opacity-10 top-15 bg-black/30 '
            onClick={() => setOpen(false)}
          ></div>
        )}

        <nav
          className={` flex-col gap-5 sm:hidden ${
            open === true ? 'flex' : 'hidden'
          } fixed right-0 top-15 z-50 bg-white p-6 h-full text-lg  ${
            open ? 'translate-x-0' : 'translate-x-full'
          } shadow-lg transform transition-transform duration-300 ease-in-out w-2/3 max-w-xs`}
        >
          {navData.map((data) => (
            <Link
              href={data.href}
              key={data.label}
              onClick={() => setOpen(false)}
              className='hover:text-emerald-600'
            >
              {data.label}
            </Link>
          ))}
        </nav>
      </header>
    );
  };
  export default Navbar;
