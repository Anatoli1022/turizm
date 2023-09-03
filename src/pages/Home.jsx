import React from 'react';

import { Outlet } from 'react-router-dom';
import Hero from '../components/page/home/hero/Hero';
import Product from '../components/page/home/product/Product';
import AboutUs from '../components/page/home/aboutUs/AboutUs';
import Questions from '../components/page/home/questions/Questions';

const Home = () => {
  return (
    <>
      <Hero />
      <Product />
      <AboutUs />
      <Questions />
      <Outlet />
    </>
  );
};

export default Home;
