export const reducer = (state, action) => {
    const getCount = (items) => {
        if (items === undefined)
            return 0
        const count = items.reduce((total, item) => {
            return total += item.count;
        }, 0)
        return count;
    }
    const totalPrice = (items) => {
        if (items === undefined)
            return 0
        const totalPrice = items.reduce((total, item) => {
            return total += item.subTotal;
        }, 0)
        return totalPrice;
    }
    if (action.type === "update") {
        let carts = action.payload;
        return {
            allCarts: carts,
            totalPrice: totalPrice(carts),
            totalCount: getCount(carts)
        }
    }
    if (action.type === "CLEAR") {
        localStorage.clear();
        return {
            ...state,
            allCarts: [],
            totalPrice: 0,
            totalCount: 0
        }
    }
}