import React, {useState, useEffect} from 'react';
import './Relatedproduct.css'
import Item from '../Item/Item'

const Relatedproduct = () => {

  const [popularProducts,setPopularProducts] = useState([]);

  useEffect(()=>{
    fetch('https://zefefrpdoors-backend.onrender.com/populerinshop')
    .then((response)=>response.json())
    .then((data)=>setPopularProducts(data));
  },[])

  return (
    <div className='Relatedproduct'>
        <h1>RelatedProducts</h1>
        <hr />
        <div className="relatedproduct-item">
            {popularProducts.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            })}
        </div> 
    </div>
  )
}

export default Relatedproduct