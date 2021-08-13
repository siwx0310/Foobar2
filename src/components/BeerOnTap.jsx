import React from "react";
import roundRatingAvg from "../helpers/roundRatingAvg.jsx";

export default function BeerOnTap(props) {
    const ratingAVGRound = roundRatingAvg(props.ratingAVG);
    return (
        <div className="beerOnTap row justify-content-between">
            <div className="col-6">
                <p>{props.name}</p>
                {ratingAVGRound}
            </div>
            <div className="col-6 text-end">
                <p className="price"><span>49</span>,-</p>
            </div>
        </div>
    )
}