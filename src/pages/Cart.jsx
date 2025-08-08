
import { Link } from "react-router-dom";
import "./CartPage.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {actionCreators} from '../state/index';

export default function CartPage() {


  const dispatch = useDispatch();


 const cart = useSelector((state) => state.items);
console.log("Items in CartPage:", cart);
let NumberOfItems = 0;

   if (cart && cart.length > 0) {
  NumberOfItems = cart.length;
} else {
  NumberOfItems = 0;
}
   console.log("Number of items in cart:", NumberOfItems);





  const totalPrice = cart && cart.length > 0
  ? cart.reduce((total, item) => total + (item.price * (item.quantity || 1)), 0)
  : 0;

console.log("Total price:", totalPrice);


  const handleIncrease = (id) => {
  dispatch(actionCreators.increasequantity(id));
};

const handleDecrease = (id) => {
  dispatch(actionCreators.decreasequantity(id));
};



    const handleRemove = (id) => {
      console.log("Removing item with id:", id);
    dispatch(actionCreators.removefromcart(id));
  }
  


  return (
    <div className="cart-page">
      <h2>Shopping Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty. <Link to="/products">Start shopping</Link>.</p>
      ) : (
        <>
          <p>Total Plants: {NumberOfItems}</p>

          <p>Total Cost: ${totalPrice.toFixed(2)}</p>

          <div className="cart-items">
            {cart.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} />
                <div className="item-details">
                  <h4>{item.name}</h4>
                  <p>Price: ${item.price}</p>
                  <p>Quantity: {item.quantity}</p>

                  <div className="cart-actions">
                    <button onClick={() => handleIncrease(item.id)}>+</button>
                    <button onClick={() => handleDecrease(item.id)} disabled={item.quantity <= 1}>
                      −
                    </button>
                    <button onClick={() => handleRemove(item.id)}>Delete</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-buttons">
            <button className="checkout-btn" onClick={() => alert("Checkout Coming Soon")}>
              Checkout
            </button>
            <Link to="/products" className="continue-btn">
              Continue Shopping
            </Link>
          </div>
        </>
      )}
    </div>
  );

}
