
const initialState = []

const numberReducer = (state = initialState , action) => 
{
    switch (action.type)
    {
        case "ADD_NUMBER" : {
            return [...state,{...action.payload}]
        }
        case "ADD_TWO" : {
            return (state.map((num) => 
            {
                return{...num,number : num.number + 2}
            }))
        }
        case "REMOVE_ALL" : {
            return []
        }
        case "INCREMENT" : 
        {
            return(state.map((num) => 
            {
                if(num.id == action.payload)
                {
                    return{...num,number:num.number + 1}
                }
                else
                {
                    return{...num}
                }
            }))

        }
        case "DECREMENT" : 
        {
            return(state.map((num) => 
                {
                    if(num.id === action.payload)
                    {
                        return {...num,number:num.number - 1}
                    }
                    else
                    {
                        return {...num}
                    }
                })
            )
        }
        case "REMOVE" : {
            return(state.filter((num) => 
            {
                return(num.id != action.payload)
            })
            )
        }
        
        default : {
            return [...state]
        }
    }

    // if(action.type === 'INCREMENT')
    // {
    //     return state + 1
    // }
    // else if (action.type === "INCREMENT_BY")
    // {
    //     return (state + action.payload)
    // }
    // else
    // {
    //     return [].concat(state) // [...state]
    // }
}
export default numberReducer