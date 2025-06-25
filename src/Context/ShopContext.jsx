import React, { useState } from 'react'
import all_product from '../Components/Assets/all_product';
import { createContext } from 'react';

export const ShopContext = createContext(null);

const getDefaultcart = () => {
    let cart = {};
    for (let index = 0; index < all_product.length + 1; index++) {
        cart[index] = 0
        
    }

    return cart
}

const ShopContextProvider = (props) => {



    const [cartItem, setCartItem] = useState(getDefaultcart())

    const addToCart = (itemId) => {
        setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
    }

    const removeFromCart = (itemId) => {
        setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }

    const getTotalCartAmount = ()=>{
        let totalAmount = 0
        for(const item in cartItem)
        {
            if(cartItem[item]>0)
            {
                let itemInfo = all_product.find((product)=>product.id===Number(item))
                totalAmount += itemInfo.new_price * cartItem[item];

            }
        }

        return totalAmount;

    }
 
       const getTotalCartItems = ()=>{
         
        let totalItem = 0;
        for(const item in cartItem)
        {
            if(cartItem[item]>0)
            {
                totalItem += cartItem[item];
            }

        }

        return totalItem;

       }

    const contextvalue = { getTotalCartItems, getTotalCartAmount , all_product, cartItem, addToCart, removeFromCart };
    


    return (
        <ShopContext.Provider value={contextvalue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider