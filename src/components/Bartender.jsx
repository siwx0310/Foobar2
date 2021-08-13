import React from "react";
import LazyLoad from 'react-lazyload';
import cleanImageName from "../helpers/cleanImageName.js";

export default function Bartender(props) {
    const imagePath = cleanImageName(props.name);
    const imageAlt = `${props.name} the bartender`;
    return (
        <div className="bartender col-4 col-md-4">
            <div className="row mb-2 justify-content-center">
                <div className="col-10 col-md-12 col-lg-8">
                    <LazyLoad height={200} once={true} offset={100}>
                        <img src={imagePath} alt={imageAlt}></img>
                    </LazyLoad>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <p>{props.name}</p>
                </div>
            </div>
        </div>
    )
}