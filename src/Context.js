import React from 'react';
import { useState, useEffect, useContext, useReducer, useCallback } from 'react';
import { Children } from 'react';
const AppContext = React.createContext();

const url = 'https://fakestoreapi.com/products';

const reducer = (state, action) => {
    if (action.type === 'UPDATE-PRODUCT') {
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

        let getProduct = state.products.find((product) => product.id === action.payload
        )

        console.log('getProduct', getProduct)
        console.log({ cartProduct: state.cartProduct });
        return { ...state, cartProduct: state.cartProduct ? Array.from(new Set([...state.cartProduct, getProduct])) : [getProduct] }
    }

    if(action.type ==='GET_TOTAL') {
        let {total, amount} = state.cartProduct.reduce((cartTotal, cartItem)=>{
          let price = cartItem.price;
          let amount =  cartItem.amount;
          const itemTotal = price * amount;

          cartTotal.total += itemTotal
          cartTotal.amount += amount
          return cartTotal;
        },{
            amount : 0,
            total: 0
        });

        total = parseInt(total).toFixed(2)

        return {...state, total: total, amount: amount};
    }

    if(action.type === 'REMOVE'){
        let newProduct = state.cartProduct.filter((product)=>{
            return product.id !== action.payload
        })

        return {...state, cartProduct: newProduct}
    };
};

const initialState = {
    cartProduct: [],
    searchTerm: '',
    total: 0,
    price: 0,
    amount: 0,
    products: [],
};
const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [amount, setAmount] = useState(0)
    const [isLoading, setIsLoading] = useState(true)
    const [searchField, setSearchField] = useState('')

    const fetchData = useCallback(async () => {
        const response = await fetch(url);
        const product = await response.json();
        const filterData = product.filter((items) => {
            return items.title.toLowerCase().includes(searchField);
        })
        //dynamically add amount key-value pairs
        filterData.map((item) => {
            const newItem = item["amount"] = 1;
            return newItem;
        })


        dispatch({ type: "UPDATE-PRODUCT", payload: filterData });
        setIsLoading(false)
    }, [searchField])

    useEffect(() => {
        fetchData()
    }, [searchField]);

    useEffect(() => {
        dispatch({ type: 'GET_TOTAL' });
    }, [state.cartProduct]);

    const increase = (id) => {
        dispatch({ type: 'INCREASE', payload: id });
    };

    const decrease = (id) => {
        dispatch({ type: 'DECREASE', payload: id });
    };

    const remove = (id) => {
        dispatch({ type: 'REMOVE', payload: id})
    }

    const addCart = (id) => {

        dispatch({ type: 'ADD-TO-CART', payload: id })
    }
    // console.log('state.cartProduct', state.cartProduct)
    // const checkId = state.cartProduct.find(element => {
    //     return element.id === id
    // })
    // console.log(checkId);
    // if(checkId){
    //     increase(id)2
    // } else {
    //     dispatch({type: 'ADD-TO-CART', payload: id});
    // }

    // console.log('state context', {...state})

    return (
        <AppContext.Provider value={{
            ...state,
            increase,
            decrease,
            addCart,
            remove,
            setSearchField,
            isLoading
        }}>
            {children}
        </AppContext.Provider>
    )
};

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppProvider, AppContext };