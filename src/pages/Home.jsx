import React from 'react';

import { Outlet } from 'react-router-dom';
import Hero from '../components/page/home/hero/Hero';
import Product from '../components/page/home/product/Product';

const Home = () => {
  return (
    <>
      <Hero />
      <Product />
      <Outlet />
    </>
  );
};

export default Home;
