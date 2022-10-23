import React, { useEffect } from 'react';
import About from './About/About';
import './app.scss'
import Cards from './Cards/Cards';
import DigitalService from './DigitalService/DigitalService';
import Header from './Header/Header';
import Nav from './Nav/Nav';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      <Nav />
      <Header />
      <About />
      <DigitalService />
      <Cards />
    </>
  );
}
