'use client';
import { redirect } from 'next/navigation';

const NonExistingPage = () => {
  redirect('/not-found');
};
export default NonExistingPage;
