import React from "react";
import { v4 as uuid } from "uuid";

function CategoryFilter({ CATEGORIES, setFilteredCategory }) {
  //sets state of the category
  const categoryHandler = (event) => {
    setFilteredCategory(event.target.name);
  };

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {CATEGORIES.map((category) => {
        return (
          <button key={uuid()} onClick={categoryHandler} name={category}>
            {category}
          </button>
        );
      })}
    </div>
  );
}

export default CategoryFilter;
