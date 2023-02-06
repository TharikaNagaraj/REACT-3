import React from "react";
import { useState } from "react";
import { addNumber } from "../../actions/numberActions";
import { useDispatch } from "react-redux";

const AddNumber = (props) => 
{
    const [num,setNum] = useState("")
    const dispatch = useDispatch()
    const handleChange = (e) => 
    {
        const input = e.target.value
        console.log(input)
        setNum(input)
    }
    const handleSubmit = (e) => 
    {
        e.preventDefault()
        const numObj = {
            id : Number(new Date()),
            number : Number(num) 
        }
        dispatch(addNumber(numObj))
        setNum("")
    }
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" value={num} placeholder="Add number" onChange={handleChange}/>
        </form>
    )
}
export default AddNumber