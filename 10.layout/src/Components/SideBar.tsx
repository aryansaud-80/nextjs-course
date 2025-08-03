const SideBar = () => {
  return (
    <div className='w-82 bg-white h-screen border-r border-gray-500 shadow-md p-10'>
      <div className='flex flex-col gap-10 text-lg'>
        <span className='text-blue-500 hover:bg-blue-50 text-center py-2 cursor-pointer'>
          Technology
        </span>
        <span className='text-blue-500 hover:bg-blue-50 text-center py-2 cursor-pointer'>
          Design
        </span>
        <span className='text-blue-500 hover:bg-blue-50 text-center py-2 cursor-pointer'>
          Business
        </span>
      </div>
    </div>
  );
};
export default SideBar;
