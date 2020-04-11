import React, {useEffect, useState} from 'react';
import './App.css';
import Recipe from './Recipe';
import { v4 as uuidv4 } from 'uuid';

const App = () => {
  
  const APP_ID = '49b307a4';
  const APP_KEY = '45f353a4e103cdca4af43c48074d2b15';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');
  
  useEffect( () => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=30`)
    const data = await response.json();
    setRecipes(data.hits);    
  }


  const updateSearch = e => {
    setSearch(e.target.value);
  }

  
  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <div className="App">
      <h1 className="header">React - Recipe Search Engine</h1>
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
        <button className="search-button" type="submit">Search</button>
      </form>
      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe 
            title={recipe.recipe.label}             
            image={recipe.recipe.image}
            url={recipe.recipe.url}
            key={uuidv4()}
            ingredients={recipe.recipe.ingredients}
            />
        ))}
      </div>
    </div>
  )
}

export default App;
