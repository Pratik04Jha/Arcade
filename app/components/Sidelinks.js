import React from "react";
import Link from "next/link";

const SideLinks = ({ info }) => {
  return (
    <Link
      className={`font-bold  link w-full h-13 text-[18px] flex gap-2 pl-5 items-center ${info.bgc} ${info.boxShadow}`}  
      href={info.link}
    >
      {info.icon}
      {info.name}
    </Link>
  );
};

export default SideLinks;
