import React, {useState} from "react";
import LazyLoad from 'react-lazyload';
import cleanImageName from "../helpers/cleanImageName.js";

export default function BeerRating(props) {
    const imagePath = cleanImageName(props.beer_name);
    const imageAlt = `Label of ${props.beer_name}`;
    return(
        <div className="beerRating row mb-3 pb-3">
            <div className="col-12 col-md-6">
                <div className="row justify-content-center">
                    <div className="col-3 d-flex align-items-center">
                        <LazyLoad height={200} once={true} offset={100}>
                            <img src={imagePath} alt={imageAlt}></img>
                        </LazyLoad>
                    </div>
                    <div className="col-12 col-md-9 text-center text-md-start d-md-flex align-items-center">
                        <p className="mt-3 mt-md-0 mb-0">{props.beer_name}</p>
                    </div>
                </div> 
            </div>
            <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-end align-items-center">
                <div className="starContainer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" 
                         fill="transparent" stroke="#f2b705" strokeWidth="2" 
                         strokeLinecap="round" strokeLinejoin="round" 
                         className="star" data-id={props._id} data-rating="1"
                         onClick={(e) => props.clickStarHandler(props)}>
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                </div>
                <div className="starContainer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" 
                         fill="transparent" stroke="#f2b705" strokeWidth="2" 
                         strokeLinecap="round" strokeLinejoin="round" 
                         className="star" data-id={props._id} data-rating="2"
                         onClick={(e) => props.clickStarHandler(props)}>
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                </div>
                <div className="starContainer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" 
                         fill="transparent" stroke="#f2b705" strokeWidth="2" 
                         strokeLinecap="round" strokeLinejoin="round" 
                         className="star" data-id={props._id} data-rating="3"
                         onClick={(e) => props.clickStarHandler(props)}>
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                </div>
                <div className="starContainer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" 
                         fill="transparent" stroke="#f2b705" strokeWidth="2" 
                         strokeLinecap="round" strokeLinejoin="round" 
                         className="star" data-id={props._id} data-rating="4"
                         onClick={(e) => props.clickStarHandler(props)}>
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                </div>
                <div className="starContainer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" 
                         fill="transparent" stroke="#f2b705" strokeWidth="2" 
                         strokeLinecap="round" strokeLinejoin="round" 
                         className="star" data-id={props._id} data-rating="5"
                         onClick={(e) => props.clickStarHandler(props)}>
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                </div>
            </div>
        </div>
    )
}