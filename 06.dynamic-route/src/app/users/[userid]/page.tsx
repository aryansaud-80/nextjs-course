'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const UserDetail = async ({ params }: { params: { userid: string } }) => {
  const { userid } = await params;
  const users = [1, 2, 3, 4, 5, 6];
  const router = useRouter();

  useEffect(() => {
    if (!users.includes(Number(userid))) {
      router.back();
    }
  }, [userid, router]);

  return (
    <div className='bg-gray-200 h-screen text-gray-900 p-6 text-center text-3xl'>
      User Profile: {userid}
    </div>
  );
};
export default UserDetail;
