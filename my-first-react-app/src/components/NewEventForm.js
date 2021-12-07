import './NewEventForm.css'
import {useState} from 'react'

export default function NewEventForm({addEvent}) {

  const [title,setTitle] = useState("");
  const [date,setDate] = useState("");

  const resetForm = () => {
    setTitle('')
    setDate('')
  }
  const handleSubmit = (e) => {
    e.preventDefault()

    const event = {
      title: title,
      date: date,
      id: Math.floor(Math.random() * 100000)
    }
    addEvent(event)
    resetForm()
  }
  return (
    <form className="new-event-form" onSubmit = {handleSubmit}>
      {/* <label htmlFor="title">Event Title:</label>
      <input type="text" id="title" /> */}
      <label>
        <span>Event Title:</span>
        <input type="text" value = {title} onChange = { (e) => {setTitle(e.target.value)}}/>
      </label>
      <label>
        <span>Event Date:</span>
        <input type="date" value = {date} onChange = { (e) => {setDate(e.target.value)}}/>
      </label>
      <button>Submit</button>
      <p>title - {title}</p>
      <p>date - {date}</p>
      <p onClick={resetForm}> reset the form</p>
    </form>
  )
}
