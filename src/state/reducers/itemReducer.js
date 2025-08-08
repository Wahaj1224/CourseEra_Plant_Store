
const reducer = (state = [], action) => {
  switch (action.type) {
    case "add_to_cart":
      return [...state, action.payload];
    case "remove_from_cart":
      return state.filter(item => item.id !== action.payload);

    case "increase_quantity":
      return state.map(item =>
        item.id === action.payload
          ? { ...item, quantity: (item.quantity || 1) + 1 }
          : item
      );

    case "decrease_quantity":
      return state.map(item =>
        item.id === action.payload && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );

    
    case "update_cart":
      return state.map(item =>
        item.id === action.payload.id ? { ...item, ...action.payload } : item
      );
    default:
      return state;
  }
}
export default reducer;