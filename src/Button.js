import React from "react";

export default function Button(props) {
  const click = () => {
    props.onClick(props.incrementvalue);
  };
  return (
    <div>
      <button onClick={click}>+{props.incrementvalue}</button>
    </div>
  );
}
