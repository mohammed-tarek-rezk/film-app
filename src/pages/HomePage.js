import React from 'react'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import MainSections from '../components/MainSections'

function HomePage() {
  return (
    <div>
        <Slider />
        <Categories />
        <MainSections />
    </div>
  )
}

export default HomePage