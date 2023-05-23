import React from 'react';
const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  products:[],
  addItem: (item) => {},
  removeItem: (id) => {},
  increment: () => {},
  decrement:()=> {},
  
});



export default CartContext;