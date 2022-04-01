import './index.css'
import GoogleLogin from 'react-google-login'
import { useState } from 'react'
import Login from './components/Login'
import Header from './components/Header'

import Test from './components/Test'

function App() {
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

   const handleLogout = () => {
      localStorage.removeItem('loginData')
      setLoginData(null)
   }

   return (
      <div className="App login-page">
         <header className="App-header">
            {loginData ? (
               <div>
                  <header className="text-gray-600 body-font">
                     <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                           <img
                              style={{ width: '45px', height: '45px' }}
                              src="https://freeinvoicebuilder.com/wp-content/uploads/2017/09/logo.svg"
                              alt=""
                           />
                           <span className="ml-3 text-xl">Invoicer</span>
                        </a>
                        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center"></nav>
                        <button
                           onClick={handleLogout}
                           className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
                        >
                           Logout
                           <svg
                              fill="none"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              class="w-4 h-4 ml-1"
                              viewBox="0 0 24 24"
                           >
                              <path d="M5 12h14M12 5l7 7-7 7"></path>
                           </svg>
                        </button>
                     </div>
                  </header>
                  <Test />
               </div>
            ) : (
               <div>
                  <section>
                     <Header />
                     <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-col text-center w-full mb-12">
                           <h1
                              style={{
                                 color: 'rgb(99, 102, 241)',
                                 fontWeight: '500',
                                 fontSize: '40px',
                                 zIndex: '5'
                              }}
                              className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900"
                           >
                              Free and Simple invoicing for businesses and
                              individuals.
                           </h1>
                           <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                              Instantly create invoices on the go for free. All
                              you need to do is fill in the invoice and select
                              print or download it as a PDF file. Sign up now.
                           </p>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                           <GoogleLogin
                              clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                              buttonText="Log in with Google"
                              onSuccess={handleLogin}
                              onFailure={handleFailure}
                              cookiePolicy={'single_host_origin'}
                           ></GoogleLogin>
                        </div>
                     </div>
                  </section>
               </div>
            )}
         </header>
      </div>
   )
}

export default App
