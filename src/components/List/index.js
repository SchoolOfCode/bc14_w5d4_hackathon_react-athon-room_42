import React from "react";

//import "./index.css";

function List(props) {
  return (
    <div>
      <li>{props.text}</li>
      <button onClick={props.onClick}>Delete</button>
    </div>
  );
}

export default List;
