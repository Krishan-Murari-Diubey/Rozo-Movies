import React, { useState } from 'react'
import "./Trending.scss"
import ContentWrapper from "../ContentWrapper/ContentWrapper"
import SwitchTab from '../SwitchTab/SwitchTab'
import useFetch from '../../Hooks/useFetch'
import Crousel from '../CrouselSection/Crousel'
const Trending = () => {
  const [endPoint,setEndPoint] =useState("day");
  const {data,loading} = useFetch(`/trending/movie/${endPoint}`)

  const onTabChange = (tab) =>{
    setEndPoint(tab==="Day"?"day":"week")
  }

  return (
    <div className='carouselSection'>
    <ContentWrapper>
      <h2 className="carouselTitle">Trending</h2>
      <SwitchTab data={["Day","Week"]}  onTabChange={onTabChange}/>
    </ContentWrapper>
    <Crousel data={data?.results} loading={loading}/>
    </div>
  )
}

export default Trending
