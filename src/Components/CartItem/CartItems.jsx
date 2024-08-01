import React, { useContext } from 'react'
import './CartItems.css'
import { HomeContext } from '../../Context/HomeContext'
import remove_icon from '../Assets/cart_cross_icon.png'


const CartItems = () => {
  const {getTotalCartAmount,all_product,cartItems,removeFromCart} = useContext(HomeContext);
  return (
    <div className='CartItems'>
    <div className="cartitems-format-main">
      <p>Products</p>
      <p>Title</p>
      <p>Price</p>
      <p>Quantity</p>
      <p>Total</p>
      <p>Remove</p> 
    </div>
    <hr />
   {all_product.map((e)=>{
     if(cartItems[e.id]>0)
     {
      return <div>
      <div className='cartitems-format cartitems-format-main'>
       <img src={e.image} alt="" className='carticon-product-icon' />
       <p>{e.name}</p>
       <p>${e.new_price}</p>
       <button className='cartitems-quantitiy'>{cartItems[e.id]}</button>
       <p>${e.new_price*cartItems[e.id]}</p>
       <img className='cartitem-remove-icon' src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" />
      </div>
      <hr />
       
   </div>
     }
     return null;
   })}
   <div className='cartitems-down'>
   <div className='cartitems-total'>
    <h1>Cart Totals</h1>
    <div>
      <div className="cartitem-total-item">
  <p>Subtotal</p>
  <p>${getTotalCartAmount()}</p>
      </div>
   
      <div className='cartitem-total-item'>
  <p>Shipping Fee</p>
  <p>Free</p>
      </div>
     
      <div className='cartitem-total-item'>
        <h3>Total</h3>
        <h3>${getTotalCartAmount()}</h3>
      </div>
    </div>
    <button>Procced to checkout</button>
   </div>
   <div className='cartitems-promocode'>
    <p>If you have Promo code, Enter it here</p>
    <div className="promobox">
      <input type="text" placeholder='Promo code' />
      <button>Submit</button>
    </div>
   </div>

   </div>
    </div>
  )
}

export default CartItems