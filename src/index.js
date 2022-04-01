import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

import itemsReducer from './features/Items'
import countReducer from './features/count'

const store = configureStore({
   reducer: {
      items: itemsReducer,
      count: countReducer
   }
})

ReactDOM.render(
   <Provider store={store}>
      <App />
   </Provider>,
   document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
