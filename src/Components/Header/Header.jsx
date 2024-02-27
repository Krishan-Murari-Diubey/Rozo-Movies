import React, { useEffect, useState } from 'react'
import "./Header.scss"
import { Link, useLocation, useNavigate } from 'react-router-dom'
import ContentWrapper from '../ContentWrapper/ContentWrapper'
import { CiSearch } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const Header = () => {

  const [mobileMenu,setMobileMenu] = useState(false);
  const [showSearch,setShowSearch]=useState("");
  const[show,setShow]=useState("top");
  const [query,setQuery] = useState("");
const navigate = useNavigate();
const [lastScrollY,setLastScrollY] = useState(0)
const location= useLocation()


useEffect(()=>{
window.scrollTo(0,0)
},[location])



const openSearch=()=>{
setMobileMenu(false)
setShowSearch(true)
}

const openMobileMenu =()=>{
setMobileMenu(true);
setShowSearch(false)
}
const handleEnterMobile =(e)=>{
  if(e.key == "Enter" && query.length>0){
     console.log(e.key)
    navigate(`/search/${query}`)
    setTimeout(()=>{
      setShowSearch(false)
    },1000)
  }
}
const navigateHandler =(type)=>{
  if(type==="movie"){
    navigate("/explore/movie")
  }else{
    navigate("explore/tv")
  }
  setMobileMenu(false)
}

const controlNavbar =()=>{
if(window.scrollY>200){
  if(window.scrollY>lastScrollY && !mobileMenu){
    setShow("hide")
  }else{
    setShow("show")
  }
}else{
  setShow("top")
}
setLastScrollY(window.scrollY)
}

useEffect(()=>{
  window.addEventListener("scroll",controlNavbar);
  return ()=>{
    window.removeEventListener(window.scrollY,controlNavbar)
  }
},[lastScrollY])

  return (
  <header  className={`header ${mobileMenu ? "mobileView":""} ${show}`}>
  <ContentWrapper >
 <div className="header-logo" onClick={()=>{navigate("/")}}>
 
  <img src="src\assets\logo-no-background.png" alt="logo-img"/>
  
    </div>
   <ul className="MenuItems"> 
      <li className="MenuItem" onClick={()=>{navigateHandler("movie")}}>Movie</li>
      <li className="MenuItem" onClick={()=>{navigateHandler("tv")}}>Tv Show</li>
      <li className="MenuItem"><CiSearch onClick={openSearch}/></li>
    </ul>

    <div className="mobileMenuItems">
      <CiSearch onClick={openSearch}/>
      {mobileMenu?<IoMdClose onClick={()=>{setMobileMenu(false)}}/>:<GiHamburgerMenu onClick={openMobileMenu}/>}
    </div>
</ContentWrapper>
{showSearch && (<div className="searchBar">
  <ContentWrapper>
    <div className="searchInput">
      <input type="text"  placeholder='search movie'  onChange={(e) => setQuery(e.target.value)}  onKeyUp={(e)=>handleEnterMobile(e)}/>
      <IoMdClose onClick={()=>{setShowSearch(false)}}/>
    </div>
  </ContentWrapper>
</div>)}
  </header>
  )
}

export default Header
