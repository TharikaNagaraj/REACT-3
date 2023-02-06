import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { increment,decrement,remove } from '../../actions/numberActions'


const NumbersList = (props) => 
{
    const numbers = useSelector((state) => 
    {
        return(state.numbers)
    })
    const dispatch = useDispatch()

    const handleIncrement = (id) =>
    {
        dispatch(increment(id))
    }
    const handleDecrement = (id) => 
    {
        dispatch(decrement(id))
    }
    const handleRemove = (id) => 
    {
        dispatch(remove(id))
    }
    return(
        <div>
            <h2>Numbers Listings</h2>
            <ul>
                {numbers.map((num) => 
                {
                    return(<li key={num.id}>{num.number}{"  "}<button onClick={(e) => {handleIncrement(num.id)}}>+</button>{"    "}<button onClick={(e) => {handleDecrement(num.id)}}>-</button>{"    "}<button onClick={(e) => {handleRemove(num.id)}}>x</button>{"    "}</li>)
                })}
            </ul>
        </div>
    )
}
export default NumbersList