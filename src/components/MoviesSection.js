import React, { useEffect, useRef, useState } from 'react'
import { getMoviesCategory } from '../services/global'
import FilmCard from './FilmCard'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function MoviesSection({id}) {
    let[movies , setMovies] = useState([])
    let ele = useRef(null)
    let[test, setTest]= useState([1, 2 , 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2])
    let[loading, setLoding] = useState(false)
    useEffect(()=>{
        getMoviesCategory(id).then((res)=>setMovies(res.data.results))
        setLoding(true)
    },[])

        let scrollRight = (element)=>{
            if(element){
                let min =window.innerWidth > 768 ?200 : 150
                element.scrollLeft += min;
            }
        }
        let scrollLeft = (element)=>{
            if(element){
                let min = window.innerWidth > 768 ?200 : 150
            element.scrollLeft -=  min ;
            }
        }
        setInterval(()=>{
            scrollRight(ele.current)
        },10000)    
      return loading ? (
        <div className='flex overflow-x-auto scroll-smooth scrollbar-hide  gap-4 py-3'   ref={ele} >
        <span className=' cursor-pointer hidden md:flex absolute top-[50%] right-[-15px] w-[30px] h-[30px] bg-black z-10 text-white  justify-center items-center  rounded-full' onClick={()=>scrollLeft(ele.current)}>
            <FaChevronRight/>
        </span>
        <span  className=' cursor-pointer hidden md:flex absolute top-[50%]  left-[-15px] w-[30px] h-[30px] bg-black z-10 text-white justify-center items-center  rounded-full' onClick={()=>scrollRight(ele.current)}>
            <FaChevronLeft   />
        </span>
    {loading?movies.map((el)=>{
        return  <FilmCard  film ={el} key={el.id}/> 
    }):<FilmCard />}
    </div>
  ):(
  <div className='flex overflow-x-auto scroll-smooth scrollbar-hide  gap-4 py-3' id={`sec${id}`} >
    {test.map((el, index)=>{
    return <FilmCard key={index} />
  }) }</div>)
}

export default MoviesSection