import { createContext, useContext, useReducer, useState } from "react";

const cartContext = createContext(null);
const initialState = [];

const cartReducer = (state, action) => {
    
    switch (action.type) {
      case 'ADD_TO_CART': {
        const existingProduct = state.find((item) => item._id === action.payload._id);
  
        if (existingProduct) {
          return state.map((item) =>
            item._id === action.payload._id ? { ...item, quantity: item.quantity + 1 } : item
          );
        } else {
          return [...state, { ...action.payload, quantity: 1 }];
        }
        }
        case 'REMOVE_FROM_CART': {
            const id = action.payload._id;
            return state.filter((item) =>
                item._id !== id
            )
        }
        case 'CANCEL_ALL_ITEMS': {
            return [];
            }
        default:
            return state;
    }
  };

export const ContextProvider = ({ children }) => {
  
  const [cartState, dispatch] = useReducer(cartReducer, initialState);
  return (
    <cartContext.Provider value={{ cartState,dispatch }}>
      {children}
    </cartContext.Provider>
  );
};
export const useCartContext = () => {
  return useContext(cartContext);
};
