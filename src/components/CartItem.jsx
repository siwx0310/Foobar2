import React from "react";
import { Link } from "@reach/router";
import LazyLoad from "react-lazyload";
import cleanImageName from "../helpers/cleanImageName.js";
// https://www.npmjs.com/package/react-circular-progressbar
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function CartItem({
  basket,
  addToBasket,
  removeFromBasket,
  hideBasket,
}) {
  const basketLength = basket.length;

  const percentage = 33;

  return (
    <section id="cartItems">
      <div id="noItemsInBasket">{basketLength === 0 && <NoOrders />}</div>
      <div>
        {basketLength > 0 ? (
          <div id="myProgress33" className="row">
            <div className="col-12 progress-container">
              <div
                className="progress-back"
                style={{ width: 120, height: 120 }}
              >
                <CircularProgressbar
                  value={33}
                  text={`${percentage}%`}
                  strokeWidth={4}
                  styles={buildStyles({
                    // Colors
                    pathColor: `#55b082`,
                    textColor: "white",
                    trailColor: "#333333",
                  })}
                />
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        <ul id="basketItems" className="ps-0">
          {basket.map((item) => (
            <CartList
              name={item.name}
              amount={item.amount}
              key={item.name}
              addToBasket={addToBasket}
              removeFromBasket={removeFromBasket}
            />
          ))}
        </ul>
        {basketLength >= 1 && <TotalPriceInBasket basket={basket} />}
        <div className="row justify-content-center pb-3">
          <div className="col d-flex justify-content-center">
            {basketLength >= 1 && (
              <button
                className="btn btn-confirm"
                id="hideBasketBtn"
                onClick={() => {
                  hideBasket();
                }}
              >
                Confirm
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function CartList(props) {
  let price = props.amount * 49;

  const imagePath = cleanImageName(props.name);
  const imageAlt = `Label of ${props.name}`;

  return (
    <li className="row basketitems align-items-center pb-4 pb-md-3">
      <div className="col-12 col-md-4">
        <div className="row justify-content-center align-items-center">
          <div className="col-3 col-md-4 pb-3 pb-md-0">
            <LazyLoad height={200} once={true} offset={100}>
              <img src={imagePath} alt={imageAlt}></img>
            </LazyLoad>
          </div>
          <div className="col-12 col-md-8 text-center text-md-start">
            <h3 className="mb-3 mb-md-0">{props.name}</h3>
          </div>
        </div>
      </div>
      <div className="col-5 col-md-4">
        <div className="row justify-content-center">
          <div className="col-md-10 d-flex justify-content-md-center">
            <button
              className="btn btn-primary btn-amount"
              disabled={props.amount === 1}
              onClick={() => props.addToBasket(props, -1)}
            >
              -
            </button>
            <div className="amount d-flex align-items-center justify-content-center mx-3 mx-md-4">
              <p className="mb-md-0">{props.amount}</p>
            </div>
            <button
              className="btn btn-primary btn-amount"
              onClick={() => {
                props.addToBasket(props, 1);
              }}
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div className="col-7 col-md-4">
        <div className="row align-items-center">
          <div className="col-8 text-end">
            <p className="price">
              PRICE: <span>{price}</span>,-
            </p>
          </div>
          <div className="col-4 d-flex justify-content-center justify-content-end pe-3 pe-md-4">
            <button
              className="btn btn-primary btn-amount"
              onClick={() => {
                props.removeFromBasket(props);
              }}
            >
              x
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}

function TotalPriceInBasket(props) {
  const orderList = [];
  props.basket.forEach((item) => {
    for (let i = 0; i < item.amount; i++) {
      orderList.push(item.name);
    }
  });

  const amountInBasket = orderList.length;
  const totalPrice = amountInBasket * 49;

  return (
    <div className="row justify-content-center totalprice">
      <div className="col d-flex justify-content-center">
        <h4>
          Total <span className="totalPrice">{totalPrice},-</span>
        </h4>
      </div>
    </div>
  );
}

function NoOrders() {
  return (
    <div className="row text-center">
      <div className="col-12 pb-3">
        <h2>You have no beers in your basket.</h2>
        <p>Please go to the beers menu to order.</p>
      </div>
      <div className="col-12 d-flex justify-content-center">
        <Link className="btn btn-primary" to="../beers">
          Menu
        </Link>
      </div>
    </div>
  );
}
