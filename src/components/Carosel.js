import React from "react";
import { useState,useMemo } from "react";
import { useEffect } from "react";
import { image, caroImage } from "../data";
import { useRef } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import './Carosel.css'

const run = num => {
  switch (num) {
  case 0:
    return [true,false,false,false]
  break;
  case 1:
    return [false,true,false,false]
  break;
  case 2:
   return [false,false,true,false]
  break;
  case 3:
return [false,false,false,true]
break;
  default: console.log('not wprking')
      break;
  }
}

const Carosel = () => {
  let count = image.length - 1;
  const [img, setImage] = useState();
  const [num, setNum] = useState(image.length - 1);
  const [indicators, setIndicators] = useState([true, false, false, false]);
  const timeId = useRef(null);

  useEffect(() => {
    timeId.current = setTimeout(() => {
      const checkNum = num > 0 ? num - 1 : image.length - 1
      setNum(checkNum)
    }, 5000);
    return () => clearTimeout(timeId.current);
  }, [num]);

  useEffect(() => {
    setImage(image);
  }, []);

  useEffect(()=>{
    setIndicators(run(num));
  },[num]);

  const minus = () => {
    clearTimeout(timeId.current);
    const minusNum = num > 0 ? num - 1 : image.length - 1 
    setNum(minusNum);
  };

  const plus = () => {
    const addNum = num >= image.length - 1 ?  0 : num  +  1 ;
    setNum(addNum);
  };

  const memoizedImage = useMemo(() => image, []);
  const result = useMemo(() => indicators, [indicators]);

  return (
    <div className="carousel">
      <img
        src={memoizedImage[num].url}
        alt="img"
        
        className="hero_image"
      />
      <ul className="carousel_indicator">
      {image.map((item, index)=> {
        return  <li style={{background: `${result[item.id] ? '#ed017f' : '#afafaf'}`}}  key={index}></li>

      })}
  
      </ul>
      <div className="carousel-control">
        <button className="btn-carousel" onClick={minus}>
          <FaChevronLeft className="btn-" />
        </button>
        <button className="btn-carousel" onClick={plus}>
          <FaChevronRight className="btn-right" />
        </button>
      </div>
    </div>
  );
};

export default Carosel;
