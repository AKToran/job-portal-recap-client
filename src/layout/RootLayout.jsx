import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../pages/Shared/Footer';
import Navbar from '../pages/Shared/Navbar';

const RootLayout = () => {
  return (
    <div>
      <Navbar/>

      <Outlet></Outlet>

      <Footer/>
    </div>
  );
};

export default RootLayout;