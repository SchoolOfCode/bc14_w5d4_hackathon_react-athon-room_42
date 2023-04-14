import React from "react";

import Input from "../Input";
import List from "../List";
import Button from "../Button";

function App() {
  const [todos, setTodos] = React.useState([]);

  function addTodo() {
    const newTodo = {
      //The id of the new item will be the length of the todos array + 1
      id: todos.length + 1,
      //the text of the item will be the value of the input element
      text: document.querySelector("input").value,
    };
    //Clears the input element
    document.querySelector("input").value = "";
    //Adds the new item to the todos array using the spread operator
    setTodos([...todos, newTodo]);
  }

  function deleteItem(itemId) {
    //setToDos will filter the todos array and return a new array with all the items that do not have the id of itemId
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
  //Creates a copy of todos array using the spread operator and stores it as newTodos
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
          //The key prop is used by React to identify which items have changed, are added, or are removed.
            key={item.id}
          //The id prop is used to identify which item to delete
            text={item.text}
          //The deleteItem function is passed to the List component as a prop
            onClick={() => {
              deleteItem(item.id);
            }}
          //the upClick uses the upItem function to move the item up the list using the id of the item
            upClick={() => {
              upItem(item.id);
            }}
          //the downClick uses the downItem function to move the item down the list using the id of the item
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
