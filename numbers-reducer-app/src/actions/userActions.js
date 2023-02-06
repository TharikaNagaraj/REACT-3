import axios from 'axios'

export const startGetUsers = () => 
{
    return((dispatch) => 
    {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            const output = response.data
            dispatch(setUsers(output))
            // dispatch({
            //     type:"SET_USERS",
            //     payload:output
            // })
            //console.log(output)
        })
        .catch((err) => 
        {
            alert(err.message)
        })
    })
}

export const setUsers = (users) => 
{
    return{
        type : "SET_USERS",
        payload : users
    }
}