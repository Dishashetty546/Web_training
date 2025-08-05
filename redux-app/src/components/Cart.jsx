import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, decreaseQuantity } from "../newone/Action.js";

function Cart() {
  const dispatch = useDispatch();

  const cartItems = useSelector(state => state.cart?.cartItems ?? []);
  const totalPrice = useSelector(state => state.cart?.totalPrice ?? 0);

  return (
    <div>
      <h2>Cart</h2>
      {cartItems.length === 0 && <p>Cart is empty</p>}
      {cartItems.map(item => (
        <div key={item.id} style={{ marginBottom: "10px" }}>
          <span>{item.name} - ${item.price} x {item.quantity}</span>
          <button
            onClick={() => dispatch(decreaseQuantity(item.id))}
            style={{ marginLeft: "10px" }}
          >
            -
          </button>
          <button
            onClick={() => dispatch(removeFromCart(item.id))}
            style={{ marginLeft: "10px" }}
          >
            Remove
          </button>
        </div>
      ))}
      <h3>Total: ${totalPrice}</h3>
    </div>
  );
}

export default Cart;
