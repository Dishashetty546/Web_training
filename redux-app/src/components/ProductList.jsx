import { useDispatch } from "react-redux";
import { addToCart } from  "../newone/Action.js"
const products = [
  {
    id: 150,
    name: 'SAMSUNG',
    price: 223467
  },
  {
    id: 151,
    name: 'IPHONE',
    price: 223467
  },
  {
    id: 152,
    name: 'IPHONE 16',
    price: 223467
  }
];

function ProductList() {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product)); 
  };

  return (
    <div>
      <h2>Products:</h2>
      {products.map((product) => (
        <div key={product.id} style={{ marginBottom: '10px' }}>
          <span>{product.name} :: {product.price}</span>
          <button
            style={{ marginBottom: '10px'}}
            onClick={() => handleAddToCart(product)}
          >
            ADD TO CART
          </button>
     
        </div>
      ))}
    </div>
  );
}

export default ProductList;
