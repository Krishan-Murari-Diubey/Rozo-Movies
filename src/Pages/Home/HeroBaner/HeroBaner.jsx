import React, { useEffect, useState } from 'react';
import useFetch from '../../../Hooks/useFetch';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ContentWrapper from '../../../Components/ContentWrapper/ContentWrapper';
import Img from '../../../Components/LazyLoading/Img';
import "./HeroBaner.scss"



const HeroBaner = () => {
  const [background,setBackground]= useState("");
  const [query,setQuery]=useState("");
  const {data,loading} = useFetch("/movie/upcoming");
  const navigate = useNavigate()
  const {url}=useSelector(state=>state.Home)
  


  useEffect(()=>{

    const bg = url.backdrop+data?.results?.[Math.floor(Math.random()*20)]?.backdrop_path;
    setBackground(bg)
  },[data])


  const handleEnter =(e)=>{
  
    if(e.key === "Enter" && query.length>0){
      navigate(`/search/${query}`)
    }
  }
  
  return (
<>
<main className='Hero-section'>
  {!loading &&<div className="backdrop-path">
    <Img src={background}/>
  </div>}
  <div className="opacity-layer"></div>
  <ContentWrapper >
    <div className='Hero-content'>
      <h1 className='hero-heading'>Welcome </h1>
      <h3 className='hero-subheading'>Rozo-Movies: Elevating Entertainment with a Cinematic Symphony - Where Every Click Unveils a New Story.</h3>
    <div className='search-section'> <input type="search" placeholder='Search' onKeyUp={handleEnter}  value={query} onChange={(e)=>setQuery(e.target.value)}/>
     
      <button>Search</button>
    </div>
    </div>
  </ContentWrapper>
</main>
</>
  )
}

export default HeroBaner
