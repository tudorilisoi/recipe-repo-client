import React, { useContext } from 'react';
import { Route, NavLink } from 'react-router-dom';
import { categories } from '../dummyStore'
import RecipeCardList from '../RecipeCardList/RecipeCardList';
import RecipesContext from '../RecipesContext'

export default function Categories(props) {
    
    // useContext(RecipesContext).currentCategory = 2;
    console.log('RecipesContext', RecipesContext.currentCategory)

    function handleClickBack() {
        props.history.push('/')

    }
    function handleAddCategory() {
        // go to add Category page
        console.log('handleAddCategory ran')
        props.history.push('/add-category')
        
    }
    // change when implement users
    const ownedCategories = categories
    console.log('ownedCategories', ownedCategories)

    return (
        <div>
            <button onClick={handleClickBack}>back</button>
            <li key={'asdf'}
                className={'Categories__categories'}
            >
                <NavLink to={`/categories/all`}>
                    All categories
                </NavLink>
            </li>
            {ownedCategories.map(category => {
                return <li key={category.id}
                    className={'Categories__categories'}
                >
                    <NavLink to={`/categories/${category.id}`}>
                        {category.title}
                    </NavLink>
                </li>
            })}
            <button onClick={handleAddCategory}>Add Category</button>
        </div>
    )
















    // return (
    //     <div>
    //         <button onClick={handleClickBack}>
    //             Back
    //             </button>
    //         <ul>
    //             {categories.map(category =>
    //                 <li key={category.id}>
    //                     <NavLink to={`/categories/${category.id}`}>
    //                         {category.title}
    //                     </NavLink>
    //                 </li>)}
    //         </ul>
    //     </div>
    // )
}
