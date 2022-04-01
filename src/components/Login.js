import React, { useState } from 'react'
import GoogleLogin from 'react-google-login'

const Login = () => {
   const [loginData, setLoginData] = useState(
      localStorage.getItem('loginData')
         ? JSON.parse(localStorage.getItem('loginData'))
         : null
   )
   const handleFailure = (result) => {
      alert(result)
   }

   const handleLogin = async (googleData) => {
      console.log(googleData)

      const res = await fetch('/api/google-login', {
         method: 'POST',
         body: JSON.stringify({
            token: googleData.tokenId
         }),
         headers: {
            'Content-Type': 'application/json'
         }
      })

      const data = await res.json()
      setLoginData(data)
      localStorage.setItem('loginData', JSON.stringify(data))
   }

   return (
      <div>
         <h1>Invoicer</h1>
         <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            buttonText="Log in with Google"
            onSuccess={handleLogin}
            onFailure={handleFailure}
            cookiePolicy={'single_host_origin'}
         ></GoogleLogin>
      </div>
   )
}

export default Login
