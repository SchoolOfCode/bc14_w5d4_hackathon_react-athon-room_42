import React from "react";

//import "./index.css";

function List(props) {
  return (
    <div>
      <button onClick={props.onClick}>Delete</button>
      {props.text}
    </div>
  );
}

export default List;
