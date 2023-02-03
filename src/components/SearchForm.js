import React from 'react';
import { useGlobalContext } from '../Context';
import { useRef, useState } from 'react';
import { useEffect } from 'react';

const searchForm = () => {
const [search, setSearch] = useState('');    
const {inputField} =useRef(null);
const {searchField} = useGlobalContext();

useEffect(()=>{
 inputField.current.focus();
},[]);

const onChange = (event) =>{
const input = inputField.current.value;
searchField(input);
};

return (
    <div>
    <form className='form-section'>
    <label htmlFor="" className=''>Search Your Favorite Wear</label>
    <input type="search"
    placeholder='search for wears'
    value={search}
    ref={inputField}
    onChange={onChange} 
    />
    </form>
    </div>
)
};

export default searchForm;