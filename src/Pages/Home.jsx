import React, { useState, useEffect } from 'react';
import Hero from '../Components/Hero/Hero';
import Popular from '../Components/Popular/Popular';
import Offers from '../Components/Offers/Offers';
import NewCollections from '../Components/NewCollection/NewCollections';
import NewsLatter from '../Components/NewsLetter/NewsLatter';
import Allproductshow from '../Components/Allproductshow/Allproductshow';
import Popup from '../Components/Popup/Popup';

const Home = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem('hasSeenPopup');
    const popupTimestamp = localStorage.getItem('popupTimestamp');
    const currentTime = new Date().getTime();

    // Check if the popup was seen more than an hour ago 
    if (popupTimestamp && currentTime - popupTimestamp > 3600000) {
      localStorage.removeItem('hasSeenPopup');
      localStorage.removeItem('popupTimestamp');
    }

    // If the popup hasn't been seen or was removed due to the timestamp
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsPopupOpen(true);
        localStorage.setItem('hasSeenPopup', 'true');
        localStorage.setItem('popupTimestamp', currentTime.toString());
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  const closePopup = () => setIsPopupOpen(false);

  return (
    <div>
      <Hero />
      <Allproductshow />
      <Popular />
      <Offers />
      <NewCollections />
      <NewsLatter />
      <Popup isOpen={isPopupOpen} onClose={closePopup} />
    </div>
  );
};

export default Home;
