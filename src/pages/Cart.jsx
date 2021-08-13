import React, { useState, useEffect } from "react";
import CartItem from "../components/CartItem";
import Pay from "../components/Pay";
import Confirm from "../components/Confirm";
import Formfill from "../components/Formfill";

export default function Cart(props) {
  const emptyBasket = props.basket.length;
  //console.log(emptyBasket);

  function hideBasket() {
    document.querySelector("#basketItems").setAttribute("hidden", true);
    document.querySelector("#hideBasketBtn").setAttribute("hidden", true);
    document.querySelector("#myProgress33").setAttribute("hidden", true);
    displayForm();
  }

  function displayForm() {
    document.querySelector(".totalprice").setAttribute("hidden", true);
    document.querySelector("#PaymentForm").removeAttribute("hidden");
  }

  function displayBasket() {
    document.querySelector("#PaymentForm").setAttribute("hidden", true);
    document.querySelector("#basketItems").removeAttribute("hidden");
    document.querySelector("#hideBasketBtn").removeAttribute("hidden");
    document.querySelector(".totalprice").removeAttribute("hidden");
    document.querySelector("#myProgress33").removeAttribute("hidden");
  }
  function ThankYouForOrdering() {
    //console.log("Thank You For Ordering");
    document.querySelector("#confirmPayment").removeAttribute("hidden");
    document.querySelector("#noItemsInBasket").setAttribute("hidden", true);
  }

  return (
    <section className="container pb-5-rem">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10">
          <article className="beerComponent row mb-3">
            <div className="card">
              <div className="card-body component cart-body">
                <CartItem
                  basket={props.basket}
                  addToBasket={props.addToBasket}
                  removeFromBasket={props.removeFromBasket}
                  hideBasket={hideBasket}
                />

                {emptyBasket >= 1 && (
                  <Pay
                    basket={props.basket}
                    addToUserOrder={props.addToUserOrder}
                    resetBasket={props.resetBasket}
                    displayBasket={displayBasket}
                    ThankYouForOrdering={ThankYouForOrdering}
                  />
                )}

                <Confirm
                  userOrder={props.userOrder}
                  queue={props.queue}
                  serving={props.serving}
                />
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

// function Formfill(props) {
//   console.log(props);
//   return (
//     <div className="row justify-content-center">
//       <div className="col d-flex justify-content-center">
//         <h2>{props.progress}%</h2>
//       </div>
//     </div>
//   );
// }
