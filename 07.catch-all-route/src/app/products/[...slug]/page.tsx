const Product = ({ params }: { params: { slug: string[] } }) => {
  const { slug } = params;
  return (
    <div className='bg-gray-100 text-gray-900 min-h-screen flex flex-col items-center p-10 gap-10'>
      <div>{`Products id: ${slug.join('_')}`}</div>

      <div className="flex flex-col gap-2">
        {slug.map((val, i) => (
          <div
            className='bg-white border border-gray-200 rounded-md shadow-md p-2 cursor-pointer'
            key={i}
          >
            Product: {val}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Product;
