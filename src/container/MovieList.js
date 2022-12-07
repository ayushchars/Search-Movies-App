import React from 'react'
import "./MovieList.css"
function MovieList({title,img,year}) {
  return (
    <div className='container'>

      <div className='container_item'>
      <h1 >{title}</h1>
      <img src={img}/>
      <h2>{year}</h2>
      </div>
      
    </div>
  )
}

export default MovieList