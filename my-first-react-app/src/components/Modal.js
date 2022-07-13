import './Modal.css'
import ReactDOM from 'react-dom'
export default function Modal({ children, handleClose }) {//receives the props destructured, when close button the handleClose thing is linked thru props so it will close even tho the func is in the app.js
  return ReactDOM.createPortal((
    <div className="modal-backdrop">
      <div className="modal">
        {children}
        <button onClick={handleClose}>Close</button>
      </div>
    </div>
  ),document.body)
}
