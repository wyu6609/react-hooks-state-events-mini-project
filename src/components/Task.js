import React from "react";

function Task({ taskObj, todoList, setTodoList }) {
  const deleteHandler = () => {
    console.log(taskObj);
    console.log(todoList);
    //filter taskobj by taskObj.text
    // console.log(todoList.filter((el) => el.text !== "Buy rice"));
    setTodoList(todoList.filter((el) => el.text !== taskObj.text));
  };

  return (
    <div className="task">
      <div className="label">{taskObj.category}</div>
      <div className="text">{taskObj.text}</div>
      <button className="delete" onClick={deleteHandler}>
        X
      </button>
    </div>
  );
}

export default Task;
