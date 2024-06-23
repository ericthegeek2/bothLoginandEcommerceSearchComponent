import {moviesData} from "../utils/movies";
import React from 'react'

const FilterMovieComponent = (props) => {
  return (
    <div>
      {moviesData.filter((obj) =>(obj.title.toLowerCase().includes(props.movieSearch.toLowerCase())))
                 .map((obj) =>(
                   <div className="card" key={obj.id}>
                    <h1>{obj.title}</h1>
                    <h2>{obj.director}</h2>
                    <h3>{obj.genres[0]}</h3>
                    <h4>{obj.rating}</h4>
                    <h5>{obj.year}</h5>
                   </div>

                 ))
      
      }
    </div>
  )
}

export default FilterMovieComponent
