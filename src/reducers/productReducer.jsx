export const reducer = (state, action) => {
    switch (action.type) {
        case "LOADING":
            {
                return { ...state, loading: true }
            }
        case "GETTING_DATA":
            {
                return { ...state, loading: false, products: action.payload.data }
            }
    }
}