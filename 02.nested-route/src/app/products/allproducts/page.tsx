import Link from 'next/link';

const AllProducts = () => {
  return (
    <div className='h-screen bg-gray-200 text-gray-900 p-6'>
      <div className='text-center flex items-center flex-col gap-10'>
        <h1 className='text-4xl font-bold'>All Products</h1>

        <ul className='flex gap-10'>
          <Link
            href='/products/specificproducts'
            className='bg-white p-6 rounded-sm shadow-md hover:shadow-lg transition-shadow duration-200'
          >
            <li>Product 1</li>
          </Link>

          <Link
            href='/products/specificproducts'
            className='bg-white p-6 rounded-sm shadow-md hover:shadow-lg transition-shadow duration-200'
          >
            <li>Product 2</li>
          </Link>

          <Link
            href='/products/specificproducts'
            className='bg-white p-6 rounded-sm shadow-md hover:shadow-lg transition-shadow duration-200'
          >
            <li>Product 3</li>
          </Link>

          <Link
            href='/products/specificproducts'
            className='bg-white p-6 rounded-sm shadow-md hover:shadow-lg transition-shadow duration-200'
          >
            <li>Product 4</li>
          </Link>

          <Link
            href='/products/specificproducts'
            className='bg-white p-6 rounded-sm shadow-md hover:shadow-lg transition-shadow duration-200'
          >
            <li>Product 5 </li>
          </Link>
        </ul>

        <Link
          href='/products'
          className='bg-white py-2 rounded-full text-center hover:bg-blue-100 hover:text-blue-600 transition-colors duration-200 px-6'
        >
          Back to  products
        </Link>
      </div>
    </div>
  );
};
export default AllProducts;
