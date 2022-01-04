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
        if ( inputValue.trim().length > 2) {
            setCategory(cat => [ inputValue]);
            console.log('AQUI');
            setInputValue('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <p>{ inputValue }</p>
            <input type="text" value={inputValue} onChange={addHandler} />
        </form>
    )
}

AddCategory.propTypes = {
    setCategory: PropTypes.func.isRequired
}