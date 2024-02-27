import React from 'react'
import HeroBaner from './HeroBaner/HeroBaner'
import Trending from '../../Components/Trending/Trending'
import Popular from './Popular/Popular'
import TopRated from './topRated/TopRated'

const Home = () => {
  return (
    <div>
    <HeroBaner/>
    <Trending/>
    <Popular/>
    <TopRated/>
    </div>
  )
}

export default Home
