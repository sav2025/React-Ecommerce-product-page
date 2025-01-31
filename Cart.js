javascript
CopyEdit
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, updateQuantity } from '../redux/actions/cartActions';

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleQuantityChange = (productId, quantity) => {
    dispatch(updateQuantity(productId, quantity));
  };

  const totalCost = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <h3>{item.name}</h3>
          <p>${item.price}</p>
          <input
            type="number"
            value={item.quantity}
            onChange={(e) => handleQuantityChange(item.id, e.target.value)}
          />
          <button onClick={() => handleRemove(item.id)}>Remove</button>
        </div>
      ))}
      <div className="total-cost">
        <h3>Total: ${totalCost}</h3>
      </div>
    </div>
  );
};

export default Cart;
