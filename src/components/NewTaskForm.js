import React from "react";
import { v4 as uuid } from "uuid";
function NewTaskForm({
  CATEGORIES,
  setTextInput,
  setNewItemCategory,
  todoList,
  setTodoList,
  addTaskBtnHandler,
}) {
  const textHandler = (event) => {
    setTextInput(event.target.value);
  };
  const newCategoryHandler = (event) => {
    console.log(event.target.value);
    setNewItemCategory(event.target.value);
  };

  return (
    <form className="new-task-form">
      <label>
        Details
        <input type="text" name="text" onChange={textHandler} />
      </label>
      <label>
        Category
        <select name="category" onChange={newCategoryHandler}>
          {CATEGORIES.map((category) => {
            if (category !== "All") {
              return (
                <option key={uuid()} value={category}>
                  {category}
                </option>
              );
            }
          })}
        </select>
      </label>
      <input type="submit" value="Add task" onClick={addTaskBtnHandler} />
    </form>
  );
}

export default NewTaskForm;
