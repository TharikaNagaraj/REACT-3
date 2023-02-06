import React,{useState} from "react";
import { useSelector,useDispatch } from "react-redux";
import MovieCard from "./MovieCard";
import { movieAtoZ,movieZtoA,movieAscToDsc,movieDscToAsc } from "./actions/movieActions";
import "bootstrap/dist/css/bootstrap.min.css"

const MoviesList = (props) =>
{
    const _ = require("lodash"); 
    const [movieName,setMovieName] = useState('')
    const [movieSelect,setMovieSelect] = useState('')
    const [nonFilteredList,setNonFilteresList] = useState([])
    const dispatch = useDispatch()  
    let moviesList = useSelector((state) => 
    {
        if(movieName.length > 0)
        {
            return(state.movies.filter((ele) => {return(ele.name.toLowerCase().includes(movieName))}))
        }
        else
        {
            return(state.movies)
        }
    })
    const handleChange = (e) => 
    {
        const input = e.target.value
        setMovieName(input)
    }
    const handleSelect = (e) => 
    {
        const input = e.target.value
        setMovieSelect(input)
        if(input == 'atoz')
        {
            dispatch(movieAtoZ())
            
        }
        else if (input == 'ztoa')
        {
            dispatch(movieZtoA())
            
        }
        else if (input == "asctodsc")
        {
            dispatch(movieAscToDsc())
            
        }
        else if (input == "dsctoasc")
        {
            dispatch(movieDscToAsc())
          
        }
        else
        {
            moviesList = []
        }
        
    }
    return(
        <div className="row mt-2">
        <div className="col-md-7"><input type="text" className="form-control" placeholder="Search Movie by name" value={movieName} onChange={handleChange}/></div>
        <div className="col-md-4"><select className="form-select" value={movieSelect} onChange={handleSelect}>
            <option>Order by</option>
            <option value="atoz">Movies A to Z</option>
            <option value="ztoa">Movies Z to A</option>
            <option value="asctodsc">Movies rankwise Asc to Dsc</option>
            <option value="dsctoasc">Movies rankwise Dsc to Asc </option>
        </select>
        </div>
        {(movieName) ?
        (<MovieCard movies={moviesList}/>)
        :
        (<MovieCard movies={nonFilteredList}/>)}
    </div>
    )
}
export default MoviesList



// let arr = []
            // moviesList.forEach((ele) => 
            // {
            //      arr = [...arr,...[ele.name.toLowerCase()]]
            // })
            // let filteredArr = []
            // arr.sort()
            // console.log('arr',arr)
            // arr.forEach((ele) => 
            // {
            //     const result = moviesList.filter((movie) => 
            //     {
            //         return (movie.name.toLowerCase() == ele)
            //     })
            //   filteredArr = [...filteredArr,...result]
            // })
            // console.log('filteredArr',filteredArr)
            //setFilteredMovieList(filteredArr)


// let arr = []
            // moviesList.forEach((ele) => 
            // {
            //     arr.push(ele.name.toLowerCase())
            // });
            // arr.sort().reverse()
            // let filteredArr = []
            // arr.forEach((ele) => 
            // {
            //     const result = moviesList.find((movie) => 
            //     {
            //         return (ele == movie.name.toLowerCase())
            //     })
            //     filteredArr.push(result)
            // })
            // setFilteredMovieList(filteredArr)

// let arr = []
            // let movieNameArr = []
            // let newArr = []
            // let filteredArr = []
            // moviesList.forEach((ele) => 
            // {
            //     arr = [...arr,...[ele.rank]]
            //     console.log(typeof(ele.rank))
            // });
            // console.log('arr',arr)
            // arr.sort(function(a,b){return a-b })
            // console.log('sorted arr',arr)
            // arr.forEach((ele) => 
            // {
            //     moviesList.forEach((movie) => 
            //     {
            //         if(ele == movie.rank)
            //         {
            //             movieNameArr = [...movieNameArr,...[movie.name.toLowerCase()]]
            //         }
            //     })
            // })
            // newArr = _.uniq(movieNameArr)
            // newArr.forEach((ele) => 
            // {
            //     const result =moviesList.find((movie) => 
            //     {
            //         return (movie.name.toLowerCase() == ele)
            //     })
            //     filteredArr = [...filteredArr,{...result}]
            // })
            //console.log('asctodsc',filteredArr)
            // let arr = []
            // moviesList.forEach((ele) => 
            // {
            //     arr.push(ele.rank)
            // });
            // arr.sort()
            // console.log(arr)
            // let movieNameArr = []
            // arr.forEach((ele) => 
            // {
            //     moviesList.forEach((movie) => 
            //     {
            //         if(ele == movie.rank)
            //         {
            //             movieNameArr.push(movie.name.toLowerCase())
            //         }
            //     })
            // })
            // //console.log('movieNameArr',movieNameArr)
            // movieNameArr.forEach((ele) => 
            // {
            //     if(movieNameArr.indexOf(ele) != movieNameArr.lastIndexOf(ele))
            //     {
            //         //nonDuplicateArr.push(ele)
            //         movieNameArr.splice(movieNameArr.lastIndexOf(ele),1)   
            //     }  
            // })
            // console.log(movieNameArr)
            // let filteredArr = []
            // movieNameArr.forEach((ele) => 
            // {
            //     const result = moviesList.find((movie) => 
            //     {
            //         return (movie.name.toLowerCase() == ele)
            //     })
            //     filteredArr.push(result)
            // })
            // console.log('filteredArr',filteredArr)
            // setFilteredMovieList(filteredArr)


  // let arr = []
            // moviesList.forEach((ele) => 
            // {
            //     arr.push(ele.rank)
            // });
            // arr.sort(function(a,b) {return b-a})
            // console.log(arr)
            // let movieNameArr = []
            // arr.forEach((ele) => 
            // {
            //     moviesList.forEach((movie) => 
            //     {
            //         if(ele == movie.rank)
            //         {
            //             movieNameArr.push(movie.name.toLowerCase())
            //         }
            //     })
            // })
            // //console.log('movieNameArr',movieNameArr)
            // movieNameArr.forEach((ele) => 
            // {
            //     if(movieNameArr.indexOf(ele) != movieNameArr.lastIndexOf(ele))
            //     {
            //         //nonDuplicateArr.push(ele)
            //         movieNameArr.splice(movieNameArr.lastIndexOf(ele),1)   
            //     }  
            // })
            // console.log(movieNameArr)
            // let filteredArr = []
            // movieNameArr.forEach((ele) => 
            // {
            //     const result = moviesList.find((movie) => 
            //     {
            //         return (movie.name.toLowerCase() == ele)
            //     })
            //     filteredArr.push(result)
            // })
            // console.log('filteredArr',filteredArr)
            // setFilteredMovieList(filteredArr)













// filteredArr = moviesList.filter((ele) => 
        // {
        //     return((ele.name.toLowerCase().includes(input)) || (ele.name.toUpperCase().includes(input)))
        // })
        // const result = moviesList.filter((ele) => 
        // {
        //     return((ele.name.toLowerCase().includes(input)) || (ele.name.toUpperCase().includes(input)))
        // }) 
        // setFilteredMovieList(result) 
         //setFilteredMovieList(filteredArr)  
        //console.log(filteredArr)
{/* {(!(filteredArr.length > 0)) ? 
        (<MovieCard movies={moviesList}/>)
        :
        (((movieName.length > 0) && (filteredArr.length > 0)) ?
        (<MovieCard movies={filteredArr} />)
        :
        (<MovieCard movies={filteredMovieList} />)
        )} */}