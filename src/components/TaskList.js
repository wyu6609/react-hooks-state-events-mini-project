import React from "react";
import Task from "./Task";
import { v4 as uuid } from "uuid";

function TaskList({ todoList, setTodoList, filteredCategory }) {
  console.log(filteredCategory);

  return (
    <div className="tasks">
      {todoList.map((taskObj) => {
        if (
          taskObj.category === filteredCategory ||
          filteredCategory === "All"
        ) {
          return (
            <Task
              key={uuid()}
              taskObj={taskObj}
              todoList={todoList}
              setTodoList={setTodoList}
            />
          );
        }
      })}
    </div>
  );
}

export default TaskList;
