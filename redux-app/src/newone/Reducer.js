const initialState = {
  cart: {
    cartItems: [],
    totalPrice: 0,
  },
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existingItem = state.cart.cartItems.find(
        item => item.id === action.payload.id
      );

      let updatedCartItems;

      if (existingItem) {
        updatedCartItems = state.cart.cartItems.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        updatedCartItems = [
          ...state.cart.cartItems,
          { ...action.payload, quantity: 1 },
        ];
      }

      const updatedTotalPrice = updatedCartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );

      return {
        ...state,
        cart: {
          cartItems: updatedCartItems,
          totalPrice: updatedTotalPrice,
        },
      };
    }

    case "REMOVE_FROM_CART": {
      const updatedCartItems = state.cart.cartItems.filter(
        item => item.id !== action.payload
      );

      const updatedTotalPrice = updatedCartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );

      return {
        ...state,
        cart: {
          cartItems: updatedCartItems,
          totalPrice: updatedTotalPrice,
        },
      };
    }

    case "DECREASE_QUANTITY": {
      const updatedCartItems = state.cart.cartItems
        .map(item =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0);

      const updatedTotalPrice = updatedCartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );

      return {
        ...state,
        cart: {
          cartItems: updatedCartItems,
          totalPrice: updatedTotalPrice,
        },
      };
    }

    default:
      return state;
  }
};

export default cartReducer;
