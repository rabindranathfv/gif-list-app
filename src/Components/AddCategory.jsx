import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = (props) => {

    const [inputValue, setInputValue] = useState('search by category');
    const { setCategories } = props;
    const addHandler = (e) => {
        setInputValue( e.target.value );
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('handleSubmit', inputValue);
        setCategories( categ => [ ...categ, { id: Math.floor(Math.random()*100) + 10, name: inputValue}]);
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={inputValue} onChange={addHandler} />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}