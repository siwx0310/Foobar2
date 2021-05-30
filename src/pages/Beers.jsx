import React, { useState } from "react";
import Product from "../components/Product";
import Foobar from "../components/Foobar";

export default function Beers(props) {
  const productComponents = props.products.map((item) => (
    <Product
      key={item.name}
      {...item}
      data={props.data}
      addToBasket={props.addToBasket}
      ratings={props.ratings}
    />
  ));

  const [sortKey, setSortKey] = useState("name");
  const [sortDirection, setSortDirection] = useState("asc");

  props.products.sort(compare);
  function compare(a, b) {
    if (a[sortKey] > b[sortKey]) {
      return sortDirection === "asc" ? 1 : -1;
    } else {
      return sortDirection === "asc" ? -1 : 1;
    }
  }

  function toggleSort(key) {
    if (key === sortKey) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    }
    setSortKey(key);
  }

  return (
    <main className="container pb-5-rem">
      <div className="row justify-content-center">
        <nav className="col-10 d-md-flex justify-content-around beersNav">
          <button className="btn btn-primary" onClick={() => toggleSort("price")}>
            Filter Kind
          </button>
          <button className="btn btn-primary" onClick={() => toggleSort("alc")}>
            Filter Alc
          </button>
          <button
            className="btn btn-primary"
            onClick={() => toggleSort("category")}
          >
            Filter Category
          </button>
          <button
            className="btn btn-primary"
            onClick={() => toggleSort("popularity")}
          >
            Filter Popularity
          </button>
        </nav>
      </div>
      <div className="row justify-content-center">
        <div className="col-12 col-md-10">
          {productComponents}
        </div>
      </div>
    </main>
  );
}
