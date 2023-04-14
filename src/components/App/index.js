import React from "react";

import Input from "../Input";
import List from "../List";
import Button from "../Button";

function App() {
  const [todos, setTodos] = React.useState([{ id: 1, text: "a todo item" }]);

  return (
    <div id="app">
      <h1>Hello</h1>
      <div>
        <Input />
        <Button />
      </div>

      {todos.map((item) => {
        return <List key={item.id} text={item.text} />;
      })}
    </div>
  );
}

export default App;
