import React from 'react'
import { createRoot, ReactDOM } from 'react-dom/client'
import { Provider } from 'react-redux'
import storeSetUp from './store/configureStore'
import App from './App'
import {BrowserRouter} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min"

const store = storeSetUp()
//console.log(store.getState())
store.subscribe(() => 
{
  console.log('store updated',store.getState())
})
const rootElement =document.getElementById('root')
const root = createRoot(rootElement)
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>
)
