import React,{useEffect} from "react";
import { useDispatch,useSelector } from "react-redux";
import { startGetUsers } from "../../actions/userActions";

const Users = (props) => 
{
    const dispatch = useDispatch()
    const users = useSelector((state) => 
    {
        return state.users
    })
    useEffect(() => 
    {
        dispatch(startGetUsers())
    },[])
    return(
        <div>
            <h2>Listing Users - {users.length}</h2>
            {users.map((ele) => 
            {
                return (<li key={ele.id}>{ele.name}</li>)
            })}
        </div>
    )
}
export default Users