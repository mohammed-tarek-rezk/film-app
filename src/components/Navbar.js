import React, { useRef, useState } from 'react'
import { HiHome,
    HiMagnifyingGlass,
    HiPlus, 
    HiStar,
    HiPlayCircle,
    HiTv } from "react-icons/hi2";
import { CgMoreVerticalAlt } from "react-icons/cg";
import { Link } from 'react-router-dom';
import logo from "./../images/logo.svg"
import HeaderLink from './HeaderLink';
import { IoSearch } from "react-icons/io5";
function Navbar() {
    let [toggle , setToggle] = useState(false)
    let searchForm = useRef()
    let inputSearch = useRef()
    const menu=[
        {
            name:'HOME',
            icon:HiHome,
            to: "/"
        },
        {
            name:'SEARCH',
            icon:HiMagnifyingGlass,
            to: "SEARCH"
        },
        {
            name:'WATCHLIST',
            icon:HiPlus,
        },
        {
            name:'ORIGINALS',
            icon:HiStar
        },
        {
            name:'MOVIES',
            icon:HiPlayCircle
        },
        {
            name:'SERIES',
            icon:HiTv
        }
    ]


    document.addEventListener("click",(e)=>{
        if(e.target.id === "SEARCH"){
            searchForm?.current?.classList?.toggle("hidden")
            inputSearch?.current?.focus()
        }
    })


    document.addEventListener("submit", (e)=>{
        if(e.target === searchForm.current){
            e.preventDefault()
            let el = document.createElement("a")
            el.href = "/search/"+inputSearch.current.value
            searchForm.current.append(el)
            el.click()
        }
    })
  return (
    <header className=' shadow-md sticky top-0 bg-white z-30'>

        <div className='container xl:max-w-screen-xl  m-auto  items-center py-2 flex px-[15px]'>
            <Link to={"/"}>
                <img src={logo} alt='logo' className=' w-[100px] md:w-[140px]' style={{}}/>
            </Link>
            
            <div className='   gap-8 h-[100%] hidden md:flex'>
                {menu.map((el)=>{
                    return <HeaderLink name ={el.name} icon={el.icon} key={el.name} to={el.to}/>
                })}
            </div>

            <div className='   gap-8 h-[100%] flex md:hidden relative'>
                {menu.map((el, index)=>  {
                    return index < 3 && <HeaderLink name ="" icon= {el.icon} key={el.name} to={el.name}/>
                })}
                <span onClick={()=>setToggle(!toggle)}>
                <HeaderLink name=""  icon= {CgMoreVerticalAlt} />
                </span>
                {toggle &&<div className=' absolute bg-white md:hidden top-[30px] right-0 border-2 border-gray-500 p-4 rounded-lg gap-2 flex flex-col'>
                    {menu.map((el, index)=>  {
                        return index >= 3 && <HeaderLink name = {el.name} icon= {el.icon} key={el.name} to={el.to}/>
                    })}
                </div>}
            </div>
                
        </div>
        <form method='get' className='hidden transition-all duration-150 text-center py-2' ref={searchForm}>
            <div  className=' w-[90%] md:w-[60%] m-auto relative'>
                <input  type='text' className=' border-2 border-gray-300 rounded-md focus:outline-none  w-full  ' style={{padding: "4px 4px 4px 35px"}} ref={inputSearch}/>
                    <span className=' absolute left-0 h-[100%] text-xl top-0 flex items-center justify-center content-center w-[30px]  border-r-2 border-blue-600 text-blue-600 '>
                        <IoSearch />
                    </span>
            </div>
        </form>
    </header>
  )
}

export default Navbar