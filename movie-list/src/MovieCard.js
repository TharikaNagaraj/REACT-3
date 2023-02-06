import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { movieDelete } from './actions/movieActions'
import MyImage from './shapelined-_JBKdviweXI-unsplash.jpg'


const MovieCard = (props) => 
{
    //const src = `https://via.placeholder.com/150/FFFF00/000000?Text=`
    const {movies} = props
    // const moviesArr = useSelector((state) => 
    // {
    //     return (state.movies)
    // })
    const dispatch = useDispatch()
    const handleDelete = (id) => 
    {
        console.log(id)
        const result = window.confirm ('Are you sure?')
        if(result)
        {
            dispatch(movieDelete(id))
        }
        
    }
    return(
        <div className='row'>
                {movies.map((ele) => 
                {return <li  className="card m-4 g-0 col-md-5"  key={ele.id}>
                            <img src={MyImage}/>
                            <div className='card-body'></div>
                            <h5 className='card-title'>#-{ele.rank}</h5>
                            <p className='card-text'> {ele.name}</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  cursor="pointer" pointerEvents="bounding-box" className="bi bi-trash" viewBox="0 0 16 16">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" fill='#ff0000'/>
                            <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                            fill='#ff0000'
                            onClick={(e) => {handleDelete(ele.id)}}/>
                            </svg>
                            </li>
                })
            }
        </div>
        )
}
export default MovieCard