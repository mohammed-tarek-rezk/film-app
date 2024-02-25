import React from 'react'
import { Link } from 'react-router-dom'

function HeaderLink(props) {
  return (
    <Link  id={props.name} className='flex items-center gap-1 cursor-pointer hover:underline underline-offset-4 transition-all duration-300'>
        {<props.icon />}
        {props.name}
    </Link>
  )
}

export default HeaderLink