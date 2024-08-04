import React, { useContext, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import './CartItems.css';
import { HomeContext } from '../../Context/HomeContext';
import remove_icon from '../Assets/cart_cross_icon.png';

const CartItems = () => {
  const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(HomeContext);
  const navigate = useNavigate();

  const handleCheckout = () => {
    const products = all_product.filter(product => cartItems[product.id] > 0).map(product => ({
      id: product.id,
      name: product.name,
      new_price: product.new_price,
      description: product.description,
      quantity: cartItems[product.id]  // Include quantity
    }));
    localStorage.setItem('checkout-products', JSON.stringify(products));
    navigate('/progress');
  };

  const totalCartAmount = useMemo(() => getTotalCartAmount(), [cartItems, all_product]);

  if (all_product.length === 0 || Object.keys(cartItems).length === 0) {
    return <div>Loading...</div>;
  }

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
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className='cartitems-format cartitems-format-main'>
                <img src={e.image} alt="" className='carticon-product-icon' />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className='cartitems-quantitiy'>{cartItems[e.id]}</button>
                <p>${e.new_price * cartItems[e.id]}</p>
                <img className='cartitem-remove-icon' src={remove_icon} onClick={() => removeFromCart(e.id)} alt="" />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className='cartitems-down'>
        <div className='cartitems-total'>
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitem-total-item">
              <p>Subtotal</p>
              <p>${totalCartAmount}</p>
            </div>
            <div className='cartitem-total-item'>
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <div className='cartitem-total-item'>
              <h3>Total</h3>
              <h3>${totalCartAmount}</h3>
            </div>
          </div>
          <button onClick={handleCheckout}>Proceed to checkout</button>
        </div>
        <div className='cartitems-promocode'>
          <p>If you have a Promo code, enter it here</p>
          <div className="promobox">
            <input type="text" placeholder="Promo code" />
            <button>Apply</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
