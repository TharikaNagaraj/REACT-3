import React from "react"
import MovieForm from "./MovieForm"
import MovieStats from "./MovieStats"
import MoviesList from "./MoviesList"
import MovieCard from "./MovieCard"
import "bootstrap/dist/css/bootstrap.min.css"
import { useSelector } from "react-redux"


const MoviesContainer = (props) => 
{
    const moviesArr = useSelector((state) => 
    {
        return state.movies
    })
    return(
        <div>
        <div className="row">
            <div className="col-md-6"><MoviesList/></div>
            <div className="col-md-6"><MovieForm/></div>
            <div className="col-md-6"><MovieCard movies={moviesArr}/></div>
            <div className="col-md-6"><MovieStats/></div>
        </div>
        </div>
    )
}
export default MoviesContainer