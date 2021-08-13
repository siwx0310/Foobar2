import React, {useState, useEffect} from "react";
import MostPopularNowBeer from "./MostPopularNowBeer";

export default function MostPopularNow(props) {
    const [beerPopularity, setBeerPopularity] = useState([]);
    const [lastOrder, setLastOrder] = useState(0);

    useEffect(() => {
        let result = beerPopularity;
        let tempLastOrder = lastOrder;

        props.orders.forEach(order=>{
            if (order.id <= tempLastOrder) {
                return;
            } else {
                order.order.forEach(beer => {
                    const index = result.findIndex(item=>item.name === beer);
                    if (index === -1) {
                        result.push({name: beer, popularity: 1});
                    } else {
                        result[index].popularity += 1;
                    }
                })
            }
            tempLastOrder = order.id;
        })

        setBeerPopularity(result);
        setLastOrder(tempLastOrder);
    }, [props.orders]);

    const beerPopularityCopy = beerPopularity;
    const sortedList = beerPopularityCopy.sort(compare);
    function compare(a,b) {
        if (a["popularity"] > b["popularity"]) {
            return -1;
        }
    }
    const topThree = sortedList.slice(0,3);
    const beerComponent = topThree.map((item) => <MostPopularNowBeer key={item.name} {...item} topThree={topThree}/>)

    return(
        <div className="row mb-3">
            <div className="card">
                <div className="card-body component">
                    <div className="row">
                        <h2>Most popular now</h2>
                    </div>
                    <div className="row">
                        {beerComponent}
                    </div>
                </div>
            </div>
        </div>
    )
}