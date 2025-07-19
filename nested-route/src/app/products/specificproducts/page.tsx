import Link from 'next/link';

const SpecificProduct = () => {
  return (
    <div className='h-screen bg-gray-200 text-gray-900 p-6'>
      <div className='flex flex-col gap-10 items-center'>
        <h1 className='text-4xl font-bold'>Specific Product</h1>

        <div className='flex gap-2 flex-col '>
          <p className='text-gray-500'>
            This is a specific product details among all product
          </p>

          <Link
            href='allproducts'
            className='bg-white py-2 rounded-full text-center hover:bg-blue-100 hover:text-blue-600 transition-colors duration-200'
          >
            Back to All products
          </Link>
        </div>
      </div>
    </div>
  );
};
export default SpecificProduct;
