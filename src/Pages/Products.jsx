import React, {useState, useEffect} from 'react';
import './css/Products.css';
import Item from '../Components/Item/Item'


const Products = () => {

    const [new_collection,setNew_collections] = useState([]);
    const [popularProducts,setPopularProducts] = useState([]);

  useEffect(()=>{
    fetch('https://zefefrpdoors-backend.onrender.com/newcollections')
    .then((response)=>response.json())
    .then((data)=>setNew_collections(data));
  },[])



  useEffect(()=>{
    fetch('https://zefefrpdoors-backend.onrender.com/populerinshop')
    .then((response)=>response.json())
    .then((data)=>setPopularProducts(data));
  },[])

  return (
    <div className='new-collections'>
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

      <div className="relatedproduct-item">
            {popularProducts.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            })}
        </div> 

    </div>
    
  )
}

export default Products