import React, { useContext } from 'react'
import './Productdisply.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { HomeContext } from '../../Context/HomeContext'

const Productdisply = (props) => {
    const {product} = props;
    const {addToCart} = useContext(HomeContext)
  return (
    <div className='Productdisply'>
        <div className="product-display-left">
         <div className="productdisplay-img-list">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
         </div>
         <div className="productdisplay-img">
         <img className='productdisplay-main-img' src={product.image} alt="" />
         </div>
        </div>
        <div className="product-displayright">
         <h1>{product.name}</h1>
         <div className="productdisplay-right-stars">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
            <p>(122)</p>
         </div>
         <div className="productdisplay-right-prices">
            <div className="productdisplay-right-prices-old">${product.old_price}</div>
            <div className="productdisplay-right-prices-new">${product.new_price}</div>
         </div>
         <div className="productdisplay-right-discription">
            soidfhlasmofi aosdi efjpoij ifdjapoi    
         </div>
         <div className="productdisplay-right-size">
            <h1>Select Size</h1>
            <div className="productdisplay-right-sizes">
                <div>Small</div>
                <div>Midium</div>
                <div>Larg</div>
                <div>XL</div>
                <div>XXL</div>
            </div>
         </div>
         <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
            <p className="productdisplay-right-category"><span>Category :</span> Examples, something, eles</p>
            <p className="productdisplay-right-category"><span>Category :</span> Examples, something, eles</p>
        </div>
    </div>
  )     
}

export default Productdisply