import React from "react";

import Input from "../Input";
import List from "../List";
import Button from "../Button";

function App() {
  const [todos, setTodos] = React.useState([{ id: 1, text: "a todo item" }]);

  function addTodo(event)
  {
    let inputText = document.querySelector("input").value;
    console.log(todos)
    const newTodo = {
      id: todos.length + 1,
      text: inputText
    };

   document.querySelector("input").value = "";
    setTodos([...todos, newTodo]);
  }


  return (
    <div id="app">
      <h1>To Do List</h1>
      <div>
        <Input />
        <Button onClick={addTodo} />
      </div>

      {todos.map((item) => {
        return <List key={item.id} text={item.text} />;
      })}
    </div>
  );
}

export default App;
