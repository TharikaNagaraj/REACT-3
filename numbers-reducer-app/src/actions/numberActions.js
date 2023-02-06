
export const addNumber = (obj) => 
{
    return{
        type : "ADD_NUMBER",
        payload : obj
    }
}
export const addPlusTwo = () => 
{
    return{
        type : "ADD_TWO"
    }
}
export const removeAll = () => 
{
    return{
        type : "REMOVE_ALL"
    }
}
export const increment = (id) =>
{
    return{
        type : "INCREMENT",
        payload : id
    }
}
export const decrement = (id) => 
{
    return{
        type : "DECREMENT",
        payload : id
    }
}
export const remove = (id) => 
{
    return{
        type : "REMOVE",
        payload : id
    }
}