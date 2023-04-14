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
    const newTodos = [...todos];
    // Finds the index of the item with the id of itemId
    let todoIndex = todos.findIndex((item) => item.id === itemId);
    // If the item is already at the top of the list, return
    if (todoIndex === 0) { return; }

    // Creates a copy of the item at the index of todoIndex and stores it as item1
    let item1 = { ...newTodos[todoIndex] };
    // Creates a copy of the item at the index of todoIndex - 1 and stores it as item2
    let item2 = { ...newTodos[todoIndex - 1] };

     // Swaps the two items in the newTodos array
      newTodos[todoIndex ] = item2;
      newTodos[todoIndex - 1] = item1;
      //Updates the state of the component with the new 'newTodos' array using the 'setTodos' function
      setTodos(newTodos);
  }

  function downItem(itemId) {
//  Creates a copy of todos array using the spread operator and stores it as newTodos
    const newTodos = [...todos];
    // Finds the index of the item with the id of itemId
    let todoIndex = todos.findIndex((item) => item.id === itemId);
    // If the item is already at the bottom of the list, return
    if (todoIndex === todos.length - 1) { return; }
    // Creates a copy of the item at the index of todoIndex and stores it as item1
    let item1 = { ...newTodos[todoIndex] };
    // Creates a copy of the item at the index of todoIndex + 1 and stores it as item2
    let item2 = { ...newTodos[todoIndex + 1] };

    // Swaps the two items in the newTodos array
    newTodos[todoIndex ] = item2;
    newTodos[todoIndex + 1] = item1;
    //Updates the state of the component with the new 'newTodos' array using the 'setTodos' function
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
