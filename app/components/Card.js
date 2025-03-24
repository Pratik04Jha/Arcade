import Link from "next/link";
import React from "react";

const Card = ({ data }) => {
  return (
    <div className={`card h-120 w-90 flex flex-col py-5 items-center cursor-pointer bg-blue-600 ${data.bgc} border-4 border-black`}>
      <div className="h-50 w-80 border-4 border-black overflow-hidden">
        <img src={data.imageSrc} alt="" className="h-[100%] w-[100%] object-cover object-center "></img>
      </div>
      <div className="w-80 h-45 flex flex-col gap-2">
        <h1 className="text-2xl font-semibold text-center pt-5 ">{data.title}</h1>
        <p className="text-center text-[#dcdcdc] text-[15px]">{data.description}</p>
      </div>
      <div>
      <Link href={`/games/${data.id}`}>
          <button className="button focus:outline-none cursor-pointer text-[16px] text-white font-bold py-1 px-20 ">
            Play
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
