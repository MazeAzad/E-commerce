import React, { useContext, useEffect, useReducer, useState } from "react";
import { useProducts } from "./productContext";
import { reducer } from "../reducers/sortReducer";
import { useFilter } from "./filterContext";
const sortContext = React.createContext();

export const SortProvider = ({ children }) => {
    const { products } = useProducts();
    const [sortMode, setSortMode] = useState(false)
    const initailState = {
        sortedProducts: products,
    }
    const [state, dispatch] = useReducer(reducer, initailState)
    useEffect(() => {
        dispatch({ type: "LOADING", payload: products })
    }, [products])
    const sortFunc = (e) => {
        setSortMode(true);
        const type = e.target.value;
        dispatch({ type: type })
    }
    return <sortContext.Provider
        value=
        {
            {
                ...state,
                sortFunc,

            }
        }
    >
        {children}
    </sortContext.Provider>
}

export const useSort = () => {
    return useContext(sortContext);
}