import React from 'react'
import MoviesContainer from './MoviesContainer'
import "bootstrap/dist/css/bootstrap.min.css"
const App =() => 
{
  return(
    // <div className="row m-5" >
    <div>
    <div className="row mt-3 ml-4 p-4" >
      <h1 className="col-md-12" style={{fontFamily:"Georgia",fontWeight:"bolder"}}>My Big Movie List</h1>
    </div>
    <div className='m-4'>< MoviesContainer/></div>
    </div>
  )
}
export default App