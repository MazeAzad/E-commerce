import React, { useContext, useEffect, useReducer, useState } from "react";

import { useProducts } from "./productContext";
const filterContext = React.createContext();
import { reducer } from "../reducers/filterReducer";
import { useSort } from "./sortContext";
export const FilterProvider = ({ children }) => {
    const { sortedProducts } = useSort();
    const { maxPrice, loading } = useProducts();
    const [filterObject, setfilterObject]
        = useState(
            {
                name: "",
                category: "all",
                color: "all",
                company: "all",
                range: maxPrice
            }
        )
    const initialState = {
        filteredProducts: sortedProducts,
        color: "all",
        category: "all",
        company: "all",
        name: "",
        range: maxPrice

    }

    const [state, dispatch] = useReducer(reducer, initialState)
    useEffect(() => {
        dispatch({ type: "LOADING", payload: sortedProducts })
    }, [loading])

    const updateFilterObject = (e) => {
        if ((e.target.name) && (e.target.value)) {
            const name = e.target.name;
            const value = e.target.value;
            switch (name) {
                case "name":
                    {

                        filterObject.name = value;
                        setfilterObject({ ...filterObject });
                        break;

                    }
                case "category":
                    {

                        filterObject.category = value;
                        setfilterObject({ ...filterObject })
                        break;

                    }
                case "company":
                    {

                        filterObject.company = value;
                        setfilterObject({ ...filterObject })
                        break;

                    }
                case "color":
                    {

                        filterObject.color = value;
                        setfilterObject({ ...filterObject })
                        break;

                    }
                case "range":
                    {
                        filterObject.range = value;
                        setfilterObject({ ...filterObject });
                        break;
                    }
            }
        }

    }

    const filterProducts = (e) => {
        updateFilterObject(e);
    }
    useEffect(() => {
        dispatch({ type: "FILTER", payload: { products: sortedProducts, filterObject: filterObject } })
    }, [filterObject])
    useEffect(() => {
        dispatch({ type: "FILTER", payload: { products: sortedProducts, filterObject: filterObject } })
    }, [sortedProducts])
    useEffect(() => {
        filterObject.range = maxPrice
        setfilterObject({ ...filterObject });
    }, [maxPrice])

    const clearAll = () => {

        setfilterObject(
            {
                name: "",
                category: "all",
                color: "all",
                company: "all",
                range: maxPrice,

            }
        )

    }

    return (
        <filterContext.Provider
            value={
                {
                    ...state,
                    filterProducts,
                    filterObject,
                    clearAll,



                }
            }>
            {children}
        </filterContext.Provider>
    )
}

export const useFilter = () => {
    return useContext(filterContext);
}