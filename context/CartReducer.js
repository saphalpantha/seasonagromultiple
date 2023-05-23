import CartContext from "./cartContext"
import { useReducer } from "react"
import { products } from "../data/products"

const defaultState = {
  items:[],
  totalAmount:0,
}


const defaultProductState = {
  products:products,
}

const CartReducer =  (state, action) => {
  if(action.type === 'ADD_TO_CART'){

    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.qty;
    const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id)

    const existingCartItem = state.items[existingCartItemIndex];

    let updatedItems;
    if(existingCartItem){
      const updatedItem = {
        ...existingCartItem,amount:existingCartItem.amount + action.item.amount
        }
        
        updatedItems = [...state.items];
        updatedItems[existingCartItem] = updatedItem
        
      }
      
      else{
        updatedItems = state.items.concat(action.item);
      }


      
      return {
        items:updatedItems,
        totalAmount:updatedTotalAmount
      }
    }

    else if(action.type === 'INCREMENT'){
      const existingCartItemIndex = state.items.findIndex(item => item.id === action.id);
      const existingCartItem = state.items[existingCartItemIndex];
      const updatedItem = {
        ...existingCartItem,
        qty: existingCartItem.qty + 1,
        amount: existingCartItem.amount + existingCartItem.price
      };
      const updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
      const updatedTotalAmount = state.totalAmount + existingCartItem.price;
  
      return{
        items:updatedItems,
        totalAmount:updatedTotalAmount
    
      }
      
    }

    else if(action.type === 'DECREMENT'){
      const existingCartItemIndex = state.items.findIndex(item => item.id === action.id);
      const existingCartItem = state.items[existingCartItemIndex];
      let updatedItems;
      if(existingCartItem.qty === 1){
        updatedItems = state.items.filter(item => item.id !== action.id);
      } else {
        const updatedItem = {
          ...existingCartItem,
          qty: existingCartItem.qty - 1,
          amount: existingCartItem.amount - existingCartItem.price
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      }
      const updatedTotalAmount = state.totalAmount - existingCartItem.price;
  
      return{
        items:updatedItems,
        totalAmount:updatedTotalAmount
      }
    }

    else if (action.type === 'REMOVE_FROM_CART') {
      const existingCartItemIndex = state.items.findIndex(item => item.id === action.id);
      const existingCartItem = state.items[existingCartItemIndex];
      const updatedTotalAmount = state.totalAmount - existingCartItem.price * existingCartItem.qty;
      let updatedItems;
      if (existingCartItem.qty === 1) {
        updatedItems = state.items.filter(item => item.id !== action.id);
      } else {
        const updatedItem = { ...existingCartItem, qty: existingCartItem.qty - 1 };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      }
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount
      };

    }
  return defaultState
}

const ProductReducer = (state, action) => {
  return state
}


const CartProvider = (props) => {

  const [state, dispatch ] =  useReducer(CartReducer, defaultState);
  const [productstate, dispatchProduct ] =  useReducer(ProductReducer,defaultProductState);


  const addItem = (item) => {
    dispatch({type:'ADD_TO_CART',item:item})
  }
  
  const removeItem = (id) => {
    dispatch({type:'REMOVE_FROM_CART',id:id})

  }

  const increment = (id) => {
    dispatch({type:'INCREMENT', id:id});
  }

  const decrement = (id) => {
    dispatch({type:'DECREMENT', id:id});
  }

  const cartContext = {
    items: state.items,
    totalAmount: state.totalAmount,
    products:productstate.products,
    addItem,
    removeItem,
    increment,
    decrement,
  }




  return <CartContext.Provider value={cartContext}>
      {props.children}
</CartContext.Provider>
}


export default CartProvider;
