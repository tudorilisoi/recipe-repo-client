import React, {useContext, useState } from 'react';
import { Route, NavLink } from 'react-router-dom';
import { categories } from '../dummyStore'
import ValidationError from '../ValidationError/ValidationError';
import './AddCategory.css'
import RecipesContext from '../RecipesContext';


// account for when user enters already taken username

export default function AddCategory(props) {
    console.log('props', props)
    const [category, setCategory] = useState('');

    const context = useContext(RecipesContext)
    console.log('context', context)
        

    function handleCancel() {
        // go to categories page
        props.history.push('/categories')
    }

    function handleSave() {
        // go to categories page
        // make sure categories page gets updated
    }

    function updateName(e) {
        setCategory(e.target.value)
    }

    function validateName() {
        const categoryName = category.trim()
        if (categoryName.length === 0) {
            return '*name is required'
        }
    }

    function handleSubmit(e) {
        e.preventDefault()
        postCategory()
    }

    function postCategory() {
        // POST fetch
        // add to state
        props.history.push('/categories')

        
    }

    return (
        <div className='AddCategory__add-category-container'>
            <h2>Add Category</h2>

            <form onSubmit={handleSubmit}>
                <label className='category-name'
                    htmlFor='category-name'>Category Name </label>
                <input type='text' id='category-name'
                    onChange={updateName} />
                <ValidationError
                    message={validateName()}
                    errorPosition={'absolute'} />
                <div className='AddCategory__buttons-wrapper'>
                    <button onClick={handleCancel}>Cancel</button>
                    <button
                        type='submit'
                        disabled={category.length === 0}
                        aria-label="Add Category"
                    >Save</button>
                    {/* <button onClick={handleSave}>Save</button> */}
                </div>
            </form>
        </div>
    )
}

