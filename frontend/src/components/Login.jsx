import { useState } from "react"
import axios from 'axios';

function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = async (e) => {
        e.preventDefault()

        const response = await axios.post ('http://localhost:3000/login',
            JSON.stringify({email, password}),
            {
                headers: { 'Content-Type' : 'application/json' }

                }
        )
        console.log('login efetuado')
    }

    return(
      <div className="login-form-wrap">
          <h2>Login</h2>
          <form className="login-form">
            
            <input type="email" 
            name="email" 
            placeholder='email' 
            required 
            onChange={(e) => setEmail(e.target.value)}
            />
            
            <input type="password" 
            name="password" 
            placeholder='senha' 
            required
            onChange={(e) => setPassword(e.target.value)} 
            />
            
            <button type="submit" 
            className='btn-login'
            onClick={(e) => handleLogin(e)}>Login</button>
            
          </form>
        </div>
    )
  }

  export default Login