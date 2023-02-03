import React from 'react';
import { useState,useEffect, useContext,useReducer } from 'react';
import { Children } from 'react/cjs/react.production.min';
const AppContext = React.createContext();

const url = 'https://fakestoreapi.com/products';
const reducer = (state,action) =>{
if(state.action === 'UPDATE-PRODUCT'){
return {...state, product: action.payload}
}
if(state.action === 'SEARCH') {
    return {...state, searchTerm: action.payload}
}


};
const initialState = {
cartProduct: [],
searchTerm: '',
total: 0,
price: 0,
product: [],
};
const AppProvider = () => {
const [state, dispatch] = useReducer(reducer, initialState);
// const [searchTerm, setSearchTerm] = useState('')
// const [product, setProduct] = useState([])
const {cartProduct, searchTerm, product} = state;

const fetchData = async () =>{
    const response = await fetch(`${url}`);
    const product = await response.json();
    const filterData = product.filter((items)=>{
    return items.title.toLowerCase().includes(searchTerm);
    })
    dispatch({type: "UPDATE-PRODUCT", payload: filterData})
}
useEffect(()=>{
fetchData()
},[]);

useEffect(()=>{
    dispatch({type: 'GET-TOTAL'})
},[])

const increase = (id) => {
    dispatch({type: 'INCREASE', payload: id})
}

const decrease = (id) => {
    dispatch({type: 'DECREASE', payload})
}

const addCart = (id) => {
    dispatch({type: 'ADD-TO-CART', payload: id})
}

const searchField = (inputField) => {
    dispatch({type: 'SEARCH', payload: inputField})
}

  return (
    <AppContext.Provider value={
    {...state,
    increase,
    decrease,
    addCart,
    searchField
    }
    }>
    {Children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () =>{
    return useContext(AppContext);
}

export  {AppProvider, AppContext};