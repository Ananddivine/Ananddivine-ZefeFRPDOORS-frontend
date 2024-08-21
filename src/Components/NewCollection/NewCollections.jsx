import React, { useEffect, useState } from 'react';
import './NewCollections.css';
import Item from '../Item/Item';

const NewCollections = () => {
  const [new_collection,setNew_collections] = useState([]);

  useEffect(()=>{
    fetch('https://zefefrpdoors-backend.onrender.com/newcollections')
    .then((response)=>response.json())
    .then((data)=>setNew_collections(data));
  },[])

  return (
    <div className="new-collections">
      <h1>New Collections</h1>    
      <hr/>
      <div className="collections-item">
        {new_collection.map((item, i) => (
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
}

export default NewCollections;
