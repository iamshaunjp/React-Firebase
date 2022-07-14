import "./NewEventForm.css";

import React, { useState } from "react";

export default function NewEventForm({ addEvent }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("manchester");

  const resetForm = () => {
    setTitle("");
    setDate("");
    setLocation("manchester");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // prevent browswer refresh

    //create a new event obj
    const event = {
      title: title,
      date: date,
      id: Math.floor(Math.random() * 10000), //This is a very bad way to actually assign random ids, this is just for the purpose of demonstration
      location: location,
    };
    console.log(event);
    resetForm();
    addEvent(event); //this is the function prop leading back to App.js
  };

  //     const handleChange=(e)=>{/**we get access to the event parameter. in thiss case. its input as e.target.value */
  // setTitle(e.target.value)
  //     }
  return (
    <form className="new-event-form" onSubmit={handleSubmit}>
      {/* <label htmlFor=""></label>{/**htmlFor is jsx for "for", it says wheret titles for 
 <input type="text" /> alternatively doe u can use label as the container div and chuck a span in and that achieves same fing*/}

      <label>
        <span>Event title</span>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        {/* e = the event (fing we changing) so e.target.value just shows us what we typed */}
        {/* Value=title means whats in the textbox = the state. so if we cclear the state, it clears whats been typed in already */}
      </label>

      <label>
        <span>Event Date:</span>
        <input
          type="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />
      </label>
      <label>
        <span>Event Location:</span>
        <select onChange={(e) => setLocation(e.target.value)}>
          <option value="manchester">manchester</option>
          <option value="london">london</option>
          <option value="cardiff">cardiff</option>
        </select>
      </label>

      <button>Submit</button>
      {/* <p>Title-{title}, date-{date}</p>
      <p onClick={resetForm} >reset the form</p> */}
    </form>
  );
}
