import "./App.css";
import React, { useState } from "react";
import Title from "./components/Title";
import Modal from "./components/Modal";
import EventList from "./components/EventList";
function App() {
  const [showModal, setShowModal] = useState(false);
  const [showEvents, setShowEvents] = useState(true);
  const [events, setEvents] = useState([
    { title: "mario's birthday bash", id: 1 },
    { title: "bowser's live stream", id: 2 },
    { title: "race on moo moo farm", id: 3 },
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
      <button onClick={() => setShowModal(true)}>Trigger Modal</button>
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

        {showEvents && <EventList events={events} handleClick={handleClick}/>/**Create custom prop to passs to child which is events and the handler func */}

      {showModal && (
        <Modal handleClose={handleClose}>
          {/*Handle close is a prop we send to the fingy */}
          <h2>Terms and Conditions</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error odit
            nam et reprehenderit quibusdam temporibus officia dolorum quo sint
            nemo quis, laborum, quasi nisi fugit praesentium debitis
            repudiandae! Sapiente, omnis.
          </p>
        </Modal>
      )}
    </div>
  );
}

export default App;
