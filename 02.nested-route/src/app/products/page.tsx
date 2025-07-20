import Link from 'next/link';

const Product = () => {
  return (
    <div className='flex gap-3 flex-col h-screen bg-gray-200 text-gray-900 p-6 relative'>
      <h1 className='text-4xl font-bold text-center'>Product Page</h1>

      <div className='flex gap-10 mt-10 self-center bg-white px-5 py-2  rounded-md shadow-md'>
        <Link className='hover:text-blue-300' href='products/allproducts'>
          allProducts
        </Link>
        <Link className='hover:text-blue-300' href='products/specificproducts'>
          specificProducts
        </Link>
      </div>


          <Link
            href='/'
            className='bg-white py-2 rounded-full text-center hover:bg-blue-100 hover:text-blue-600 transition-colors duration-200 self-center px-6 absolute left-10 top-10'
          >
            Back to Home
          </Link>
    </div>
  );
};
export default Product;
