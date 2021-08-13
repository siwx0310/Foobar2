import React from "react";
import { Link } from "@reach/router";

export default function Nav(props) {
  const queue = props.queue;
  const userOrder = props.userOrder;
  const serving = props.serving;
  let message;
  if (userOrder.length > 0) {
    const queueIndex = queue.findIndex(item=>item.id === userOrder[0].id);
    const servingIndex = serving.findIndex(item=>item.id === userOrder[0].id);
    if (queueIndex > -1) {
      message = <NoInLine queueIndex={queueIndex}></NoInLine>
    } else if (servingIndex > -1) {
      message = <p className="navbar-text">Your order <br className="d-md-none" />is being served</p>;
    } else {
      message = <p className="navbar-text">You have <br className="d-md-none" />no active orders</p>;
    } 
  } else {
    message = <p className="navbar-text">You have <br className="d-md-none" />no active orders</p>;
  }

  return (
    <nav className="mainNav navbar navbar-light position-fixed text-center">
      <Link className="navbar-brand" to="/">
        <div className="iconContainer">
          <svg className="dashboardIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="#FCF8EF" stroke="#FCF8EF" strokeWidth="1" 
                 strokeLinecap="round" strokeLinejoin="round">
            <g>
              <path d="M61.8,34H36.2C35,34,34,35,34,36.2v25.7c0,1.2,1,2.2,2.2,2.2h20.8c3.9,0,7-3.2,7.1-7.1V36.2C64,35,63,34,61.8,34z
		                  M59.7,56.9c0,1.5-1.2,2.7-2.7,2.7c0,0,0,0,0,0H38.3V38.3h21.3V56.9z"/>
	            <path d="M56.9,0.2H36.2c-1.2,0-2.2,1-2.2,2.2V28c0,1.2,1,2.2,2.2,2.2h25.7c1.2,0,2.2-1,2.2-2.2V7.3C64,3.4,60.8,0.2,56.9,0.2z
	            	      M59.7,25.9H38.3V4.5h18.6c1.5,0,2.7,1.2,2.7,2.7v0V25.9z"/>
	            <path d="M27.9,34H2.3c-1.2,0-2.2,1-2.2,2.2v20.8c0,3.9,3.2,7,7.1,7.1h20.8c1.2,0,2.2-1,2.2-2.2V36.2C30.1,35,29.1,34,27.9,34z
	            	      M25.7,59.7H7.1c-1.5,0-2.7-1.2-2.7-2.7l0,0V38.3h21.3V59.7z"/>
	            <path d="M27.9,0.2H7.1c-3.9,0-7,3.2-7.1,7.1V28c0,1.2,1,2.2,2.2,2.2h25.7c1.2,0,2.2-1,2.2-2.2V2.4C30.1,1.2,29.1,0.2,27.9,0.2z
	            	      M25.7,25.9H4.4V7.3c0-1.5,1.2-2.7,2.7-2.7l0,0h18.6V25.9z"/>  
            </g>
          </svg>
        </div>
      </Link>
      <Link className="navbar-brand" to="beers">
        <div className="iconContainer">
          <svg className="beerIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" fill="#FCF8EF" stroke="#FCF8EF" strokeWidth="4" 
                 strokeLinecap="round" strokeLinejoin="round">
            <path d="M39.9,63.9h1.4c0.8,0,1.4,0.6,1.4,1.4v29.4c0,0.8-0.6,1.4-1.4,1.4h-1.4c-0.8,0-1.4-0.6-1.4-1.4V65.3
	                  C38.5,64.6,39.1,63.9,39.9,63.9z"/>
            <path d="M55.6,63.9H57c0.8,0,1.4,0.6,1.4,1.4v29.4c0,0.8-0.6,1.4-1.4,1.4h-1.4c-0.8,0-1.4-0.6-1.4-1.4V65.3
            	      C54.2,64.6,54.9,63.9,55.6,63.9z"/>
            <path d="M101.9,51.5c-2-1.8-4.5-2.7-7.2-2.7h-6.3v-1.2C94.8,45.1,99,38.9,99,31.9c0.1-8.9-6.9-16.4-15.8-16.8
            	      C78.2,6.1,68.7,0.5,58.3,0.6c-11.5,0-21.6,6.6-25.7,16.5h-0.6c-9.3,0-16.9,7.6-16.9,16.9c0,3.8,1.3,7.5,3.6,10.5v11.9
            	      c0,3.3,2.3,6.1,5.6,6.8v41.1c0,0.5,0.1,0.9,0.1,1.4c-3.7,0.7-6.2,4.3-5.5,8c0.6,3.3,3.4,5.6,6.7,5.7h61.4c3.8,0,6.9-3.1,6.9-6.9
            	      c0-3.3-2.4-6.2-5.7-6.7c0.1-0.5,0.1-0.9,0.1-1.4v-1.4h6.4c2.6,0,5.2-1,7.1-2.7c2-2,3-4.7,2.9-7.5V59.1
            	      C104.9,56.3,103.9,53.5,101.9,51.5z M91.1,112.5c0,2.3-1.8,4.1-4.1,4.1c0,0,0,0,0,0H25.6c-2.3,0-4.1-1.8-4.1-4.1
            	      c0-2.3,1.8-4.1,4.1-4.1c0,0,0,0,0,0H87C89.3,108.4,91.1,110.3,91.1,112.5z M69.1,77.3H70v17.5c0,0.8,0.6,1.4,1.4,1.4h1.4
            	      c0.8,0,1.4-0.6,1.4-1.4V76.2c2-1.3,3.3-3.5,3.3-5.9V47.8c0.6,0.2,1.2,0.4,1.8,0.5h0.3c0.6,0.1,1.2,0.2,1.8,0.3h0.1
            	      c0.3,0,0.7,0,1.1,0h0.6h0.6c0.5,0,0.9-0.1,1.4-0.2h0.3v55.8c0,0.5-0.1,0.9-0.2,1.4h-58c-0.1-0.5-0.2-0.9-0.2-1.4V63.4l0,0
            	      c3.9,0,7-3.1,7-7v-5.6c3.1-0.4,6-1.6,8.4-3.5c4.7,3.1,10.2,4.7,15.8,4.7c1.3,0,2.5-0.1,3.8-0.3v18.6C62.1,74.1,65.2,77.3,69.1,77.3
            	      C69.1,77.3,69.1,77.3,69.1,77.3z M86.7,45.3h-0.1l-0.3,0.1c-1,0.3-2,0.4-3,0.5h-0.4c-0.3,0-0.5,0-0.8,0h-0.6l-0.8-0.1l-0.6-0.1
            	      l-0.8-0.2c-0.2,0-0.5-0.1-0.7-0.2s-0.4-0.1-0.6-0.2c-0.4-0.2-0.9-0.4-1.3-0.6l-2-1v26.8c0,2.3-1.9,4.2-4.2,4.2h-1.4
            	      c-2.3,0-4.2-1.9-4.2-4.2V48.4l-1.6,0.3c-1.6,0.3-3.3,0.5-4.9,0.5c-5.4,0-10.7-1.6-15.1-4.8l-0.9-0.7l-0.8,0.8
            	      c-2.4,2.2-5.6,3.5-8.9,3.6h-1.4v8.3c0,2.3-1.9,4.2-4.2,4.2l0,0h-1.4h-0.3c-2.2-0.1-4-2-3.9-4.2V43.5l-0.3-0.4
            	      c-5-6-4.3-14.9,1.7-19.9c2.5-2.1,5.8-3.3,9.1-3.3c0.4,0,0.9,0,1.4,0.1c4.7,0.5,8.8,3.3,11.2,7.4l2.4-1.4c-2.4-4.3-6.6-7.3-11.4-8.4
            	      C41.8,5,57.1-0.1,69.7,6.2c4.8,2.4,8.8,6.3,11.2,11.1l0.3,0.7c0.5,1.2,0.8,2.4,1.1,3.6l0.5,6.4c-0.1,1.7-0.4,3.4-0.9,5l2.7,0.8
            	      c1.6-5.1,1.5-10.6-0.3-15.7c7.7,1.3,12.8,8.6,11.5,16.2C95,39.4,91.5,43.6,86.7,45.3z M88.3,57.4h6.5c0.4,0,0.8,0.1,1.1,0.4
            	      c0.3,0.4,0.4,0.9,0.3,1.4v33.6c0.1,0.5-0.1,1-0.3,1.4c-0.3,0.2-0.7,0.4-1.1,0.4h-6.5L88.3,57.4z M102,73.7v19
            	      c0.1,2.1-0.6,4.1-2.1,5.6c-1.5,1.3-3.3,2-5.3,1.9h-6v-3.1h6c1.2,0,2.3-0.4,3.2-1.1c0.9-0.9,1.3-2.1,1.2-3.3V59.1
            	      c0.1-1.2-0.3-2.5-1.2-3.4c-0.9-0.7-2-1.1-3.2-1.1h-6v-2.9h5.9c1.9,0,3.8,0.7,5.3,1.9c1.5,1.5,2.2,3.5,2.1,5.6L102,73.7z"/>
          </svg>
        </div>
      </Link>
        {message}
      <Link className="navbar-brand" to="cart">
        <div>
          <div className="iconContainer">
            <svg className="cartIcon" viewBox="0 0 20 19" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#FCF8EF" stroke="transparent" strokeWidth="1" 
                 strokeLinecap="round" strokeLinejoin="round">
                <g transform="translate(-140.000000, -3120.000000)">
                  <g transform="translate(56.000000, 160.000000)">
                    <path d="M98.477,2976.95566 L89.541,2976.95566 C89.052,2976.95566 88.635,2976.59484 88.555,2976.10113 L87.361,2968.77831 L100.819,2968.77831 L99.46,2976.12362 C99.37,2976.60608 98.958,2976.95566 98.477,2976.95566 L98.477,2976.95566 Z M101,2966.73398 L97.473,2960.51101 C97.198,2960.02651 96.592,2959.85887 96.116,2960.1369 L96.116,2960.1369 C95.635,2960.41697 95.47,2961.04356 95.747,2961.53216 L98.69,2966.73398 L89.309,2966.73398 L92.257,2961.53625 C92.532,2961.0497 92.371,2960.42822 91.897,2960.14405 L91.888,2960.13894 C91.411,2959.85478 90.798,2960.02037 90.522,2960.50897 L87,2966.73398 L85,2966.73398 C84.447,2966.73398 84,2967.19191 84,2967.75614 C84,2968.32038 84.447,2968.77831 85,2968.77831 L85.333,2968.77831 L86.721,2977.29196 C86.882,2978.27733 87.716,2979 88.694,2979 L99.305,2979 C100.283,2979 101.118,2978.27733 101.278,2977.29196 L102.666,2968.77831 L103,2968.77831 C103.552,2968.77831 104,2968.32038 104,2967.75614 C104,2967.19191 103.552,2966.73398 103,2966.73398 L101,2966.73398 Z" id="shopping_cart_round-[#1137]"></path>
                  </g>
                </g>
            </svg>
            <div className="totalAmount">{props.totalAmount}
            </div>
          </div>
        </div>
      </Link>
      <Link className="navbar-brand" to="ratings">
        <div className="iconContainer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" 
                 fill="transparent" stroke="#FCF8EF" strokeWidth="2" 
                 strokeLinecap="round" strokeLinejoin="round" 
                 className="starIcon">
              <polygon points="12,1.8 15.3,8.5 22.7,9.6 17.4,14.8 18.6,22.2 12,18.7 5.4,22.2 6.6,14.8 1.3,9.6 8.7,8.5 "/>
            </svg>
        </div>
      </Link>
    </nav>
  );
}

function NoInLine(props) {
  return (
    <p className="navbar-text">You are <br className="d-md-none" />no. <span>{props.queueIndex + 1}</span> in line</p>
  )
}