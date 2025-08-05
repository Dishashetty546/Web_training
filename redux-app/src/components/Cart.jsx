import { useSelector } from "react-redux";

function Cart() {
  const cartItems = useSelector(state => state.cart);

  return (
    <div>
      <h2>Cart Page</h2>
      {cartItems.length === 0 && <p>Cart is Empty</p>}
      {cartItems.length > 0 && (
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              {item.name} - {item.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
