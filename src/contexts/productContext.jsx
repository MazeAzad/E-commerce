import React, { useEffect, useReducer, useContext, useState } from "react";
import axios from "axios";
const productsContext = React.createContext();
import { products_url } from "../api_endpoints/endpoints";
import { reducer } from "../reducers/productReducer";
const ProductProvider = ({ children }) => {
    const initialState = {
        products: [],
        loading: true,
    }
    const [showSidebar, setShowSidebar] = useState(false);
    const [state, dispatch] = useReducer(reducer, initialState);
    const getProducts = async () => {
        dispatch({ type: "LOADING", payLoad: { loading: true } });
        const response = await axios(products_url);
        dispatch({ type: "GETTING_DATA", payload: { data: response.data } })
    }
    useEffect(() => {
        getProducts();
    }, [])
    const openSidebar = () => {
        setShowSidebar(true);
    }
    const closeSidebar = () => {
        setShowSidebar(false);
    }
    const [companies, setCompanies] = useState([]);
    const [categories, setCategories] = useState([]);
    const [colors, setColors] = useState([]);
    const [maxPrice, setMaxPrice] = useState(0);
    const getCompines = (products) => {
        let companyArray = products.map((product) => {
            return product.company;
        })
        companyArray.push("all");
        companyArray = companyArray.reverse();
        const companySet = new Set(companyArray)
        setCompanies([...companySet]);
    }
    const getCategories = (products) => {
        let categoryArray = products.map((product) => {
            return product.category;
        })
        categoryArray.push("all");
        categoryArray = categoryArray.reverse();
        const categorySet = new Set(categoryArray)

        setCategories([...categorySet]);
    }
    const getColors = (products) => {
        const colorsArray = products.map((product) => {
            return product.colors;
        })
        let allColors = [];
        colorsArray.forEach((color) => {
            allColors.push(...color);
        })
        allColors.push("all");
        allColors = allColors.reverse();
        const colorsSet = new Set(allColors);
        setColors([...colorsSet]);
    }
    const getMaxPrice = (products) => {
        const maxPrice = products.reduce((total, product) => {
            if (product.price >= total) {
                total = product.price;
            }
            return total;
        }, 0)
        setMaxPrice(Math.round(maxPrice));
    }
    useEffect(() => {

        getCompines(state.products);
        getCategories(state.products);
        getColors(state.products);
        getMaxPrice(state.products);

    }, [state.products])
    const [filledRow, setFilledRow] = useState(false);
    const changeViewFilledRow = () => {
        setFilledRow(true);
    }
    const changeGridRow = () => {
        setFilledRow(false);
    }
    const [showFilter, setShowFilter] = useState(false);
    const openFilter = () => {
        setShowFilter(true);
    }
    const closeFilter = () => {
        setShowFilter(false);
    }
    return <productsContext.Provider
        value={
            {
                ...state,
                openSidebar,
                closeSidebar,
                showSidebar,
                companies,
                categories,
                colors,
                maxPrice,
                changeGridRow,
                changeViewFilledRow,
                filledRow,
                showFilter,
                openFilter,
                closeFilter,

            }
        }>
        {children}
    </productsContext.Provider>
}

const useProducts = () => {
    return useContext(productsContext);
}
export { useProducts, ProductProvider }