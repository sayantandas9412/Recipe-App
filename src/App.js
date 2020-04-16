import React, { useState, useEffect } from "react";

import "./App.css";
import Recipe from "./Recipe";

const MY_APP_ID = "8bfdeece";
const MY_APP_KEY = "b16d4317ba7fb57761e95f87d5cc84c0";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("apple");
  const [error, setError] = useState("");
  let [inputQuery, setInputQuery] = useState("");
  let errorMsg = "This is not available";

  useEffect(() => {
    fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${MY_APP_ID}&app_key=${MY_APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.hits.length == 0) {
          setError(errorMsg);
        } else setRecipes(data.hits);
        console.log(data.hits);
      });
  }, [query]);

  const inputChangeHandler = (e) => {
    inputQuery = e.target.value;
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    setQuery(inputQuery);
  };

  let Recipes = recipes.map((recipe) => (
    <Recipe
      label={recipe.recipe.label}
      calorie={recipe.recipe.calories}
      key={recipe.recipe.label}
      image={recipe.recipe.image}
      ingredients={recipe.recipe.ingredients}
    />
  ));

  return (
    <div className="App">
      <div className="input">
        <div className="Logo">
          <h1>EasyRecipe</h1>
        </div>

        <form onSubmit={formSubmitHandler} className="form" netlify>
          <input
            name="input"
            type="text"
            className="searchButton"
            onChange={inputChangeHandler}
            placeholder="eg. Banana"
          />
          <input type="submit" className="submitButton" value="Search" />
        </form>
      </div>
      <div className="Recipes">{error === "" ? Recipes : error}</div>
    </div>
  );
};

export default App;
