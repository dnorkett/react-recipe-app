import React from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';

const Recipe = ({title, image, url, ingredients}) => {
    return(
        <div className="recipe">
            <h1 className="recipeTitle">{title}</h1>
            <ul>
                {ingredients.map(ingredient => (
                    <li key={uuidv4()}>{ingredient.text}</li>
                ))}
            </ul>            
            <a href={url} target="_blank"><img className="image" src={image} /> </a>
        </div>
    );
}

export default Recipe;