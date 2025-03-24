import Link from "next/link";
import React from "react";

const SocialMediaCards = ({ record }) => {
  return (
    <Link href={record.link} target="_blank">
      <div
        className={`h-50 w-50 border-5 border-black flex flex-col justify-center items-center gap-5 cursor-pointer ${record.bgColor} p-4`}
      >
        <div className="">{record.icon}</div>
        <h1 className="text-2xl font-bold text-black">{record.title}</h1>
      </div>
    </Link>
  );
};

export default SocialMediaCards;
