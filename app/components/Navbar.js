"use client";
import Link from "next/link";
import { LuSun } from "react-icons/lu";
import { IoSearchSharp } from "react-icons/io5";
import { FaVolumeHigh } from "react-icons/fa6";
import { Simple } from "./Simple";
import { useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { CgMenuGridO } from "react-icons/cg";
import { ImSphere } from "react-icons/im";
import { TbBrandAppleArcade } from "react-icons/tb";
import { GiSlowBlob } from "react-icons/gi";
import { PiSphereDuotone } from "react-icons/pi";
import { RiBloggerLine } from "react-icons/ri";
import { TbAutomation } from "react-icons/tb";
import { GrSun } from "react-icons/gr";
import { MdOutlineFeedback } from "react-icons/md";
import { FaInfo } from "react-icons/fa6";

const Navbar = () => {
  const [musicControls, setMusicControls] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);
  const [showGridMenu, setShowGridMenu] = useState(false);

  const dropdownRef = useRef(null);
  const modalRef = useRef(null);
  const gridMenuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowFeedbackModal(false);
      }
      if (gridMenuRef.current && !gridMenuRef.current.contains(event.target)) {
        setShowGridMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setMusicControls(Simple());
  }, []);

  const toggleMusic = () => {
    if (musicControls) {
      if (isPlaying) {
        musicControls.pauseMusic();
      } else {
        musicControls.playMusic();
      }
      setIsPlaying(!isPlaying); // Toggle state
    }
  };
  const notify = () =>
    toast.info(
      "Pratik Jha don't recommend to switch to light mode, it can damage your precious eyes",
      {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        // transition: Bounce,
      }
    );

  const search = () =>
    toast.warn(
      "Search feature is also under construction, till now enjoy the games",
      {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        // transition: Bounce,
      }
    );

  return (
    <nav className="flex flex-col w-full fixed z-500 top-0 ">
      <div className="flex 0 w-[85%] justify-between px-20 items-center py-2 bg-black/80 backdrop-blur-xl pb-2 ">
        <div className="flex items-center   rounded-lg py-2 border-1 border-zinc-700 gap-2 px-4 ">
          <button onClick={search} className="">
            <IoSearchSharp size={22} className="" color="#a1a1a1" />
          </button>
          <input
            type="text"
            placeholder="Search the games"
            className="   outline-0 text-[16px] w-120"
          />
        </div>

        <ul className="flex gap-2">
          {/* Toggle Music Button */}

          <div className="flex gap-4 items-center  h-10 px-2">
            <button onClick={notify} className="cursor-pointer">
              <MdOutlineFeedback size={24} className="" color="white" />
            </button>
            <button onClick={toggleMusic} className="cursor-pointer">
              {isPlaying ? (
                <FaVolumeHigh size={25} className="" color="white" />
              ) : (
                <FaVolumeHigh size={25} className="" color="white" />
              )}
            </button>

            <button onClick={notify} className="cursor-pointer">
              <GrSun size={26} className="" color="white" />
            </button>
            <button
              onClick={() => {
                setShowGridMenu(!showGridMenu);
                setShowDropdown(false);
              }}
              className="text-white rounded-lg font-extralight cursor-pointer"
            >
              <CgMenuGridO size={25} />
            </button>
          </div>

          {/* Grid Menu Dropdown */}
          {showGridMenu && (
            <div
              ref={gridMenuRef}
              className="absolute right-6 top-16 grid grid-cols-2 gap-4 p-4 w-64 bg-[#1c1c1f] border border-zinc-800 rounded-lg z-50"
            >
              {[
                {
                  icon: <ImSphere size={40} />,
                  title: "Main",
                  link: "https://main-website-9re5rheox-pratik04jha.vercel.app/ ",
                },
                {
                  icon: <TbBrandAppleArcade size={40} />,
                  title: "Arcade",
                  link: "https://arcade-zeta.vercel.app/",
                },
                {
                  icon: <GiSlowBlob size={40} />,
                  title: "AI Website",
                  link: "/",
                },
                {
                  icon: <PiSphereDuotone size={40} />,
                  title: "Portfolio",
                  link: "https://pratik-the-legend.vercel.app/",
                },
                {
                  icon: <RiBloggerLine size={40} />,
                  title: "Blog",
                  link: "/Home",
                },
                {
                  icon: <TbAutomation size={40} />,
                  title: "Automation",
                  link: "/Home",
                },
              ].map((data, i) => (
                <Link
                  href={data.link}
                  target="_blank"
                  key={i}
                  className={`h-20 flex flex-col justify-center items-center gap-2 rounded-lg hover:bg-zinc-800 transition duration-200 hover:scale-105 cursor-pointer`}
                >
                  {data.icon}
                  {data.title}
                </Link>
              ))}
            </div>
          )}

          <div className="flex items-center justify-center gap-1" >
            <Link href="/Links/SignIn">
              <button className="bg-black rounded-lg py-2 px-5 text-white border cursor-pointer border-zinc-700 font-semibold text-sm">
                Sign in
              </button>
            </Link>
            <Link href="/Links/SignUp">
              <button className="bg-white rounded-lg py-2 px-5 text-black font-semibold text-sm cursor-pointer">
                Sign up
              </button>
            </Link>
          </div>
        </ul>
      </div>
      
    </nav>
  );
};

export default Navbar;
