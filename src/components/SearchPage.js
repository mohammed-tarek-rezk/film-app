import React, { useEffect, useState } from 'react'
import { searchForMovie } from '../services/global'
import { useParams } from 'react-router-dom'
import SearchCard from './SearchCard'

function SearchPage(props) {
    let [search , setSearch] = useState([])
    let param = useParams()
    useEffect(()=>{
        searchForMovie(param.word).then((res)=>setSearch(res.data.results))
    },[])
  return (
    <div className=' container xl:max-w-screen-xl m-auto pt-8 px-2'>
        {search.length > 0? search.map((el , index)=>{
            return  <SearchCard id = {el.id} key={index} />
        }): <div className=' text-6xl'>No Result</div>}
    </div>
  )
}

export default SearchPage