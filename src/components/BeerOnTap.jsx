import React from "react";

export default function BeerOnTap(props) {
    return (
        <div className="row justify-content-between">
            <div className="col-6">
                <p>{props.beer}</p>
                <p>Rating...</p>
            </div>
            <div className="col-6 text-end">
                <p>49,-</p>
            </div>
        </div>
    )
}