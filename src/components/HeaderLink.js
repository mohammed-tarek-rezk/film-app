import React from 'react'
import { Link } from 'react-router-dom'

function HeaderLink(props) {
  return (
    <div  id={props.name} className='flex items-center gap-1 cursor-pointer hover:underline underline-offset-4 transition-all duration-300'>
        <span >{<props.icon id={props.to} />}</span>
        {props.name}
    </div>
  )
}

export default HeaderLink