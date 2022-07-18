import React, { useState } from "react";
import { useFetch } from "../hooks/useFetch";
//styles
import "./TripList.css";
export default function TripList() {
  // const [trips, setTrips] = useState([]);
  const [url, setUrl] = useState("http://localhost:3000/trips");


  const { data: trips, isPending,error } = useFetch(url);//this calls useFetch with the url, and when ready it returns data and the status of isPending
 
  console.log(trips);
  //data from useFetch = trips

  // //asynchronous fetch func
  // const fetchTrips = useCallback(async () => {
  //   const response = await fetch(url);
  //   const json = await response.json();
  //   setTrips(json);
  // }, [url]);

  // useEffect(() => {
  //   fetchTrips();
  // }, [fetchTrips]);
  // useEffect(() => {
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((json) => setTrips(json));//grab the trips from DB and set it to be the array we have
  // }, [url]);

  return (
    <div className="trip-list">
      <h2>Trip List</h2>
      {isPending&&<div>Loading Trips</div>}
      {error&&<div><h2>Error:</h2>
      <p> {error}</p> </div>}
      <ul>
        {/* only if trips isnt null, show trips */}
        {trips &&
          trips.map((trip) => (
            <li key={trip.id}>
              <h2>{trip.title}</h2>
              <p>{trip.price}</p>
            </li>
          ))}
      </ul>
      <div className="filter">
        {/* clicking these will re-call the URL cause its being monitored in useEffect */}
        <button
          onClick={() => setUrl("http://localhost:3000/trips?loc=europe")}
        >
          {/* this above url iss a query where loc must = europe */}
          European Trips
        </button>
        <button onClick={() => setUrl("http://localhost:3000/trips")}>
          All Trips
        </button>
      </div>
    </div>
  );
}
