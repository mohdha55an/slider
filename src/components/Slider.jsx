import React, { useState } from "react";
import data from "../data.json";

const Slider = () => {
  const [next, setNext] = useState(0);

  const handleprev = () => {
    if (next === 0) {
      setNext(data.length - 1);
    } else {
      setNext(next - 1);
    }
  };

  const handleNxt = () => {
    if (next === data.length - 1) {
      setNext(0);
    } else {
      setNext(next + 1);
    }
  };
  return (
    <div className="container mx-auto">
      <div className="absolute top-[23%] md:top-[50%] left-8"
       onClick={handleprev}>
        <button
          className="bg-orange-700 text-white font-bold text-lg p-3"
          onClick={handleprev}
        >
          {"<"}
        </button>
      </div>
      <img
        className="w-full h-64  sm:h-[500px] p-8 rounded-2xl"
        src={data[next].download_url}
        alt="image"
      />
      <div onClick={handleNxt} className="absolute top-[23%] md:top-[50%] right-8">
        <button
          className="bg-orange-700 text-white font-bold text-lg p-3"
          onClick={handleNxt}
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default Slider;
