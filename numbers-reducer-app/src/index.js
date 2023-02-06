import React from'react'
import ReactDom, { createRoot } from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import numberActions from 'redux'
import configureStore from './store/configureStore'
import { BrowserRouter } from 'react-router-dom'


const store = configureStore()
console.log(store)
console.log(store.getState())
store.subscribe(() => 
{
  console.log('store subscribed',store.getState())
})
const rootElement = document.getElementById('root')
const root = createRoot(rootElement)
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>
  
)