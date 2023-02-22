import React from 'react';
import { useGlobalContext } from '../Context';
import { useRef, useState } from 'react';
import { useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import './SearchForm.css'


const SearchForm = () => {
const [search, setSearch] = useState('');    
const inputField = React.useRef('');
const {setSearchField} = useGlobalContext();
const reSize = window.innerWidth

useEffect(()=>{
 inputField.current.focus();
 
},[]);

const onChange = () =>{
const input = inputField.current.value;
setSearchField(input);
};

const handleSubmit = (e) =>{
    e.preventDefault()
}

return (
  
    <form className={'search-form showform'}   onSubmit={handleSubmit}>
    <input 
    type="text"
    name='name'
    id='name'
    placeholder='Search Your favourite products...'
    ref={inputField}
    onChange={onChange} 
    />
    <button className='btn_search' type='button'><FaSearch/></button>
    </form>

)
};

export default SearchForm;