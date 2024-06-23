import { useState } from 'react'
import React from 'react'

const LoginComponent = () => {
  const[email, setEmail] = useState('')
  const[password, setPassword] = useState('')
  const [disable, setDisabled] = useState(false)
  const [errors, setErrors] = useState('')

  const handleLogin = (e) =>{
    const passwordLogin = '1234567'
   if (password === passwordLogin) {
   return alert("login successful")
   }else{
     setErrors('wrong password or email')

   }
   
      
   }

  return (
    <div>
      <form onSubmit={handleLogin}>
     <p><input type="text" value={email} onChange={(e) =>(setEmail(e.target.value))} placeholder='Enter email'/></p>
     <p><input type="password" value={password} onChange={(e) =>(setPassword(e.target.value))} placeholder='Enter password'/></p>
     <button type='submit'  id='btn' disabled={!email || password.length < 6}>Login</button>
     </form>

     <div className = "errorMessage">
         <p>{errors}</p>
       
     </div>




      
    </div>
  )
}

export default LoginComponent



