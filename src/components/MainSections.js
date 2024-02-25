import React, { useEffect, useState } from 'react'
import { getCategory } from '../services/global'
import MoviesSection from './MoviesSection'

function MainSections() {
    let [categories , setCategories] = useState([])


    useEffect(()=>{
        getCategory.then((res)=> setCategories(res.data.genres))
    },[])

  return (

    <div>
        {categories.map((el)=>{
            return (
                <section key={el.id} className=' container m-auto xl:max-w-screen-xl  py-5 relative'>
                    <h2 className=' font-bold pb-3 text-xl '>{el.name}</h2>
                    <MoviesSection id={el.id} />
                </section>
            )
        })}
    </div>
  )
}

export default MainSections