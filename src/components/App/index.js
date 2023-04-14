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
    console.log("delete");
    setTodos(todos.filter((item) => item.id !== itemId));
    //setTodos(newTodos);
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
          />
        );
      })}
    </div>
  );
}

export default App;
