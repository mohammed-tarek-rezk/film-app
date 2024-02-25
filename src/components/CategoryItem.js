import React from 'react'

function CategoryItem({img , video}) {
  return (
    <div className='w-full bg-black rounded-lg relative overflow-hidden hover:scale-110 transition-all duration-200 shadow-md shadow-gray-600'>
        <video src={video} autoPlay loop className=' absolute  top-0 z-[1] opacity-0 hover:opacity-55' playsInline muted/>
        <img src={img} alt='' className='w-full z-0 relative  '/>
    </div>
  )
}

export default CategoryItem