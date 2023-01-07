import React, { useContext, useEffect, useReducer, useState } from "react";
import { reducer } from "../reducers/cartReducer";
const cartContext = React.createContext();
export const CartProvider = ({ children }) => {


    const getInitial = () => {
        if (localStorage.getItem('carts')) {
            const items = JSON.parse(localStorage.getItem('carts'));
            return items;
        } else {
            const intialState = {
                allCarts: [],
                totalCount: 0,
                totalPrice: 0
            }
            return intialState;
        }
    }
    const [carts, setCarts] = useState(getInitial().allCarts);
    const [state, dispatch] = useReducer(reducer, getInitial());
    useEffect(() => {
        dispatch({ type: "update", payload: carts })
    }, [carts])
    useEffect(() => {
        localStorage.setItem("carts", JSON.stringify(state));
        console.log(state);
    }, [state])
    const updateCart = (obj) => {
        let item = carts.find((c) => {
            return c.id === obj.id
        })
        if (item === undefined) {
            setCarts([...carts, obj])
        } else {
            let index = carts.indexOf(item);
            carts[index] = obj;
            setCarts([...carts])
        }
    }
    const updateShopCartQuantity = (id, type) => {
        const item = carts.find((c) => {
            return c.id === id;
        })
        const index = carts.indexOf(item);
        if (type === "decrease") {
            --carts[index].count;
            carts[index].subTotal = carts[index].count * carts[index].price;
            let newArray = [];
            if (carts[index].count === 0) {
                newArray = carts.splice(index, 1);
                setCarts([...newArray])
            }
            setCarts([...carts])
        }
        else {
            ++carts[index].count;
            carts[index].subTotal = carts[index].count * carts[index].price;
            setCarts([...carts])
        }
    }
    const deleteItem = (id) => {
        let newCarts = carts.filter((cart) => {
            return cart.id !== id;
        })
        setCarts([...newCarts]);
    }
    const clearList = () => {
        setCarts([]);
        dispatch({ type: "CLEAR" });
    }
    return <cartContext.Provider
        value={
            {
                carts,
                updateCart,
                ...state,
                updateShopCartQuantity,
                deleteItem,
                clearList

            }
        }
    >
        {children}
    </cartContext.Provider>
}

export const useCart = () => {
    return useContext(cartContext);
}