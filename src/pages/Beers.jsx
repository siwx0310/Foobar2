import React, { useState } from "react";
import Product from "../components/Product";
import Foobar from "../components/Foobar";

export default function Beers(props) {
  const [filterBy, setFilterBy] = useState("*");
  const [sortKey, setSortKey] = useState("name");
  const [sortDirection, setSortDirection] = useState("asc");

  const productsList = props.products.map(beer => {
    const ratingIndex = props.ratings.findIndex(item=>item.beer_name === beer.name);
    const avgRating = props.ratings[ratingIndex].avg;
    beer.popularity = avgRating;
    beer.price = 49;
    if (filterBy === "*") {
      return beer;
    } else if (beer.category.toLowerCase() === filterBy.toLowerCase()) {
      return beer;
    }
  });

  productsList.sort(compare);
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

  const productComponents = productsList.map((item) => (item ? <Product key={item.name} {...item} data={props.data} addToBasket={props.addToBasket} /> : ""));

  return (
    <main className="container pb-5-rem">
      <div className="row justify-content-center pb-5">
        <nav className="beersNav col-12 col-md-10 d-md-flex justify-content-center">
          <div className="dropdown d-flex justify-content-center pb-3 pb-md-0 px-md-3">
            <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuFilter" data-bs-toggle="dropdown" aria-expanded="false">
              Filter type
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuFilter">
              <li className="dropdown-item" onClick={() => setFilterBy("*")}>All beers</li>
              <li className="dropdown-item" onClick={() => setFilterBy("Hefeweizen")}>Hefeweizen</li>
              <li className="dropdown-item" onClick={() => setFilterBy("IPA")}>IPA</li>
              <li className="dropdown-item" onClick={() => setFilterBy("Oktoberfest")}>Oktoberfest</li>
              <li className="dropdown-item" onClick={() => setFilterBy("European lager")}>European lager</li>
              <li className="dropdown-item" onClick={() => setFilterBy("Stout")}>Stout</li>
              <li className="dropdown-item" onClick={() => setFilterBy("Belgian specialty ale")}>Belgian specialty ale</li>
              <li className="dropdown-item" onClick={() => setFilterBy("California Common")}>California Common</li>
            </ul>
          </div>
          <div className="dropdown d-flex justify-content-center px-md-3">
            <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuSort" data-bs-toggle="dropdown" aria-expanded="false">
              Sort by
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuSort">
              <li className="dropdown-item"  onClick={() => toggleSort("name")}>Name</li>
              <li className="dropdown-item" onClick={() => toggleSort("alc")}>Alcohol</li>
              <li className="dropdown-item" onClick={() => toggleSort("popularity")}>Popularity</li>
              <li className="dropdown-item"  onClick={() => toggleSort("price")}>Price</li>
            </ul>
          </div>
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
