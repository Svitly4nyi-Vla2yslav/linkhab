import { Global } from '@emotion/react';
import GlobalStyles, { GlobalContainer } from './App.styled';
import React from 'react';
import Header from './components/Header/Header';

import ParticlesBackground from './components/StarrySky/StarrySky';
import { GradientWrapper } from './components/StarrySky/GradientBackground';
import Hero from './components/Hero/Hero';
import About from './components/WhatWeDo/About';
import Partners from './components/PartnersBanner/Banner';
import Services from './components/OurServices/Services';
import OurWork from './components/OurWork/OurWork';
import FAQ from './components/FAQ/FAQ';
import ContactUs from './components/ContactUs/ContactUs';
import Footer from './components/Footer/Footer';
import BackgroundImage from './components/Hero/BackgroundImage';
import CookieBanner from './components/CookieBanner/CookieBanner';
const App = () => {
  return (
    <GlobalContainer>
      <GradientWrapper />
      <ParticlesBackground />
      <GlobalStyles />
      <Header />
      <BackgroundImage />
      <Hero />
      <About />
      <Partners />
      <Services />
      <OurWork />
      <FAQ />
      <ContactUs />
      <Footer />
      <CookieBanner />
    </GlobalContainer>
  );
};

export default App;
