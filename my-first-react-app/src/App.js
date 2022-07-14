import "./App.css";
import React, { useState } from "react";
import Title from "./components/Title";
import Modal from "./components/Modal";
import EventList from "./components/EventList";
import NewEventForm from "./components/NewEventForm";
function App() {
  const [showModal, setShowModal] = useState(false);
  const [showEvents, setShowEvents] = useState(true);
  const [events, setEvents] = useState([
  ]);

//this gets passed into the new event form so we can add events
const addEvent=(event)=>{
  //prevEvents is current state. we have accesss to that automatically
  setEvents((prevEvents)=>{
    return[...prevEvents,event]//create new array with all the previous events +the new event
  })
  //after a new event has been added, close modal
  setShowModal(false);
}
  // { title: "mario's birthday bash", id: 1 },
  // { title: "bowser's live stream", id: 2 },
  // { title: "race on moo moo farm", id: 3 },


  const [differentEvents,setDifferentEvents]=useState([
    {title:"i am a different event",id:1}
  ]);

  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => id !== event.id);
    });
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const subtitle = "All the latest events in Marioland";

  return (
    <div className="App">
      <button onClick={() => setShowModal(true)}>Add New Event</button>
      <br />
      <Title title="Marioland Events" subtitle={subtitle} />

      {showEvents && (
        <div>
          <button onClick={() => setShowEvents(false)}>Hide Events</button>
        </div>
      )}
      {!showEvents && (
        <div>
          <button onClick={() => setShowEvents(true)}>Show Events</button>
        </div>
      )}

      {/* {showEvents &&
        events.map((event, index) => (
          <React.Fragment key={event.id}>
            <h2>
              {index} - {event.title}
            </h2>
            <button onClick={() => handleClick(event.id)}>delete event</button>
          </React.Fragment>
        ))} */}

{/**having the event list as its own component that takes the events array as a prop means we can
 * swap out the events its taking. For example i can use events or differentEvents as the prop i pass
 */}
        {showEvents && <EventList events={events} handleClick={handleClick}/>/**Create custom prop to passs to child which is events and the handler func */}

      {showModal && (
        <Modal handleClose={handleClose}>{/**this stuff inside the modal is rendered on model.js as "children props" */}
          {/*Handle close is a prop we send to the fingy */}
       <NewEventForm addEvent={addEvent}/>
        </Modal>
      )}
    </div>
  );
}

export default App;
