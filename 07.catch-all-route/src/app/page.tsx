const Home = () => {
  return (
    <section className='bg-gray-100 text-gray-900 text-center text-4xl font-bold flex items-center justify-center flex-col min-h-screen gap-10'>
      <h1>Hey! This is Catch All Route Practice</h1>

      <p className='text-gary-500 text-2xl '>
        Try route{' '}
        <span className='text-red-600 text-lg font-medium ml-2'>
          /products/..../...../....
        </span>
      </p>
    </section>
  );
};
export default Home;
