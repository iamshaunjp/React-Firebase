//Net ninja solution
// import React from 'react'

// export default function EventList({events,handleClick}) {
//   return (
// <div>
// {
//      events.map((event, index) => (
//         <React.Fragment key={event.id}>
//           <h2>
//             {index} - {event.title}
//           </h2>
//           <button onClick={() => handleClick(event.id)}>delete event</button>
//         </React.Fragment>
//       ))
// }

// </div>
//   )
// }

//My Solution
import React from "react";
export default function EventList({ events, handleClick }) {//These are the props send from App.js - The events array and the click handler function 
  return events.map((event, i) => (
    <div key={i}>{/**Key is needed to cycle array, by default. second property of .map() is an index so use it */}
      <h2>{i}-{event.title}</h2>
      <p>{event.location}</p>
      <button onClick={() => handleClick(event.id)}>delete</button>
    </div>
  ));
}
