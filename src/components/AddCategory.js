import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length >= 3) {
            setCategories( categories => [inputValue, ...categories]);
        } else {
            alert('Ingresa un nombre igual o mayor a 3 letras');
        }

    }


    return (
        <form onSubmit={ handleSubmit }>
           <input 
                type = 'text'
                value = { inputValue }
                onChange = { handleInputChange }
                placeholder = 'Escribe algo'
           />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
