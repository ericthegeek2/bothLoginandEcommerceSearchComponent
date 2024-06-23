import React from 'react'





const SearchMovieComponent = (props) => {
    const handleSearch = (event) =>{
        props.movie(event.target.value)
    }

  return (
    <div>
      <input type="text" value={props.searchMovie} onChange={handleSearch}/>
    </div>
  )
}

export default SearchMovieComponent
