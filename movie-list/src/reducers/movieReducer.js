const _ = require("lodash"); 
const initialState = []
const movieReducer = (state = initialState,action) => 
{
    switch(action.type)
    {
        case "Add_NAME" : {
            return [...state,...[action.payload]]
        }
        case "MOVIE_DELETE" : {
            return (state.filter((ele) => 
            {
                return (ele.id != action.payload)
            }
            ))
        }
        case "ATOZ" : {
            let arr = []
            let filteredArr = []
            state.forEach((ele) => 
            {
                 arr = [...arr,...[ele.name.toLowerCase()]]
            })
            arr.sort()
            arr.forEach((ele) => 
            {
                const result = state.filter((movie) => 
                {
                    return (movie.name.toLowerCase() == ele)
                })
                filteredArr = [...filteredArr,...result]
                
            })
            return filteredArr
        }
        case "ZTOA" : {
            let arr = []
            let filteredArr = []
            state.forEach((ele) => 
            {
                 arr = [...arr,...[ele.name.toLowerCase()]]
            })
            arr.sort().reverse()
            arr.forEach((ele) => 
            {
                const result = state.filter((movie) => 
                {
                    return (movie.name.toLowerCase() == ele)
                })
                filteredArr = [...filteredArr,...result]
                
            })
            return filteredArr
        }
        case "ASCTODSC" : {
            let arr = []
            let movieNameArr = []
            let newArr = []
            let filteredArr = []
            state.forEach((ele) => 
            {
                arr = [...arr,...[ele.rank]]
            });
            arr.sort(function(a,b){return a-b })
            arr.forEach((ele) => 
            {
                state.forEach((movie) => 
                {
                    if(ele == movie.rank)
                    {
                        movieNameArr = [...movieNameArr,...[movie.name.toLowerCase()]]
                    }
                })
            })
            newArr = _.uniq(movieNameArr)
            newArr.forEach((ele) => 
            {
                const result =state.find((movie) => 
                {
                    return (movie.name.toLowerCase() == ele)
                })
                filteredArr = [...filteredArr,{...result}]
            })
            return filteredArr
        }
        case "DSCTOASC" : {
            let arr = []
            let movieNameArr = []
            let newArr = []
            let filteredArr = []
            state.forEach((ele) => 
            {
                arr = [...arr,...[ele.rank]]
            });
            arr.sort(function(a,b){return b-a })
            arr.forEach((ele) => 
            {
                state.forEach((movie) => 
                {
                    if(ele == movie.rank)
                    {
                        movieNameArr = [...movieNameArr,...[movie.name.toLowerCase()]]
                    }
                })
            })
            newArr = _.uniq(movieNameArr)
            newArr.forEach((ele) => 
            {
                const result =state.find((movie) => 
                {
                    return (movie.name.toLowerCase() == ele)
                })
                filteredArr = [...filteredArr,{...result}]
            })
            return filteredArr
        }
        default : {
            return [...state]
        }
    }
}
export default movieReducer