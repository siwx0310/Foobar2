import React from "react";

export default function NowServingOrder(props) {
  return (
    <div className="nowServingOrder col d-flex justify-content-center align-items-center text-center">
      <p>No.</p>
      <span>{props.id}</span>
    </div>
  );
}
