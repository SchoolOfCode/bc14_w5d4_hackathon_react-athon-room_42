import React from "react";

import Input from "../Input";
import List from "../List";
import Button from "../Button";

function App() {
  const [todos, setTodos] = React.useState([]);

  function addTodo() {
    const newTodo = {
      id: todos.length + 1,
      text: document.querySelector("input").value,
    };

    document.querySelector("input").value = "";
    setTodos([...todos, newTodo]);
  }

  function deleteItem(itemId) {
    setTodos(todos.filter((item) => item.id !== itemId));
  }

  function upItem(itemId) {
    console.log(itemId);
    //[todos[itemId], todos[itemId + 1]] = [todos[itemId + 1], todos[itemId]];
    // let temp = todos[itemId];
    // setTodos((todos[itemId] = todos[itemId + 1]));
    // setTodos((todos[itemId + 1] = temp));
  }

  function downItem(itemId) {
    console.log("before", todos);

    const newTodos = [...todos];

    let item1 = newTodos[itemId];
    let item2 = newTodos[itemId - 1];

    newTodos[itemId] = item2;
    newTodos[itemId - 1] = item1;

    console.log("after", newTodos);
    setTodos(newTodos);
  }

  return (
    <div id="app">
      <h1>To Do List</h1>
      <div>
        <Input />
        <Button onClick={addTodo} />
      </div>

      {todos.map((item) => {
        return (
          <List
            key={item.id}
            text={item.text}
            onClick={() => {
              deleteItem(item.id);
            }}
            upClick={() => {
              upItem(item.id);
            }}
            downClick={() => {
              downItem(item.id);
            }}
          />
        );
      })}
    </div>
  );
}

export default App;
