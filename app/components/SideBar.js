'use client'
import React from "react";
import SideLinks from "./Sidelinks";
import { IoHomeOutline } from "react-icons/io5";
import { LuContact } from "react-icons/lu";
import { GoTrophy } from "react-icons/go";
import { IoShareSocialOutline } from "react-icons/io5";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { MdOutlineHistory } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { useClerk } from "@clerk/nextjs"; // Import Clerk's functions

const SideBar = () => {
  const info = [
    {
      name: "Home",
      link: "/",
      icon: <IoHomeOutline />, // Directly use JSX element
      bgc: "bg-yellow-600",
      boxShadow: "shadow-[0px_10px_0px_#483100]",
    },
    {
      name: "About",
      link: "/About",
      icon: <LuContact />, // Different icon for About
      bgc: "bg-blue-600",
      boxShadow: "shadow-[0_10px_0px_#00163f]",
    },
    {
      name: "Contact",
      link: "/Contact",
      icon: <IoShareSocialOutline />, // Different icon for Contact
      bgc: "bg-green-600",
      boxShadow: "shadow-[0_10px_0px_#003f08]",
    },
    {
      name: "Leaderboard",
      link: "/Leaderboard",
      icon: <GoTrophy />, // Different icon for Leaderboard
      bgc: "bg-yellow-600",
      boxShadow: "shadow-[0_10px_0px_#483100]",
    },
    {
      name: "History",
      link: "/History",
      icon: <MdOutlineHistory />, // Different icon for History
      bgc: "bg-green-600",
      boxShadow: "shadow-[0_10px_0px_#003f08]",
    },
    {
      name: "Favorite",
      link: "/Favorite",
      icon: <MdOutlineFavoriteBorder />, // Different icon for Favorite
      bgc: "bg-blue-600",
      boxShadow: "shadow-[0_10px_0px_#00163f]",
    },
  ];
  const { redirectToUserProfile } = useClerk(); // Get Clerk's profile redirect function

  return (
    <aside className="w-60 p-2 h-screen bg-zinc-900/80 rounded-3xl text-white z-600 fixed top-0 left-0 flex flex-col gap-4 justify-between">
      <div className="flex flex-col gap-2">
        {info.map((item, index) => (
          <SideLinks key={index} info={item} />
        ))}
      </div>
      {/* <div>
        <button
          className="settings w-full h-13 text-2xl flex pl-5 items-center "
          onClick={() => redirectToUserProfile()}
        >
          {" "}
          <IoSettingsOutline /> Settings
        </button>
      </div> */}
    </aside>
  );
};

export default SideBar;
