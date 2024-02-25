import React, { useEffect, useState } from 'react'
import { getMovieById } from '../services/global'
import { useParams } from 'react-router-dom'

import img from "./../images/blue.avif"
import MainSections from './MainSections'
import MoviesSection from './MoviesSection'

function MovieDetails() {
  let param = useParams()
  let [movie, setMovie]= useState([])
  useEffect(()=>{
    getMovieById(param.id).then((res)=> { setMovie(res.data);console.log(res.data);})
  },[])
  return (
    <>
    <div className=" mt-5  relative" style={{background: `url(${img})`, backgroundRepeat: "no-repeat" , backgroundSize:"cover"}}>
        <div className="absolute top-0 w-[100%] h-[100%] left-0 bg-black z-0 opacity-70"></div>
        <div className='container xl:max-w-screen-xl m-auto py-10 md:flex gap-16 z-10 relative'>
          <img className ="rounded-lg m-auto md:m-0  h-[400px]"  src={process.env.REACT_APP_IMAGE_BASE+movie.poster_path} alt="" />
          <div className=' py-4 px-3'>
            <h2 className="text-white text-4xl text-center md:text-left md:text-4xl  capitalize">{movie.original_title}</h2>
            <p className=" text-gray-400 my-8">
              <h3 className="text-white text-2xl">Overview:</h3>
              {movie.overview}
            </p>
            <p className=" text-gray-400 my-5">
              <h3 className="text-white text-2xl">Category:</h3>
              {movie?.genres?.map((el)=>{
                return <span className=' mr-2'>{el.name} |</span>
              })}
            </p>
            <p className=" text-gray-400 my-5">
              <h3 className="text-white text-2xl">release date: <span className=' text-sm text-gray-400'>{movie?.release_date}</span></h3>

            </p>

          </div>
        </div>
    </div>
    <div className='container xl:max-w-screen-xl m-auto py-7'>
      <h2 className='text-2xl mb-4 font-bold'>production Companies:</h2>
    <div className='flex gap-5  overflow-x-auto py-8 '>
      {movie?.production_companies?.map((el)=>{
        return el.logo_path &&(<div className='' >
          <img src={process.env.REACT_APP_IMAGE_BASE+ el.logo_path} className='max-w-[150px]' alt=''/>
          </div>)
      })}
    </div>
    <section>
      <h2 className=' font-bold text-3xl'>Related Movies</h2>
      {movie?.genres?.map((el)=>{
          return (
            <section key={el.id} className=' container m-auto xl:max-w-screen-xl  py-5 relative'>
                <h2 className=' font-bold pb-3 text-xl '>{el.name}</h2>
                <MoviesSection id={el.id} />
            </section>)
      })}
    </section>
    </div>
    </>
  )
}

export default MovieDetails