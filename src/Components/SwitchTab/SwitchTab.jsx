import React, { useState } from "react";
import "./SwitchTab.scss";


const SwitchTab = ({data,onTabChange}) => {
    const [left, setLeft] = useState(0);
    const [selectTab,setSelectTab]=useState(0)
    const moveLeft =(tab,index)=>{
        setLeft(index*100)
        setTimeout(()=>{
setSelectTab(index)
        },300)
        onTabChange(tab,index)
    }

  return (
    <div className="switchingTab">
      <div className="tabItems">
        {data.map((tab, index) => {
            return(
                 <span key={index} className={`tabItem ${selectTab===index?"active":""}`} onClick={()=>moveLeft(tab,index)} >{tab}</span>
                 );
        })}
        <span className="movingBg" style={{ left }}></span>
      </div>
    </div>
  );
};

export default SwitchTab;
