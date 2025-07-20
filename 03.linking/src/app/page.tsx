import Link from 'next/link';

const Home = () => {
  return (
    <div className='h-screen bg-gray-200 text-gray-900 p-6'>
      <div className='flex flex-col justify-center items-center gap-10'>
        <h1 className='text-4xl font-bold'>
          Welcome to Linking Demo -{' '}
          <span className='bg-gradient-to-tr from-green-300 to-blue-400 bg-clip-text text-transparent'>
            Aryan Saud
          </span>
        </h1>

        <div className='flex  flex-col gap-2'>
          <h3 className='text-3xl font-semibold'>
            &#x1F517; Linking Demo in Next.js
          </h3>

          <ul className='leading-10 ml-10 list-disc '>
            <li>
              This is a simple demo to practice how the{' '}
              <span className='font-bold text-blue-800'>Link</span> component
              works in Next.js.
            </li>
            <li>
              It covers basic internal navigation between pages like{' '}
              <span className='underline decoration-blue-600'>/dashboard</span>{' '}
              ,{' '}
              <span className='underline decoration-blue-600'>
                /dashboard/profile
              </span>{' '}
              , etc.
            </li>
            <li>
              Uses the built-in <code className='bg-white p-2 rounded-xs '>next/link</code> component for client-side
              transitions.
            </li>
            <li>
              Helps understand how navigation in Single Page Applications (SPA)
              works without full page reloads.
            </li>
          </ul>
        </div>

        <Link
          href='dashboard'
          className='bg-white p-3 rounded-sm hover:bg-blue-300 hover:text-white transition-colors duration-200 shadow-xs outline-none'
        >
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
};
export default Home;
