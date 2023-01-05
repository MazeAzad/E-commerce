export const reducer = (state, action) => {
    if (action.type === "LOADING") {
        return {
            ...state,
            filteredProducts: action.payload
        }
    }

    if (action.type === "FILTER") {
        const object = action.payload;
        const products = object.products;
        const filterObject = object.filterObject;
        const filterObjectArray = Object.entries(filterObject);
        const fileteredFilterObjectArray = filterObjectArray.filter(([key, value]) => {
            if (key === "name") {
                return value !== "";
            }
            else {
                return value !== "all";
            }

        })
        const newFilterObject = Object.fromEntries(fileteredFilterObjectArray);
        if (Object.entries(newFilterObject).length === 0) {

            return {
                ...state,
                filteredProducts: [...products],
                color: "all",
                category: "all",
                company: "all",
                name: ""
            }
        }
        else {
            let filteredProducts = products;
            for (let key in newFilterObject) {
                filteredProducts = filteredProducts.filter((product) => {
                    if (key === "range") {
                        if (newFilterObject[key] >= product["price"]) {
                            return true;
                        } else {
                            false;
                        }
                    }
                    else if (key === "name") {
                        const pattern = new RegExp(newFilterObject[key])
                        if (pattern.test(product[key])) {
                            return true;
                        }
                        else {
                            return false;
                        }
                    }
                    else if (key === "color") {
                        const flags = product["colors"].map((color) => {
                            if (newFilterObject["color"] !== color) {
                                return false;
                            }
                            else {
                                return true;
                            }
                        })
                        for (let i = 0; i < flags.length; ++i) {
                            if (flags[i])
                                return true;
                        }
                        return false;
                    }
                    else {
                        if (product[key] === newFilterObject[key])
                            return true;
                        else
                            return false;
                    }
                })
            }



            return {
                ...state,
                filteredProducts: [...filteredProducts],
                ...newFilterObject
            }

        }

    }
}