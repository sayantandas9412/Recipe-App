import React from "react";

const Recipe = props => {
  return (
    <div className="ingredients">
      <p>
        <strong>{props.label}</strong>
      </p>
      <p>{props.calorie.toFixed(0)} Calories </p>
      <img src={props.image} style={{ display: "block" }} />

      <i>
        {props.ingredients.map(ingredient => {
          return (
            <li key={ingredient.weight + Math.random()}>{ingredient.text}</li>
          );
        })}
      </i>
    </div>
  );
};

export default Recipe;
