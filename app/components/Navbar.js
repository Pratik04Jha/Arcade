"use client";
import Link from "next/link";
import { LuSun } from "react-icons/lu";
import { IoSearchSharp } from "react-icons/io5";
import { HiMiniSpeakerWave, HiMiniSpeakerXMark } from "react-icons/hi2";
import { Simple } from "./Simple";
import { useEffect, useState } from "react";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { ToastContainer, toast } from "react-toastify";

const Navbar = () => {
  const [musicControls, setMusicControls] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false); // Track music state

  useEffect(() => {
    setMusicControls(Simple()); // Initialize music controls when the page loads
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
    <nav className="">
      <div className="flex fixed z-500 top-0 w-[85%] justify-between items-center py-2 px-12 bg-[rgb(39,39,42, 0.7)] backdrop-blur-3xl ">
        {/* <div className="h-15 w-50 flex justify-center items-center bg-transparent">
          <img
            className="h-[100%] w-[100%] object-cover object-center"
            src="Logo.png"
            alt=""
          />
        </div> */}
        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Search"
            className="bg-zinc-900 py-2 px-4 rounded-lg outline-0 w-120"
          />
          <button onClick={search} className="py-1">
            <IoSearchSharp size={30} className="" color="white" />
          </button>
        </div>

        <ul className="flex gap-2">
          {/* Toggle Music Button */}
          <div className="flex gap-4">

          <button onClick={toggleMusic} className="">
            {isPlaying ? (
              <HiMiniSpeakerXMark size={30} className="" color="white" />
            ) : (
              <HiMiniSpeakerWave size={30} className="" color="white" />
            )}
          </button>

          <button onClick={notify} className="">
            <LuSun size={30} className="" color="white" />
          </button>
          </div>
          <ToastContainer />

          <Link className="flex items-center justify-center" href="/">
            <Link href="/Links/SignIn">
                  <button className="bg-black rounded-lg py-1 px-4 text-white border cursor-pointer border-white/20 font-semibold text-sm">
                    Sign in
                  </button>
                </Link>
                <Link href="/Links/SignUp">
                  <button className="bg-white rounded-lg py-1 px-4 text-black font-semibold text-sm cursor-pointer">
                    Sign up
                  </button>
                </Link>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
