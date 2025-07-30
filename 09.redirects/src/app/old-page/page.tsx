'use client';

import { redirect } from 'next/navigation';

const OldPage = () => {
  redirect('/new-page');
};
export default OldPage;
