import React, { useState, useEffect } from "react";
import { Router } from "@reach/router";
// https://www.npmjs.com/package/react-loading
import ReactLoading from "react-loading"; // changed by siw

import Nav from "./components/Nav";
import Dashboard from "./pages/Dashboard";
import Beers from "./pages/Beers";
import Cart from "./pages/Cart";
import Ratings from "./pages/Ratings";
import putRatings from "./helpers/putRatings.js";

function App() {
  const [data, setData] = useState([]);
  const [products, setProducts] = useState([]);
  const [ratings, setRatings] = useState([]);
  const [basket, setBasket] = useState([]);
  const [userOrder, setUserOrder] = useState([{ id: 0, order: [], name: "" }]);
  const [totalAmount, setTotalAmount] = useState(0);

  // Found on javascript.plainenglish.io START
  // - https://javascript.plainenglish.io/using-reacts-useeffect-hook-to-fetch-data-and-periodically-refresh-that-data-2a69b6d44081

  // Fetch data from Heroku, and set it to state
  const getData = () => {
    fetch("https://foobarsiwmorten.herokuapp.com")
      .then((res) => res.json())
      .then(setData);
  };
  // Fetch informartion on the beers, and set it to state
  const getProducts = () => {
    fetch("https://foobarsiwmorten.herokuapp.com/beertypes")
      .then((res) => res.json())
      .then(setProducts);
  };
  // Fetch ratings from restDB, and set it to state
  const getRatings = () => {
    fetch("https://foobar-a352.restdb.io/rest/beers", {
      method: "get",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "x-apikey": "60a3d37fe3b6e02545edaa27",
        "cache-control": "no-cache",
      },
    })
      .then((res) => res.json())
      .then(setRatings);
  };

  // Call the fetching functions once
  useEffect(() => {
    getData();
    getProducts();
    getRatings();

    // Updates data every 10th seconds
    const interval = setInterval(() => {
      getData();
    }, 10000);
    return () => clearInterval(interval);
  }, []);
  // Found on javascript.plainenglish.io END

  function addToUserOrder(props) {
    setUserOrder(props);
  }

  function addToBasket(payload, amount) {
    const inBasket = basket.findIndex((item) => item.name === payload.name);
    if (inBasket === -1) {
      //add
      const nextPayload = { ...payload };
      nextPayload.amount = amount;
      setBasket((prevState) => [...prevState, nextPayload]);
      setTotalAmount(totalAmount + amount);
    } else {
      //if it exists, modify amount
      const nextBasket = basket.map((item) => {
        if (item.name === payload.name) {
          item.amount += amount;
        }
        return item;
      });
      setBasket(nextBasket);
      setTotalAmount(totalAmount + amount);
    }
    if (totalAmount >= 20) {
      setTotalAmount(`20+`);
    } else {
      setTotalAmount(totalAmount + amount);
    }
  }

  function resetBasket(payload) {
    console.log("reset basket");
    console.log(payload);
    payload.length = 0;

    setTotalAmount(0);
  }

  // Submit new ratings from user
  function clickSubmitHandler(props) {
    // For each beer rated PUT the new data to restDB
    props.forEach((item) => {
      const status = putRatings(item);
      console.log(status);
    });

    // Change the view of the page, and display succes message
    document.querySelector("#rateBeers").setAttribute("hidden", true);
    document.querySelector("#rateMessage").removeAttribute("hidden");

    // Empty the userOrder order array, so that the user cannot rate the same order twice.
    setUserOrder([
      { order: [], name: props[0].customer, id: props[0].orderId },
    ]);

    // Update the ratings from restDB
    getRatings();
  }

  function removeFromBasket(props) {
    const index = basket.findIndex((item) => item.name === props.name);
    if (index >= -1) {
      basket.splice(index, 1);
    }
    //console.log(index);
    //console.log(basket);
    setTotalAmount(totalAmount - props.amount);

    // setBasket(basket.splice(basket.indexOf(props.name, 1)));
  }

  const productsCopy = [...products];
  // console.log(productsCopy);
  //console.log(data);
  // console.log(ratings);

  return (
    <div className="App">
      {data.length === 0 || ratings.length === 0 ? (
        <Loader />
      ) : (
        <div className="container-fluid p-0">
          <Nav
            totalAmount={totalAmount}
            queue={data.queue}
            serving={data.serving}
            userOrder={userOrder}
          />
          <header className="row text-center pt-3">
            <div className="col">
              <h1>{data.bar.name}</h1>
            </div>
          </header>
          <Router>
            <Dashboard
              path="/"
              data={data}
              ratings={ratings}
              userOrder={userOrder}
            />
            <Beers
              path="beers"
              data={data}
              products={productsCopy}
              ratings={ratings}
              addToBasket={addToBasket}
            />
            <Cart
              path="cart"
              basket={basket}
              addToBasket={addToBasket}
              removeFromBasket={removeFromBasket}
              addToUserOrder={addToUserOrder}
              resetBasket={resetBasket}
              userOrder={userOrder}
              queue={data.queue}
              serving={data.serving}
            />
            <Ratings
              path="ratings"
              order={userOrder}
              ratings={ratings}
              clickSubmitHandler={clickSubmitHandler}
            />
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;

// changed by siw
function Loader() {
  return (
    <div className="Loadingpage">
      <ReactLoading
        type={"spinningBubbles"}
        color="#f2b705"
        height={222}
        width={125}
      />
    </div>
  );
}
