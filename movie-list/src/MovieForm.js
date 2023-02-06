import React,{useState} from "react"
import { useDispatch } from "react-redux"
import { AddMovie } from "./actions/movieActions"
const MovieForm = (props) => 
{
    const [movieName,setMovieName] = useState("")
    const [movieRank,setMovieRank] = useState("") //the number entered would be stored as string.Make sure to convert it
                                                    // to number
    const dispatch = useDispatch()
    const handleChange = (e) => 
    {
        const input = e.target.value
        if (e.target.name == "movieName")
        {
            setMovieName(input)
            //console.log(e.target.name)
        }
        else
        {
            setMovieRank(input)
            //console.log(e.target.name)
        }
       
    }
    const handleSubmit = (e) => 
    {
        e.preventDefault()
        const movieObj = {
            id : Number(new Date()),
            name : movieName,
            rank : Number(movieRank)
        }
        dispatch(AddMovie(movieObj))
        setMovieName("")
        setMovieRank("")
    }
    return(
        <div>
        <h2 style={{fontFamily:"Georgia, serif"}}>Add Movie</h2>
        <form className="form-group mt-4" onSubmit = {handleSubmit}>
            <input type="text" className="form-control" placeholder="Enter movie name" name="movieName" value={movieName} onChange={handleChange}/><br /><br />
            <input type="text"  className="form-control" placeholder="Enter IMDB ranking" name="movieRank" value={movieRank} onChange={handleChange}/><br /><br />
            <input type="submit"  className="btn btn-primary btn-lg" value="Add"/>
        </form>
        </div>
    )
}
export default MovieForm