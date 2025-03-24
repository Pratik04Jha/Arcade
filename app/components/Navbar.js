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
        <div className="h-15 w-50 flex justify-center items-center bg-transparent">
          <img
            className="h-[100%] w-[100%] object-cover object-center"
            src="Logo.png"
            alt=""
          />
        </div>
        <div className="flex items-center gap-5">
          <input
            type="text"
            placeholder="Search"
            className="bg-zinc-900 p-2 outline-0 w-120"
          />
          <button onClick={search}  className="theme bg-amber-300 py-1">
            <IoSearchSharp size={30} className="w-12" color="black" />
          </button>
        </div>
        <ul className="flex gap-5">
          {/* Toggle Music Button */}
          <button onClick={toggleMusic} className="theme bg-amber-300">
            {isPlaying ? (
              <HiMiniSpeakerXMark size={30} className="w-12" color="black" />
            ) : (
              <HiMiniSpeakerWave size={30} className="w-12" color="black" />
            )}
          </button>
          
              <button onClick={notify} className="theme bg-amber-300">
                <LuSun size={30} className="w-12" color="black" />
              </button>
              <ToastContainer />
          

          <Link className="flex items-center justify-center" href="/">
            <SignedOut>
              <SignInButton className="sign mr-4" />
              <SignUpButton className="sign" />
            </SignedOut>
            <SignedIn>
              <UserButton
                appearance={{
                  elements: {
                    userButtonAvatarBox: {
                      width: "50px", // Adjust size
                      height: "50px",
                      border: "4px solid black",
                      borderRadius: "50%",
                    },
                    userButtonPopoverCard: {
                      backgroundColor: "rgb(0, 0, 0)", // Dark background
                      borderRadius: "0px",
                      border: "5px solid #ffd230",
                    },
                    userButtonPopoverActionButton: {
                      backgroundColor: "rgb(0, 0, 0)", // Amber color
                      fontSize: "16px",
                      color: "#fff",
                      padding: "10px 15px",
                      borderRadius: "0px",
                      transition: "all 0.2s ease-in-out",
                      "&:hover": {
                        backgroundColor: "rgb(30, 30, 30)",
                        color: "white",
                      },
                    },
                    userButtonPopoverActionButtonIcon: {
                      color: "rgb(255, 255, 255)", // Amber color for icons
                    },
                    userButtonPopoverFooter: {
                      height: "0px",
                    },

                    userButtonPopoverMain: {
                      backgroundColor: "black",
                      color: "white",
                      padding: "15px",
                    },

                    userProfile: {
                      backgroundColor: "#121212", // Dark mode
                      borderRadius: "10px",
                      padding: "20px",
                    },
                    userProfilePage: {
                      backgroundColor: "#121212",
                      color: "white",
                    },
                    userProfileSection: {
                      backgroundColor: "#1E1E1E",
                      padding: "10px",
                      borderRadius: "8px",
                    },
                    userProfileSectionTitle: {
                      color: "white",
                      fontSize: "18px",
                      fontWeight: "bold",
                    },
                    userProfileFormFieldInput: {
                      backgroundColor: "#222",
                      color: "white",
                      border: "1px solid #ffd230",
                      padding: "8px",
                    },
                    userProfileActionButton: {
                      backgroundColor: "#ffd230",
                      color: "black",
                      borderRadius: "5px",
                      padding: "10px",
                      fontSize: "16px",
                      "&:hover": { backgroundColor: "#e5b700", color: "black" },
                    },
                  },
                }}
              />
            </SignedIn>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
