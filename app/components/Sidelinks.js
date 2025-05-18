import React from "react";
import Link from "next/link";

const SideLinks = ({ info }) => {
  return (
    <Link
      className={`font-normal  w-full text-[16px] py-2 flex gap-2 pl-2 items-center `}  
      href={info.link}
    >
      {info.icon}
      {info.name}
    </Link>
  );
};

export default SideLinks;
