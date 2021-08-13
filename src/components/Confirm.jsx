import React from "react";
import { Link } from "@reach/router";
// https://www.npmjs.com/package/react-loading
import ReactLoading from "react-loading"; // changed by siw
// https://www.npmjs.com/package/react-circular-progressbar
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function Confirm(props) {
  const newOrder = { order: [] };
  const queue = props.queue;
  const userOrder = props.userOrder;
  const serving = props.serving;
  let orderCommingSoon = true;
  let displayorder = false;
  const percentage = 100;

  if (props.userOrder.length <= 1 || props.userOrder[0].order.length < 0) {
    const currentOrder = props.userOrder.map((entry) => {
      orderCommingSoon = false;
      displayorder = true;
      newOrder.id = entry.id;
      newOrder.name = entry.name;
    });
  } else {
    orderCommingSoon = true;
    displayorder = false;
  }

  let message;
  if (userOrder.length > 0) {
    const queueIndex = queue.findIndex((item) => item.id === userOrder[0].id);
    const servingIndex = serving.findIndex(
      (item) => item.id === userOrder[0].id
    );
    if (queueIndex > -1) {
      message = <NumberInLine queueIndex={queueIndex}></NumberInLine>;
    } else if (servingIndex > -1) {
      message = <p className="navbar-text">Your order is being served!</p>;
    } else {
      message = (
        <p className="navbar-text">
          Your order has just been served. We hope you will enjoy your beer!
        </p>
      );
    }
  } else {
    message = <p className="navbar-text">You have no active orders</p>;
  }
  return (
    <div className="row justify-content-center text-center">
      <div hidden id="confirmPayment" className="col-12">
        <div id="myProgress33" className="row">
          <div className="col-12 progress-container">
            <div className="progress-back" style={{ width: 120, height: 120 }}>
              <CircularProgressbar
                value={100}
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
        <div hidden={orderCommingSoon === false}>
          <h2>Your order will be displayed in a few secondes</h2>
          {/*changed by siw*/}
          <div className="Loadingform">
            <ReactLoading
              type={"spinningBubbles"}
              color="#f2b705"
              height={222}
              width={125}
            />
          </div>
        </div>
        <div
          className="row justify-content-center"
          hidden={displayorder === false}
        >
          <div className="col-12 col-md-10 pb-3">
            <h3>
              <span>Hey {newOrder.name}!</span>
            </h3>
            ;<p>Thank you for ordering.</p>
            <p>You can follow your order on the dashboard.</p>
          </div>
          <div className="col-12 col-md-10 pb-3">
            {message}
            <p>
              Your ordernumber is: <span>{newOrder.id}</span>
            </p>
          </div>
          <div className="col-12 col-md-10 pb-4">
            <Link className="btn btn-primary" to="/">
              Go to dashboard
            </Link>
          </div>
          <div className="col-12 col-md-10 pb-3">
            <p>
              Click the star in the navigations menu, when you are ready to rate
              the beers you have tried.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function NumberInLine(props) {
  return (
    <div>
      <p className="navbar-text">
        You are <br className="d-md-none" />
        no. <span>{props.queueIndex + 1}</span> in line
      </p>
    </div>
  );
}
