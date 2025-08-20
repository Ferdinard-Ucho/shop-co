import { Button } from '@/components/ui/button';
import React from 'react';
import { HeaderFont } from '@/lib/font';
import Navbar from '@/components/pages/shared/navbar';
import Hero from '@/components/pages/home/hero';
import Brands from '@/components/pages/home/brands';
import NewArrivals from '@/components/pages/home/new-arrivals'; 
import TopSelling from '@/components/pages/home/top-selling';
import BrowseStyles from '@/components/pages/home/browse-styles';
import Reviews from '@/components/pages/home/reviews';
import Footer from '@/components/pages/shared/footer';
const Home = () => {
  return( 
  <div>
    <Navbar/>
    <Hero/>
    <Brands/>
    <NewArrivals/>
    <TopSelling />
    <BrowseStyles/>
    <Reviews/>
    <Footer/> 
  </div>
  )
};

export default Home;