import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { numberIncrement,numberIncrementBy } from './actions/numberActions'
import NumbersContainer from './components/NumbersApp/NumbersContainer'

const App = (props) => 
{
    const dispatch = useDispatch()
    
  return(
    <div>
      <h1>Random Number Generator</h1>
      <NumbersContainer/>
    </div>
  )
}
export default App