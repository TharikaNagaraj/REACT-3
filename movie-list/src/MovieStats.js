import React, { useState,useEffect } from "react";
import { useSelector } from "react-redux";
import MyImage from './shapelined-_JBKdviweXI-unsplash.jpg'

const MovieStats = (props) =>
{
    const moviesArr = useSelector((state) => 
    {
        return state.movies
    })
    const arr = []
    moviesArr.forEach(ele => 
        {
            arr.push(ele.rank)
        })
    console.log(arr)
    const rank = (Math.max(...arr))
    let name
    if(rank >= 0)
    {
        const result = moviesArr.find((ele) => 
        {
            return(ele.rank === rank)
        })
        name = result.name
    }
    
    return(
        <div className="card g-0 col-md-5 mt-5">
            <h3 style={{fontFamily:"Georgia, serif"}}>Movie Statistics</h3>
            <h3 style={{fontFamily:"Georgia, serif"}}>Total Movies - {moviesArr.length} </h3>
            {(rank >=0) && (
                <div>
                <h3 style={{fontFamily:"Monaco"}}>#{rank}</h3>
                <h3 style={{fontFamily:"Monaco"}}> {name}</h3>
                <img src={MyImage} className="card-img-bottom" />
                </div>)}
                
        </div>
    )
}
export default MovieStats