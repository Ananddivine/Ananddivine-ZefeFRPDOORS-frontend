import React, {useState, useEffect} from 'react';
import './css/Products.css';
import Item from '../Components/Item/Item'


const Products = () => {

    const [new_collection,setNew_collections] = useState([]);
    const [popularProducts,setPopularProducts] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:4000/newcollections')
    .then((response)=>response.json())
    .then((data)=>setNew_collections(data));
  },[])



  useEffect(()=>{
    fetch('http://localhost:4000/populerinshop')
    .then((response)=>response.json())
    .then((data)=>setPopularProducts(data));
  },[])

  return (
    <div className='Products'>
            <h1>New Collections</h1>    
      <hr/>
      <div className="collections">
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