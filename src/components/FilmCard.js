import React from 'react'
import { Link } from 'react-router-dom'

function FilmCard({film}) {
  return (
        film ?<Link className='block min-w-[110px] md:min-w-[180px]  ' to={`/movie/${film.id}`}><img src={process.env.REACT_APP_IMAGE_BASE+film.poster_path} alt='' className='rounded-lg hover:scale-105 transition-all duration-300 hover:shadow-md cursor-pointer' /></Link>:<div className='min-w-[110px] h-[165px] md:h-[270px] md:min-w-[180px] rounded-lg hover:scale-105 transition-all duration-300 hover:shadow-md cursor-pointer bg-gray-200 animate-pulse'></div>
  )
}

export default FilmCard 