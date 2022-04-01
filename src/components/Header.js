import React from 'react'

const Header = () => {
   return (
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
         </div>
      </header>
   )
}

export default Header
