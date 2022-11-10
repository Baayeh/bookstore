import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Layout = () => (
  <div>
    <Navbar />
    <main>
      <Outlet />
    </main>
  </div>
);

export default Layout;
