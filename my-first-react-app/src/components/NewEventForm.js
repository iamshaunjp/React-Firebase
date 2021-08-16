import './NewEventForm.css'

export default function NewEventForm() {
  return (
    <form className="new-event-form">
      {/* <label htmlFor="title">Event Title:</label>
      <input type="text" id="title" /> */}
      <label>
        <span>Event Title:</span>
        <input type="text" />
      </label>
      <label>
        <span>Event Date:</span>
        <input type="date" />
      </label>
      <button>Submit</button>
    </form>
  )
}
