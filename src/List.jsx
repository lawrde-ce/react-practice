import React, { useState } from "react";

function List() {
  const [foods, setFoods] = useState(["Apple", "Orange", "Grapes"]);

  function handleAdd(e) {
    const newFood = document.querySelector(".new-food").value;
    document.querySelector(".new-food").value = "";
    setFoods((f) => [...f, newFood]);
  }

  function handleRemove(index) {
    setFoods(foods.filter((_, i) => i !== index));
  }

  return (
    <div>
      <p>List of Foods</p>
      <ol>
        {foods.map((food, index) => (
          <li key={index} onClick={() => handleRemove(index)}>
            {food}
          </li>
        ))}
      </ol>
      <input className="new-food" type="text" placeholder="Enter food name" />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default List;
