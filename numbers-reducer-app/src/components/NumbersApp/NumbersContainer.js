import React from 'react'
import { useSelector } from 'react-redux'
import NumbersList from './NumbersList'
import NumbersControl from './NumbersControl'
import AddNumber from './AddNumber'
import {Link,Route} from 'react-router-dom'
import Home from './Home'
import Users from './Users'

const NumbersContainer = (props) => 
{
    const numbers = useSelector((state) => 
    {
        return(state.numbers)
    })
    const findSum = () => 
    {
        let sum = 0
        numbers.forEach(ele => {
            sum += ele.number
        })
        return sum
    }
    return (
        <div>
            <h2>Listing - {numbers.length} , Sum - {findSum()}</h2>
            <NumbersList/>
            <NumbersControl/><br />
            <AddNumber/>
            <Link to="/home">Home</Link> |
            <Link to="/users">Users</Link>

            <Route path="/home" component={Home} />
            <Route path="/users" component={Users} exact={true} />
        </div>
    )
}
export default NumbersContainer