'use client';

import { useRouter } from 'next/navigation';

const About = () => {
  const router = useRouter();
  const navigate = () => {
    router.back();
  };
  return (
    <div className=' bg-gray-200 text-gray-900 p-6'>
      <div className='flex flex-col gap-10  mx-10'>
        <button
          className='bg-white px-10 py-2 hover:bg-blue-300 hover:text-white shadow-sm transition-colors duration-200 rounded-md self-start cursor-pointer'
          onClick={navigate}
        >
          Go Back
        </button>
        <div className='flex flex-col gap-10'>
          <h1 className='text-lg font-bold'>
            <span className='bg-white p-3 font-normal'>useRouter</span> -
            Next.js Hook
          </h1>

          <div className=' flex flex-col gap-3 '>
            <h3 className='font-bold text-2xl'>Used to:</h3>

            <ul className='list-disc ml-10 leading-relaxed'>
              <li>Get current route info</li>
              <li>Navigate programmatically</li>
              <li>Access query parameters</li>
            </ul>
          </div>
        </div>

        <div className='flex flex-col gap-5'>
          <h4 className='text-xl font-bold'>Import</h4>
          <code className='text-blue-800 bg-gray-900 p-6 rounded-md'>
            import <span className='text-white'>{'useRouter'}</span> from{' '}
            <span className='text-green-800'>'next/router'</span>;
          </code>
        </div>

        <div className='flex flex-col gap-5'>
          <h4 className='text-xl font-bold'>Syntax & Usage</h4>
          <code className='text-white bg-gray-900 p-6 rounded-md flex flex-col gap-10'>
            <div>
              <span className='text-blue-800'>const</span> router ={' '}
              <span className='text-red-800'>useRouter</span>();
            </div>

            <div className='flex flex-col gap-1'>
              <div>
                router.<span className='text-red-800'>push</span>(
                <span className='text-green-800'>'/about'</span>);{' '}
                <span className='text-gray-600 ml-10'>
                  //Navigate to /about
                </span>
              </div>
              <div>
                router.<span className='text-red-800'>replace</span>(
                <span className='text-green-800'>'/login'</span>);{' '}
                <span className='text-gray-600 ml-10'>
                  //Replace current route
                </span>
              </div>

              <div>
                router.<span className='text-red-800'>back</span>();{' '}
                <span className='text-gray-600 ml-10'>//Go back</span>
              </div>
            </div>

            <div className='flex flex-col gap-1'>
              <div>
                router.pathname{' '}
                <span className='text-gray-600 ml-10'>
                  //Current path (eg: /home)
                </span>
              </div>

              <div>
                router.query{' '}
                <span className='text-gray-600 ml-10'>
                  //URL query params (eg: ?id=1)
                </span>
              </div>

              <div>
                router.asPath{' '}
                <span className='text-gray-600 ml-10'>
                  //Full path with query (eg: /post/1?ref=home)
                </span>
              </div>
            </div>
          </code>
        </div>
      </div>
    </div>
  );
};
export default About;
