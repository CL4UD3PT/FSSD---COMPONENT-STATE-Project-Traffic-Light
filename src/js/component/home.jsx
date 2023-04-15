import React from "react";
import { useState, useEffect } from "react";

//create your first component
const Home = () => {
  const colors = ["red", "yellow", "green", "purple"];

  const [color, setColor] = useState(colors[0]);
  const [isCycle, setIsCycle] = useState(false);
  const [isPurple, setIsPurple] = useState(false);
  const [extraLights, setExtraLights] = useState(false);
  
  useEffect(()=>{
    if (isCycle) {
      const interval = setInterval(()=>{
        let maxIndex = extraLights ? colors.length - 1 : 2;
        setColor((color) => colors.indexOf(color) == maxIndex ? colors[0] : colors[colors.indexOf(color) + 1] );
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isCycle, extraLights]);

  return (
    <div className="text-center">
      <div className="traffic-pole"></div>
      <ul className="traffic-light">
        <li onClick={() => setColor("red")} className={`light ${color == "red" ? color + " z-index-1" : "z-index-0"}`}></li>
        <li onClick={() => setColor("yellow")} className={`light ${color == "yellow" ? color + " z-index-1" : "z-index-0"} z-index-1`}></li>
        <li onClick={() => setColor("green")} className={`light ${color == "green" ? color + " z-index-1" : "z-index-0"}`}></li>
        <li onClick={() => setColor("purple")} className={`light ${color == "purple" ? color + " z-index-1" : "z-index-0"}`} style={{visibility: isPurple?"visible":"hidden"}}></li>
      </ul>
      <div className="m-2">
        <button className={`btn ${isCycle?'btn-success':'btn-secondary'} mx-1 my-3`} onClick={() => { setIsCycle(!isCycle) }}
        >Cycle</button>
        <button className={`btn ${isPurple?'btn-warning':'btn-secondary'} mx-1 my-3`} onClick={() => { setIsPurple(!isPurple); setExtraLights(!extraLights)}}>Purple Light</button>
      </div>
    </div>
  );
};

export default Home;
