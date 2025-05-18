"use client";
import React from "react";
import SideLinks from "./Sidelinks";
import { IoHomeOutline } from "react-icons/io5";
import { LuContact } from "react-icons/lu";
import { GoTrophy } from "react-icons/go";
import { IoShareSocialOutline } from "react-icons/io5";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { MdOutlineHistory } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { GiAbstract039 } from "react-icons/gi";
import { FaAngleDoubleLeft } from "react-icons/fa";
import { FaAnglesLeft } from "react-icons/fa6";
import { BsStars } from "react-icons/bs";

const SideBar = () => {
  const info = [
    {
      name: "Home",
      link: "/",
      icon: <IoHomeOutline size={20} />,
      bgc: "bg-yellow-600",
      boxShadow: "shadow-[0px_10px_0px_#483100]",
    },
    {
      name: "About",
      link: "/About",
      icon: <LuContact size={20} />,
      bgc: "bg-blue-600",
      boxShadow: "shadow-[0_10px_0px_#00163f]",
    },
    {
      name: "Contact",
      link: "/Contact",
      icon: <IoShareSocialOutline size={20} />, 
      bgc: "bg-green-600",
      boxShadow: "shadow-[0_10px_0px_#003f08]",
    },
    {
      name: "Leaderboard",
      link: "/Leaderboard",
      icon: <GoTrophy size={20} />, 
      bgc: "bg-yellow-600",
      boxShadow: "shadow-[0_10px_0px_#483100]",
    },
    {
      name: "History",
      link: "/History",
      icon: <MdOutlineHistory size={20} />, 
      bgc: "bg-green-600",
      boxShadow: "shadow-[0_10px_0px_#003f08]",
    },
    {
      name: "Favorite",
      link: "/Favorite",
      icon: <MdOutlineFavoriteBorder size={20} />, 
      bgc: "bg-blue-600",
      boxShadow: "shadow-[0_10px_0px_#00163f]",
    },
  ];

  return (
    <aside className="w-60 p-2 h-screen bg-black border-r-1 border-zinc-800 text-white z-600 fixed top-0 left-0 flex flex-col gap-4 justify-start">
      <div className="flex justify-between items-center px-2">
        <GiAbstract039 size={25} />
        <div className="flex gap-4">
          <BsStars size={20} />
          <FaAnglesLeft size={20} />
        </div>
      </div>
      <div className="flex flex-col gap-0">
        {info.map((item, index) => (
          <SideLinks key={index} info={item} />
        ))}
      </div>

      <div className="absolute flex items-center justify-center bottom-2 left-2 w-56 ">
        <div className="relative w-72 p-4 rounded-xl bg-zinc-900/50 backdrop-blur-md text-white shadow-lg border border-zinc-800 bg-gradient-to-b from-transparent via-transparent pt-5">
          {/* Heading */}
          <h1 className="text-lg font-semibold mb-1">
            Unlock more with Premium membership
          </h1>

          {/* Description */}
          <p className="text-sm text-white/80 mb-4">
            Here comes the benefit of a premium membership.
          </p>

          {/* Button */}
          <button className="w-full py-2 rounded-lg bg-zinc-800/60 text-white font-semibold cursor-pointer">
            Get Started
          </button>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
