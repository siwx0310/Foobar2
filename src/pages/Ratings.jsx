import React, {useState} from "react";
import BeerRating from "../components/BeerRating"; 
import { Link } from "@reach/router";

export default function Ratings(props) {
    const rateOrder = {order: []};

    // If there is an order to rate
    if (props.order.length <= 1 || props.order[0].order.length < 0) {
        // Add the order information to the order we are going to rate
        const newOrder = props.order.map(entry => {
            rateOrder.id = entry.id;
            rateOrder.name = entry.name;
            // Make sure there is no identical beers on the order to rate
            entry.order.forEach(orderEntry => {
                const inRateOrder = rateOrder.order.findIndex(newOrderItem=> newOrderItem === orderEntry);
                if (inRateOrder === -1) {
                    rateOrder.order.push(orderEntry);
                }
            })
        });

        // Create an object with rating information for each beer
        const Beer = {
            _id: "", beer_name: "", ratings: [], sum: "", nratings: "", customer: ""
        }
        rateOrder.order = rateOrder.order.map(orderItem => {
            const beer = Object.create(Beer);
            beer.beer_name = orderItem;
            const beerIndex = props.ratings.findIndex(item=>item.beer_name === orderItem);
            beer._id = props.ratings[beerIndex]._id;
            beer.ratings = props.ratings[beerIndex].ratings;
            beer.sum = props.ratings[beerIndex].sum;
            beer.nratings = props.ratings[beerIndex].nratings;
            beer.customer = rateOrder.name;
            beer.orderId = rateOrder.id;
            return beer;
        })
    } 

    // Update state when clicking a new rating
    const [beerRating, setBeerRating] = useState([]);
    function clickStarHandler(props) {
        const selectedRating = parseInt(event.target.dataset.rating);
        const dataId = event.target.dataset.id;

        document.querySelectorAll(`.star[data-id="${dataId}"]`).forEach(star => {
            const rating = parseInt(star.dataset.rating);
            if (rating <= selectedRating) {
                star.style.fill = "#f2b705";
            } else {
                star.style.fill = "transparent";
            }
        })

        const inBeerRating = beerRating.findIndex(item=>item._id === props._id);
        // If the chosen beer has not yet been rated, add it to beerRating
        // and update the ratings, sum and nratings with their new values.
        if (inBeerRating === -1) {
            const nextProps = {...props};
            nextProps.ratings = props.ratings.concat([selectedRating]);
            nextProps.sum += selectedRating;
            nextProps.nratings = nextProps.nratings + 1; 
            setBeerRating(prevState => [...prevState, nextProps]);
        } else {
            // Else find the existing object in beerRating matching the chosen beer,
            // and update the ratings and sum to their new values. 
            const nextRating = beerRating.map(item=>{
                if (item._id === props._id) {
                    item.ratings = props.ratings.concat([selectedRating]);
                    item.sum = props.sum + selectedRating; 
                } 
                return item;
            });
            setBeerRating(nextRating);
        }
    }

    // For each beer in order return a component 
    const beerRatingComponent = rateOrder.order.map((item) => <BeerRating key={item._id} {...item} clickStarHandler={clickStarHandler}/>)

    return(
        <div className="container pb-5-rem">
            {props.order.length === 0 || props.order[0].order.length === 0 ? 
            <div className="row justify-content-center text-center">
                <div className="col-12 col-md-10">
                    <div className="row">
                        <div className="card">
                            <div className="card-body component">
                                <div className="row">
                                    <div className="col">
                                        <h2>Sorry, there is no order to rate.</h2>
                                        <p>Please go to the beers menu to order.</p>
                                    </div>
                                </div>
                                <div className="row justify-content-center pb-3">
                                    <div className="col d-flex justify-content-center">
                                        <Link className="btn btn-primary" to="../beers">Menu</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            :
            
            <div id="rateBeers" className="row justify-content-center">
                <div className="col-12 col-md-10">
                    <div className="row">
                        <div className="card">
                            <div className="card-body component">
                                <div className="row">
                                    <h2>Order {rateOrder.id}</h2>
                                </div>
                                {beerRatingComponent}
                                <div className="row mt-3 justify-content-center pb-3">
                                    <div className="col-12 d-flex justify-content-center">
                                        <button id="submitRatings" className="btn btn-confirm" disabled={beerRating.length === 0} onClick={(e) => props.clickSubmitHandler(beerRating)}>Submit ratings</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
            }
            <div id="rateMessage" hidden className="row justify-content-center text-center">
                <div className="col-12 col-md-10">
                    <div className="row">
                        <div className="card">
                            <div className="card-body component">
                                <div className="row">
                                    <div className="col">
                                        <h3><span>Hey {rateOrder.name}!</span></h3>
                                        <p>Thank you for rating our beers!</p>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col">
                                        <h4>Still thirsty?</h4>
                                        <p>Buy another round!</p>
                                    </div>
                                </div>
                                <div className="row justify-content-center pb-3">
                                    <div className="col d-flex justify-content-center">
                                        <Link className="btn btn-primary" to="../beers">Menu</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}