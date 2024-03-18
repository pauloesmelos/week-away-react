import React from 'react';
import Topbar from '../components/topbar/Topbar';
import Navbar from '../components/navbar/Navbar';
import Hero from '../components/hero/Hero';
import Activies from '../components/activies/Activies';
import Search from '../components/search-destiny/Search';
import Gallery from '../components/gallery/Gallery';
import Contact from '../components/contact/Contact';

const Home = () => {
  return (
    <>
        <Topbar />
        <Navbar />
        <Hero />
        <Activies />
        <Search />
        <Gallery />
        <Contact />
    </>
  )
}

export default Home;