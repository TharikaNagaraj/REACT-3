export const AddMovie = (obj) => 
{
    return{
        type : "Add_NAME",
        payload : obj
    }
}
export const movieDelete = (id) =>
{
    return {
        type : "MOVIE_DELETE",
        payload : id
    }
}
export const movieAtoZ = () => 
{
    return{
        type : "ATOZ"
    }
}
export const movieZtoA = () => 
{
    return{
        type : "ZTOA"
    }
}
export const movieAscToDsc = () => 
{
    return{
        type : "ASCTODSC"
    }
}
export const movieDscToAsc = () => 
{
    return {
        type : "DSCTOASC"
    }
}