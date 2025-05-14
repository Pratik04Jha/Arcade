import React from "react";
import Link from "next/link";

const SideLinks = ({ info }) => {
  return (
    <Link
      className={`font-semibold  w-full h-13 text-[18px] flex gap-2 pl-5 items-center `}  
      href={info.link}
    >
      {info.icon}
      {info.name}
    </Link>
  );
};

export default SideLinks;
