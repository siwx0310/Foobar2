import React from "react";
import NowServingOrder from "./NowServingOrder";

export default function NowServing(props) {
    const nowServingComponents = props.serving.map((item) => <NowServingOrder key={item.id} {...item}/>)
    return(
        <div className="row mb-3">
            <div className="card">
                <div className="card-body component">
                    <div className="row">
                        <h2>Now serving</h2>
                    </div>
                    <div className="row justify-content-around">
                        {nowServingComponents}
                    </div>
                </div>
            </div>
        </div>
    )
}