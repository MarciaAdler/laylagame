import React from "react";

function Item(props) {
  return (
    <div>
      <button
        onClick={() => {
          props.start();
        }}
      >
        start
      </button>
    </div>
  );
}

export default Item;
