export const reducer = (state, action) => {

    if (action.type === 'UPDATE-PRODUCT') {
        console.log("payload", action.payload);
    return { ...state, products: action.payload, amount: 0 };
    }

    if (action.type === 'INCREASE') {
        let tempProduct = state.cartProduct.map((product) => {
            if (product.id === action.payload) {
                return { ...product, amount: product.amount + 1 }
            }
            return product;
        })

        return { ...state, cartProduct: tempProduct }
    }

    if (action.type === 'DECREASE') {

        let tempProduct = state.cartProduct.map((product) => {
            if (product.id === action.payload) {
                if (product.amount <= 1) {
                    return { ...product, amount: product.amount = 1 };
                }
                return { ...product, amount: product.amount - 1 }
            }
            return product;
        });
        return { ...state, cartProduct: tempProduct };
    };

    if (action.type === "ADD-TO-CART") {
        console.log('action.type', action.type)
        console.log("chech", state.products.find((product => product.id == 2)));
        let getProduct = state.products.find((product) => product.id === action.payload)
        console.log("this is the current state", state);
        return { ...state, cartProduct: state.cartProduct ? Array.from(new Set([...state.cartProduct, getProduct])) : [getProduct] }
    }
    if (action.type === 'GET_TOTAL') {
        let { total, amount } = state.cartProduct.reduce((cartTotal, cartItem) => {
            let price = cartItem.price;
            let amount = cartItem.amount;
            const itemTotal = price * amount;

            cartTotal.total += itemTotal;
            cartTotal.amount += amount;
            return cartTotal;
        }, { amount: 0, total: 0 });

        total = parseInt(total).toFixed(2);
        return { ...state, total: total, amount: amount };
    }

    if (action.type === 'REMOVE') {
        let newProduct = state.cartProduct.filter((product) => { return product.id !== action.payload });

        return { ...state, cartProduct: newProduct }
    }; 
};








