import React from "react";

//import "./index.css";

function List(props) {
  return (
    <div>
      <button onClick={props.onClick}>Delete</button>
      <button onClick={props.upClick}>Up</button>
      <button onClick={props.downClick}>Down</button>

      {props.text}
    </div>
  );
}

export default List;
