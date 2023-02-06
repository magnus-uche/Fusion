import React from 'react';
import { useGlobalContext } from '../Context';
import { useRef, useState } from 'react';
import { useEffect } from 'react';


const SearchForm = () => {
const [search, setSearch] = useState('');    
const inputField = React.useRef('');
const {setSearchField} = useGlobalContext();

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
    <section className='search'>
    <form className='search-form' onSubmit={handleSubmit}>
    <label htmlFor='name' className='form-control'>Search Your Favorite Wear</label>
    <input 
    type="text"
    name='name'
    id='name'
    ref={inputField}
    onChange={onChange} 
    />
    </form>
    </section>
)
};

export default SearchForm;