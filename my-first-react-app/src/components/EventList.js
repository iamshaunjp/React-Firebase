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
export default function EventList({ events, handleClick }) {
  return events.map((event, i) => (
    <div key={i}>
      <h2>{i}-{event.title}</h2>
      <button onClick={() => handleClick(event.id)}>delete</button>
    </div>
  ));
}
