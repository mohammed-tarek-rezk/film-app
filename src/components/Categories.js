import React from 'react'
//importing images
import disney from "./../images/disney.png"
import marvel from "./../images/marvel.png"
import nationalG from "./../images/nationalG.png"
import pixar from "./../images/pixar.png"
import starwar from "./../images/starwar.png"


//import videos
import disneyV from "./../Videos/disney.mp4"
import marvelV from "./../Videos/marvel.mp4"
import national from "./../Videos/national-geographic.mp4"
import pixarV from "./../Videos/pixar.mp4"
import starwarV from "./../Videos/star-wars.mp4"
import CategoryItem from './CategoryItem'
function Categories() {
    let menu = [
        {
            id: 1,
            img: disney,
            video: disneyV
        },
        {
            id: 2,
            img: marvel,
            video: marvelV
        },
        {
            id: 3,
            img: nationalG,
            video: national
        },
        {
            id: 4,
            img: pixar,
            video: pixarV
        },
        {
            id: 5,
            img: starwar,
            video: starwarV
        },
    ]
  return (
    <div className='flex gap-2 md:gap-12 px-5 md:px-16 py-5  '>
        {menu.map((el)=>{
            return <CategoryItem img = {el.img} video = {el.video} key={el.id}/>
        })}
    </div>
  )
}

export default Categories