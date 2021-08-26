import { useState } from 'react'

// styles
import './Login.css'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(email, password)
  }

  return (
    <form onSubmit={handleSubmit} className="auth-form">
      <h2>login</h2>
      <label>
        <span>email:</span>
        <input
          required
          type="email" 
          onChange={(e) => setEmail(e.target.value)} 
          value={email} 
        />
      </label>
      <label>
        <span>password:</span>
        <input 
          required
          type="password" 
          onChange={(e) => setPassword(e.target.value)} 
          value={password} 
        />
      </label>
      <button className="btn">Log in</button>
    </form>
  )
}
