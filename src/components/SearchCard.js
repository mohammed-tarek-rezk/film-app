import React, { useEffect, useState } from 'react'
import { getMovieById } from '../services/global'
import img from "./../images/blue.avif"
import { Link } from 'react-router-dom'
function SearchCard({id}) {
    let [element, setElement] = useState([])
    let [found , setFound] = useState(true)
    useEffect(()=>{
        getMovieById(id).then((res)=>{setElement(res.data); }).catch((res)=> setFound(false) )
    },[])

  return found && (
        <Link to={"/movie/"+element.id} className=" block md:flex bg-white transition hover:shadow-xl shadow-lg rounded-lg overflow-hidden mb-3">
        <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
        </div>
        <div className=" sm:block sm:basis-56">
        {element.backdrop_path || element.poster_path?<img
            alt=""
            src={process.env.REACT_APP_IMAGE_BASE+(element.backdrop_path|| element.poster_path)}
            className="aspect-square h-full w-full object-cover max-h-[250px]"
            /> : <div className='aspect-square h-full w-full object-cover max-h-[250px] bg-gray-300 animate-pulse'></div>}
        </div>

        <div className="flex flex-1 flex-col justify-between">
            <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                <h3 className="font-bold uppercase text-gray-900">
                {element.original_title}
                </h3>


            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                {element.overview}
            </p>
            </div>

            <div className="sm:flex sm:items-end sm:justify-end">
            <a
                className="block bg-blue-600 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
            >
                Item
            </a>
            </div>
        </div>
        </Link >
  )
}

export default SearchCard