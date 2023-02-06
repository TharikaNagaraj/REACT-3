import React from 'react'
import { addNumber,addPlusTwo,removeAll } from '../../actions/numberActions'
import { useDispatch } from 'react-redux'

const NumbersControl = (props) => 
{
    const dispatch = useDispatch()
    const generateNumber = () => 
    {
        const randomNumber = Math.round(Math.random() * 100)
        console.log(randomNumber)
        //console.log(Number(new Date()))
        const randomObj = {
            id : Number(new Date()),
            number : randomNumber
        }
        dispatch(addNumber(randomObj))

    }
    const handleplusTwo = () => 
    {
        dispatch(addPlusTwo())
    }
    const handleRemoveAll = () => 
    {
        dispatch(removeAll())
    }

    return(
        <div>
            <button onClick={generateNumber}>Generate</button>{" "}
            <button onClick={handleplusTwo}>+ 2</button>{" "}
            <button onClick={handleRemoveAll}>Remove All</button>{" "}
        </div>
    )
}
export default NumbersControl