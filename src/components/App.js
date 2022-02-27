import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  //tasklist state
  const [todoList, setTodoList] = useState(TASKS);
  // set FilteredCategory state
  const [filteredCategory, setFilteredCategory] = useState("All");

  ////FORM STATES
  // set detailsText State
  const [textInput, setTextInput] = useState("");
  // new Item category state
  const [newItemCategory, setNewItemCategory] = useState("Code");

  // addTaskHandler
  const addTaskBtnHandler = (event) => {
    event.preventDefault();
    console.log("clicked");
    setTodoList([...todoList, { text: textInput, category: newItemCategory }]);
  };

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        CATEGORIES={CATEGORIES}
        setFilteredCategory={setFilteredCategory}
      />
      <NewTaskForm
        CATEGORIES={CATEGORIES}
        setTextInput={setTextInput}
        setNewItemCategory={setNewItemCategory}
        todoList={todoList}
        setTodoList={setTodoList}
        addTaskBtnHandler={addTaskBtnHandler}
      />
      <TaskList
        todoList={todoList}
        setTodoList={setTodoList}
        filteredCategory={filteredCategory}
      />
    </div>
  );
}

export default App;
