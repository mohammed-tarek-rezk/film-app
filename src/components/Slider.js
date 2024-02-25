import React, { useEffect, useRef, useState } from 'react'
import { getTrending } from '../services/global'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Slider() {
    let [trending, setTrending] = useState([])
    let elementRef = useRef(null)
    useEffect(()=> {
        getTrending.then((res)=> setTrending(res.data.results))
    }, [])

    let scrollRight = (element)=>{
        if(element){
            let min =window.innerWidth > 768 ?64 : 36
            element.scrollLeft += window.innerWidth - min;
        }
    }
    let scrollLeft = (element)=>{
        if(element){
            let min = window.innerWidth > 768 ?64 : 36
            element.scrollLeft -= window.innerWidth - min ;
        }
    }
        setInterval(()=>{
            scrollRight(elementRef.current)
        },10000)

  return (
    <div className='relative'>
        <span className=' cursor-pointer hidden md:flex absolute top-[50%] right-[50px] w-[30px] h-[30px] bg-black z-10 text-white  justify-center items-center  rounded-full' onClick={()=>scrollLeft(elementRef.current)}>
            <FaChevronRight/>
        </span>
        <span  className=' cursor-pointer hidden md:flex absolute top-[50%]  left-[50px] w-[30px] h-[30px] bg-black z-10 text-white justify-center items-center  rounded-full' onClick={()=>scrollRight(elementRef.current)}>
            <FaChevronLeft   />
        </span>
        <div className='flex  overflow-x-auto w-full  py-4 scrollbar-hide relative px-9 md:px-16 scroll-smooth' ref={elementRef}>
            {trending.map((el)=>{
                return (
                <img src={process.env.REACT_APP_IMAGE_BASE+el.backdrop_path} className=' hover:border-[4px] transition-all ease-in border-gray-600 rounded-xl mr-9 md:mr-16 w-[100%] min-w-full  object-left-top md:h-[350px] object-cover shadow-lg shadow-black' alt='' key={el.id}/>
                )
            })}
        </div>
    </div>


  )
}

export default Slider

