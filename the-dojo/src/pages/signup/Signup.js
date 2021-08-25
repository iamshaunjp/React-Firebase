import { useState } from 'react'

// styles
import './Signup.css'

export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [thumbnail, setThumbnail] = useState(null)
  
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(email, password, displayName)
  }

  return (
    <form onSubmit={handleSubmit} className="auth-form">
      <h2>sign up</h2>
      <label>
        <span>email:</span>
        <input type="email" onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        <span>password:</span>
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
      </label>
      <label>
        <span>display name:</span>
        <input type="text" onChange={(e) => setDisplayName(e.target.value)} />
      </label>
      <label>
        <span>Profile thumbnail:</span>
        <input type="file" />
      </label>
      <button className="btn">Sign up</button>
    </form>
  )
}
