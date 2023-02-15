import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { image } from "../data";
import { useRef } from "react";
import {FaChevronLeft} from 'react-icons/fa'
import {FaChevronRight} from 'react-icons/fa'

const Carosel = () => {
  let count = image.length - 1;
  const [img, setImage] = useState();
  const [num, setNum] = useState(count);
  const timeId = useRef(null);

  useEffect(() => {
    timeId.current = setTimeout(() => {
      minus();
    }, 5000);
    return () => clearTimeout(timeId.current);
  }, [num]);

  useEffect(() => {
    setImage(image);
  }, []);

  const minus = () => {
    clearTimeout(timeId.current);
    let con = 0;
    const imgLength = image.length - 1;
    if (num > 0) {
      con = num - 1;
    }
    if (num <= 0) {
      con = imgLength;
    }
    setNum(con);
  };

  const plus = () => {
    let count = 0;
    const imgLeng = image.length - 1;
    if (num >= 0) {
      count = num + 1;
    }
    if (num >= imgLeng) {
      count = 0;
    }
    setNum(count);
  };

  return (
    <div className='carousel'>
      <img src={image[num].url} alt="img" style={{ width: 1000, height: 320 }} />
      <div className="carousel-control">
      <button className="btn-carousel" onClick={minus}>
      <FaChevronLeft className="btn-"/>
      </button>
      <button className="btn-carousel" onClick={plus}>
      <FaChevronRight className="btn-right"/>
      </button>
      </div>
    </div>
  );
};

export default Carosel;
