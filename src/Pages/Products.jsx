import React, {useState, useEffect} from 'react';
import './css/Products.css';
import Item from '../Components/Item/Item'
import Skeleton from '../Components/Skeleton/Skeleton';


const Products = () => {

    const [new_collection,setNew_collections] = useState([]); 
    const [popularProducts,setPopularProducts] = useState([]);
    const [loading, setLoading] = useState(true); 

  useEffect(()=>{
    fetch('https://zefefrpdoors-backend.onrender.com/newcollections')
    .then((response)=>response.json())
    .then((data)=>setNew_collections(data));
  },[])


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
    <div className='new-collections'>
            <h1>New Collections</h1>    
      <hr/>
      <div className="collections-item">
        {loading
        ? Array.from({ length: 8 }).map((_, index) => <Skeleton key={index} />)        
        :new_collection.map((item, i) => (
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