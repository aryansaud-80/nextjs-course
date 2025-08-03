import React from 'react';
import './globals.css';
import Header from '@/Components/Header';
import Footer from '@/Components/Footer';
import SideBar from '@/Components/SideBar';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <body className='bg-gray-200 min-h-screen'>
        <Header />
        <div className='h-screen'>
          <div className='flex gap-10'>
            <SideBar />
            <main className='w-full items-center justify-center flex '>
              {children}
            </main>
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
