import Link from "next/link";
import React from "react";

const Card = ({ data }) => {
  return (
    <div className="group relative w-[22rem] h-[30rem] py-2 px-2 bg-zinc-900 rounded-3xl overflow-hidden transition-all duration-500 scale-[1.025] cursor-pointer border border-zinc-800">
      {/* Image Section */}
      <div className="h-[55%] w-full overflow-hidden relative rounded-3xl">
        <img
          src={data.imageSrc}
          alt={data.title}
          className="h-full w-full object-cover object-center rounded-3xl transition-all duration-500 group-"
        />
        {/* Neon Glow Overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-transparent to-zinc-900 opacity-70"></div>
      </div>
        <img
          src={data.imageSrc}
          alt={data.title}
          className="absolute blur-[80px] opacity-90 top-0 -z-1 h-[50%] w-full object-cover object-center rounded-3xl transition-all duration-500 scale-110"
        />

      {/* Content Section */}
      <div className="px-5 py-4 text-center flex flex-col justify-between h-[45%]">
        <h1 className="text-2xl font-bold text-white drop-shadow-md">
          {data.title}
        </h1>
        <p className="text-sm text-zinc-300 mt-2">{data.description}</p>

        {/* Play Button */}
        <div className="bg-zinc-700 rounded-lg flex  gap-10 overflow-hidden ">
          <Link href={`/games/${data.id}`}>
            <button className="  relative bg-yellow-600  transition-all duration-300 text-white text-lg font-semibold px-15 py-2 rounded-[0px_0px_100px_0px]  group-hover:scale-105">
              <span className="absolute blur-sm opacity-30 rounded-[0px_0px_100px_0px]"></span>
              <span className="relative z-10">Play</span>
            </button>
          </Link>
          <button className="bg-zinc-700 ">See details</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
