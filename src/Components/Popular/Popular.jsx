import React, { useState, useEffect } from 'react';
import './Popular.css';
import Item from '../Item/Item';
import Skeleton from '../Skeleton/Skeleton'; // Import the Skeleton component

const Popular = () => {
  const [popularProducts, setPopularProducts] = useState([]);
  const [loading, setLoading] = useState(true); // State to track loading status

  useEffect(() => {
    fetch('https://zefefrpdoors-backend.onrender.com/populerinshop')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setPopularProducts(data);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch(error => {
        console.error('Error fetching popular products:', error);
        setLoading(false); // Stop loading on error as well
      });
  }, []);

  return (
    <div className="popular">
      <h1>Popular</h1>
      <hr />
      <div className="popular-item">
        {loading
          ? Array.from({ length: 6 }).map((_, index) => <Skeleton key={index} />)
          : popularProducts.map((item, i) => (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            ))}
      </div>
    </div>
  );
};

export default Popular;
