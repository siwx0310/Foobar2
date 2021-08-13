import React, { useState } from "react";
import { Carousel } from "3d-react-carousal";
import LazyLoad from "react-lazyload";
import cleanImageName from "../helpers/cleanImageName.js";
import Star from "./Star";

export default function Product(props) {
  const avgRating = props.popularity.toFixed(1);

  const [amount, setAmount] = useState(0);
  let onTap = false;

  function clickedPlus() {
    setAmount((prevState) => {
      return prevState + 1;
    });
  }

  function clickedMinus() {
    setAmount((prevState) => {
      return prevState - 1;
    });
  }

  function resetAmount() {
    setAmount((prevState) => {
      return prevState * 0;
    });
  }

  props.data.taps.forEach((tap) => {
    const tapBeer = tap.beer;
    if (tapBeer === props.name) {
      onTap = true;
      return onTap;
    }
  });

  let slides = [
    <div className="carousel" key={`${props.name}+1`}>
      <h2>Aroma</h2>
      <p>{props.description.aroma}</p>
    </div>,
    <div className="carousel" key={`${props.name}+2`}>
      <h2>Appearance</h2>
      <p>{props.description.appearance}</p>
    </div>,
    <div className="carousel" key={`${props.name}+3`}>
      <h2>Flavor</h2>
      <p>{props.description.flavor}</p>
    </div>,
    <div className="carousel" key={`${props.name}+4`}>
      <h2>Mouthfeel</h2>
      <p>{props.description.mouthfeel}</p>
    </div>,
  ];

  const imagePath = cleanImageName(props.name);
  const imageAlt = `Label of ${props.name}`;

  const lowerCaseName = getNewId(props.name);
  const accordionId = `${lowerCaseName}Accordion`;
  const dataBsParent = `#${accordionId}`;
  const headingId = `${lowerCaseName}Heading`;
  const collapseId = `${lowerCaseName}Collapse`;
  const dataBsTarget = `#${collapseId}`;

  return (
    <article className="beerComponent row mb-3">
      <div className="card">
        <div className="card-body component">
          <div className="row pb-3 justify-content-center">
            <div className="col-4 col-md-3 col-lg-2 pb-3 pb-md-0">
              <LazyLoad height={200} once={true} offset={100}>
                <img src={imagePath} alt={imageAlt}></img>
              </LazyLoad>
            </div>
            <div className="col-12 col-md-9">
              <div className="row pb-3 pb-md-0">
                <div className="col-12 col-md-9">
                  <h2 className="text-center text-md-start">{props.name}</h2>
                  <div className="row">
                    <div className="col-4 col-md-5 text-start">
                      <p className="beerInfo">{props.category}</p>
                    </div>
                    <div className="col-4 col-md-3 text-center">
                      <p className="beerInfo">Alc: {props.alc}</p>
                    </div>
                    <div className="col-4 d-flex justify-content-end">
                      <p className="beerInfo">{avgRating}</p>
                      <Star />
                    </div>
                  </div>
                </div>
                <div className="col-3 d-none d-md-block text-end">
                  <p className="price">{props.price},-</p>
                </div>
              </div>
              <div className="row pb-md-3">
                <div className="col">
                  <p>{props.description.overallImpression}</p>
                </div>
              </div>
              <div className="row pt-md-3">
                <div className="col-12 d-md-none text-end">
                  <p className="price">{props.price},-</p>
                </div>
                <div className="col-12">
                  <p className="notontap" hidden={onTap === true}>
                    This beer is not on tap today
                  </p>
                  <div
                    className="row justify-content-center"
                    hidden={onTap === false}
                  >
                    <div className="col-10 col-md-6 col-lg-7 col-xl-8 d-flex justify-content-center justify-content-md-end pb-3 pb-md-0">
                      <button
                        className="btn btn-primary btn-amount"
                        disabled={amount === 0}
                        onClick={clickedMinus}
                      >
                        -
                      </button>
                      <div className="amount d-flex align-items-center justify-content-center mx-4">
                        <p className="mb-0">{amount}</p>
                      </div>
                      <button
                        className="btn btn-primary btn-amount"
                        onClick={() => {
                          clickedPlus();
                        }}
                        disabled={onTap === false}
                      >
                        +
                      </button>
                    </div>
                    <div className="col-10 col-md-6 col-lg-5 col-xl-4 d-flex justify-content-center justify-content-md-end">
                      <button
                        onClick={() => {
                          resetAmount();
                          props.addToBasket(props, amount);
                        }}
                        disabled={amount === 0}
                        className="btn btn-primary"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row pt-3">
            <div className="accordion" id={accordionId}>
              <div className="accordion-item">
                <h2 className="accordion-header" id={headingId}>
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={dataBsTarget}
                    aria-expanded="false"
                    aria-controls={collapseId}
                  >
                    View more
                  </button>
                </h2>
                <ul className="dropdown-menu w-100"></ul>
                <div
                  id={collapseId}
                  className="accordion-collapse collapse"
                  aria-labelledby={headingId}
                  data-bs-parent={dataBsParent}
                >
                  <div className="accordion-body p-0">
                    <Carousel
                      slides={slides}
                      autoplay={false}
                      interval={1000}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

function getNewId(props) {
  const propsLowerCase = props.toLowerCase().replaceAll(" ", "");
  return propsLowerCase;
}
