export const reducer = (state, action) => {
    if (action.type === "LOADING") {
        let products = action.payload;
        products = products.sort((a, b) => {
            return a.price - b.price;
        })
        return {
            ...state,
            sortedProducts: [...products]
        }
    }
    if (action.type === "Price(Highest)") {
        let products = state.sortedProducts;
        products = products.sort((a, b) => {
            return b.price - a.price
        })
        return {
            ...state,
            sortedProducts: [...products]
        }
    }
    if (action.type === "Price(Lowest)") {
        let products = state.sortedProducts;
        products = products.sort((a, b) => {
            return a.price - b.price;
        })
        return {
            ...state,
            sortedProducts: [...products]
        }
    }
    if (action.type === "Name(A-Z)") {
        let products = state.sortedProducts;
        products = products.sort(function (a, b) { return a.name.localeCompare(b.name); });
        return {
            ...state,
            sortedProducts: [...products]
        }
    }
    if (action.type === "Name(Z-A)") {
        let products = state.sortedProducts;
        products = products.sort(function (a, b) { return b.name.localeCompare(a.name); });
        return {
            ...state,
            sortedProducts: [...products]
        }
    }
}