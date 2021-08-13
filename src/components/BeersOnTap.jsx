import React from "react";
import Ratings from "../pages/Ratings";
import BeerOnTap from "./BeerOnTap";

export default function BeersOnTap(props) {
    const beers = [];
    const Beer = {name: "", ratingAVG: 0, id: 0};
    const addBeers = props.taps.forEach(tap=>{
        const index = beers.findIndex(item=>item.name === tap.beer);
        if (index === -1) {
            const beer = Object.create(Beer);
            beer.name = tap.beer;
            beer.id = tap.id;
            const onTap = props.ratings.findIndex(item=>item.beer_name === tap.beer);
            beer.ratingAVG = props.ratings[onTap].avg;
            beers.push(beer);
        }
    })

    const beerOnTapComponent = beers.map((item) => <BeerOnTap key={item.id} {...item}/>)
    return (
        <div className="row mb-3">
            <div className="card">
                <div className="card-body component">
                    <div className="col-12">
                        <h2>Beers on tap</h2>
                    </div>
                    <div className="col-12">
                        {beerOnTapComponent}
                    </div>
                </div>
            </div>
        </div>
    )
}