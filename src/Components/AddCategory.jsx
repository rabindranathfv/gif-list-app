import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = (props) => {

    const { setCategory } = props;
    const [inputValue, setInputValue] = useState('search by category');

    const addHandler = (e) => {
        setInputValue( e.target.value );
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('handleSubmit', inputValue);
        setCategory(inputValue);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={inputValue} onChange={addHandler} />
        </form>
    )
}

AddCategory.propTypes = {
    setCategory: PropTypes.func.isRequired
}