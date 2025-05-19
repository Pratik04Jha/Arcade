import Link from "next/link";
import React from "react";

const Card = ({ data }) => {
  return (
    <div className="group relative w-[22rem] h-[26rem] py-2 px-2 rounded-3xl overflow-hidden transition-all duration-500 transform scale-[1.025] cursor-pointer hover:scale-[1.05]  hover:border-zinc-700 hover:rotate-[0.3deg] backdrop-blur-md">
      {/* Image Section */}
      <div className="h-[55%] w-full overflow-hidden relative rounded-3xl">
        <img
          src={data.imageSrc}
          alt={data.title}
          className="h-full w-full object-cover object-center rounded-3xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[1.5deg]"
        />
        {/* Neon Glow Overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-transparent to-zinc-900 opacity-70 transition-opacity duration-300 group-hover:opacity-90"></div>
      </div>

      {/* Glow Blur Background */}
      <img
        src={data.imageSrc}
        alt={data.title}
        className="absolute blur-[80px] opacity-90 top-0 -z-1 h-[50%] w-full object-cover object-center rounded-3xl transition-all duration-500 scale-110"
      />

      {/* Shine Streak on Hover */}
      <div className="absolute inset-0 z-20 pointer-events-none before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-100%] group-hover:before:animate-[shine_1.2s_ease-in-out_forwards] rounded-3xl" />

      {/* Content Section */}
      <div className="px-5 py-4 text-center flex flex-col justify-center">
        <h1 className="text-2xl font-bold text-white drop-shadow-md  transition-all duration-300">
          {data.title}
        </h1>
        <p className="text-sm text-zinc-300 mt-2">{data.description}</p>

        {/* Play Button */}
        <div className=" mt-6 rounded-lg flex  gap-8 overflow-hidden cursor-pointer"> 
          <Link href={`/games/${data.id}`}>
            <button className=" cursor-pointer relative bg-red-700  transition-all duration-300 text-white text-lg font-semibold px-18 py-2 ">
              <span className=" z-10">Play</span>
            </button>
          </Link>
          <button className="cursor-pointer ">See details</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
