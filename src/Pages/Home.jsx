import React from 'react';
import Hero from '../Components/Hero/Hero';
import Popular from '../Components/Popular/Popular';
import Offers from '../Components/Offers/Offers';
import NewCollections from '../Components/NewCollection/NewCollections';
import NewsLatter from '../Components/NewsLetter/NewsLatter';

const Home = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NewCollections />
      <NewsLatter />
    </div>
  );
};

export default Home;
