import Link from 'next/link';

const Users = () => {
  const users = [1, 2, 3, 4, 5, 6];
  return (
    <div className='h-screen bg-gray-200 text-gray-900 p-6'>
      <div className='flex flex-col gap-10 items-center justify-center'>
        <h1 className='text-4xl font-bold'>Users</h1>
        <div className='flex = ( flex-col gap-3 '>
          {users.map((user) => (
            <Link href={`/users/${user}`} key={user}>
              user{user}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Users;
