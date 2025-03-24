"use client";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import SocialMediaCards from "../components/SocialMediaCards";
import { FaInstagram, FaGithub, FaTwitter, FaFacebook, FaLinkedin, FaQuora } from "react-icons/fa";

const page = () => {
  const record = [
    {
      icon: <FaInstagram size={100} color="black" />,
      title: "Instagram",
      bgColor: "bg-yellow-600",
      link: "",
    },
    {
      icon: <FaGithub size={100} color="black"  />,
      title: "Github",
      bgColor: "bg-green-600",
      link: "",

    },
    {
      icon: <FaTwitter size={100} color="black"  />,
      title: "Twitter",
      bgColor: "bg-blue-600",
      link: "",

    },
    {
      icon: <FaFacebook size={100} color="black"  />,
      title: "Facebook",
      bgColor: "bg-green-600",
      link: "",

    },
    {
      icon: <FaLinkedin size={100} color="black"  />,
      title: "LinkedIn",
      bgColor: "bg-blue-600",
      link: "",

    },
    {
      icon: <FaQuora size={100} color="black"  />,
      title: "Quora",
      bgColor: "bg-yellow-600",
      link: "",

    },
  ];

  const notify = () =>
    toast.success(
      "You have successfully sent the message to the legend Pratik Jha!",
      {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      }
    );

  return (
    <div className="h-[150vh] w-full pt-15 ml-60 pr-60">
      <div className="flex flex-col gap-10 pt-15 justify-center items-center pr-60">
        <h1 className="textShadow text-6xl tracking-tight text-center font-extrabold text-yellow-500">
          Contact me!
        </h1>
        <div className="h-full w-full flex gap-10 flex-col ml-60 pr-60">
          <input
            type="email"
            className="w-[100%] bg-zinc-900 h-14 outline-none px-5"
            placeholder="Enter your email"
          />
          <textarea
            className="bg-zinc-900 resize-none border-5 outline-none h-30 w-[100%] border-yellow-500 px-5 py-2"
            placeholder="Enter your message here!"
          ></textarea>
          <button
            onClick={notify}
            className="bg-yellow-500 border-5 cursor-pointer border-black w-[20%] py-2 text-black font-extrabold m-auto shadow-[-10px_10px_0_#000] ease-in-out duration-200 active:translate-y-[10px] active:-translate-x-[10px] active:shadow-none"
          >
            Send
          </button>
          <ToastContainer />
        </div>

        <div className="h-full w-[100%] flex justify-center flex-wrap gap-4">
          {record.map((items, index) => (
            <SocialMediaCards record={items} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
