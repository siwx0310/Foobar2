import React from "react";

export default function Formfill(props) {
    console.log(props);
    return (
      <div className="row justify-content-center">
        <div className="col d-flex justify-content-center">
          <h2>{props.progress}%</h2>
        </div>
      </div>
    );
}