import Link from 'next/link';
import { Leaf, Facebook, Twitter, Instagram, Mail } from 'lucide-react';

const navData = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'About', href: '/about' },
];

const customerService = ['Contact Us', 'Shipping Info', 'Returns', 'FAQ'];

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white '>
      <div className='max-w-6xl py-12 px-4 mx-auto'>
        <div className='flex gap-15 flex-col md:flex-row '>
          <div className='flex flex-col gap-4 text-justify flex-[0.5]'>
            <Link href='/' className='flex gap-2 items-center'>
              <div className='bg-emerald-600 p-2 rounded-full'>
                <Leaf className='text-white h-6 w-6' />
              </div>
              <span className='text-2xl font-bold'>GreenCart</span>
            </Link>
            <p className='text-gray-500'>
              Sustainable products for a better tomorrow. Join us in making the
              world greener, one purchase at a time.
            </p>
          </div>

          <div className='flex gap-10 flex-1 flex-col md:flex-row'>
            <div className='flex flex-col gap-5 flex-1'>
              <h4 className='font-bold text-lg'>Quick Links</h4>

              <div className='flex flex-col gap-2 '>
                {navData.map((data) => (
                  <Link
                    key={data.label}
                    href={data.href}
                    className='text-gray-500 hover:text-emerald-600 transition-colors duration-300'
                  >
                    {data.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className='flex flex-col gap-5 flex-1'>
              <h4 className='font-bold text-lg'>Customer Service</h4>

              <div className='flex flex-col gap-2'>
                {customerService.map((data) => (
                  <Link
                    key={data}
                    href='#'
                    className='text-gray-500 hover:text-emerald-600 transition-colors duration-300'
                  >
                    {data}
                  </Link>
                ))}
              </div>
            </div>

            <div className='flex flex-col gap-5 flex-1'>
              <h4 className='font-bold text-lg'>Connect With Us</h4>

              <div className='flex gap-4 items-center text-gray-500'>
                <Link href='#' className='hover:text-emerald-600'>
                  <Facebook />
                </Link>

                <Link href='#' className='hover:text-emerald-600'>
                  <Twitter />
                </Link>

                <Link href='#' className='hover:text-emerald-600'>
                  <Instagram />
                </Link>

                <Link href='#' className='hover:text-emerald-600'>
                  <Mail />
                </Link>
              </div>

              <p className=' text-gray-500 '>
                Subscribe to our newsletter for eco-tips and exclusive offers.
              </p>
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-6 text-gray-500 text-center py-10'>
          <div className='h-0.5 w-full bg-gray-500 '></div>
          <span className=''>
            © 2025 GreenCart. Every purchase counts toward a cleaner, greener
            world. Made with heart and care 💚 just for you.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
