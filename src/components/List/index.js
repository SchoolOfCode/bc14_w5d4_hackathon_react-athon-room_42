import React from "react";

//import "./index.css";

function List(props) {
  return (
    <div>
      <button onClick={props.onClick} id="deleteBtn">Delete</button>
      <button onClick={props.upClick} id="upBtn">⬆️</button>
      <button onClick={props.downClick} id="downBtn">⬇️</button>

      {props.text}
    </div>
  );
}

export default List;
