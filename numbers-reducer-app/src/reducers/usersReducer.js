const initialSState = []
const usersReducer = (state =initialSState , action) => 
{
    switch(action.type)
    {
        case "SET_USERS" : {
            return [...state,...action.payload]
        }
        default : {
            return [...state]
        }
    }
}
export default usersReducer