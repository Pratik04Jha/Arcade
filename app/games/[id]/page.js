"use client";
import React, { useState, useRef, useEffect } from "react";
import { useParams } from "next/navigation";
import { MdFullscreen, MdFullscreenExit } from "react-icons/md";
import { Simple } from "@/app/components/Simple";
import { HiSpeakerWave, HiSpeakerXMark } from "react-icons/hi2";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { LuCirclePlay } from "react-icons/lu";
import toast, { Toaster } from "react-hot-toast";
import { BiLike, BiDislike, BiSolidDislike, BiSolidLike } from "react-icons/bi";

const gamesData = {
  snakeGame: {
    iframeSrc: "https://pratik04jha.github.io/Snake-Game/",
    title: "Pixel Python: The Classic Crawl | The Snake Game",
  },
  flappyBird: {
    iframeSrc: "https://pratik04jha.github.io/Flappy-Bird/",
    title: "Flapocalypse: Rage of the Bird | Inspired by Flappy Bird",
  },
  fruitCatcher: {
    iframeSrc: "https://pratik04jha.github.io/Fruit-Catcher-Game/",
    title: "Fruit Frenzy: Catch 'Em All! | Fruit Catcher Game",
  },
  boxRunner: {
    iframeSrc: "https://pratik04jha.github.io/Subway-Surfers/",
    title: "Box Runner: Dash Through Dimensions",
  },
  trexRunner: {
    iframeSrc: "https://pratik04jha.github.io/Just-Jump/",
    title: "T-Rex: Run Before Extinction | Inspired by Chrome Dino",
  },
  rockPaperScissor: {
    iframeSrc: "https://pratik04jha.github.io/Stone-Paper-Scissor/",
    title: "RPS Showdown: Hand of Destiny | Rock Paper Scissor",
  },
  ticTacToe: {
    iframeSrc: "https://pratik04jha.github.io/Tic-Tac-Toe/",
    title: "MindGrid: X vs O | Tic Tac Toe",
  },
  numberGuessing: {
    iframeSrc: "https://pratik04jha.github.io/Number-Guessing-Game/",
    title: "GuessQuest: The Mystic Number Challenge | Number Guessing Game",
  },
  bubbling: {
    iframeSrc: "https://pratik04jha.github.io/Bubbling/",
    title: "BubbleBlitz: Pop or Perish | The Bubbling Game",
  },
};

const GamePage = () => {
  const { id } = useParams();
  const game = gamesData[id];

  if (!game) {
    return <h1 className="text-center text-2xl mt-10">Game Not Found</h1>;
  }

  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [musicControls, setMusicControls] = useState(null);
  const gameContainerRef = useRef(null);

  // Initialize the music controls
  useEffect(() => {
    setMusicControls(Simple());
  }, []);

  // Toggle Fullscreen Function
  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      if (gameContainerRef.current.requestFullscreen) {
        gameContainerRef.current.requestFullscreen();
      } else if (gameContainerRef.current.mozRequestFullScreen) {
        gameContainerRef.current.mozRequestFullScreen();
      } else if (gameContainerRef.current.webkitRequestFullscreen) {
        gameContainerRef.current.webkitRequestFullscreen();
      } else if (gameContainerRef.current.msRequestFullscreen) {
        gameContainerRef.current.msRequestFullscreen();
      }
      setIsFullScreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
      setIsFullScreen(false);
    }
  };

  // Handle Play button click
  const handlePlayClick = () => {
    const overlay = document.querySelector(".game-overlay");
    if (overlay) {
      overlay.classList.add("explode");

      // Delay hiding to allow animation to play
      setTimeout(() => {
        setIsPlaying(true);
      }, 600);
    } else {
      setIsPlaying(true);
    }

    if (musicControls) {
      musicControls.pauseMusic();
    }
  };

  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);

  const notify = () =>
    toast("Game has been saved to your favorites!", {
      icon: "✅",
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });

  return (
    <div className="flex flex-col items-center justify-center h-[100vh] w-full pt-10 ">
      <div>
        <Toaster position="bottom-right" reverseOrder={false} />
      </div>
      <div className="w-[80%] h-[90%] flex flex-col  relative">
        <div className="games w-[100%] h-[100%]  z-1000">
          <div ref={gameContainerRef} className="w-[100%] h-[100%] relative">
            {/* Game Overlay */}

            {!isPlaying && (
              <div
                onClick={handlePlayClick}
                className="game-overlay absolute border-1 border-zinc-700 top-0 cursor-pointer left-0 w-full h-full flex flex-col items-center justify-center backdrop-blur-3xl  bg-opacity-60 rounded-2xl text-white z-20 gap-2 transition-all duration-1000 ease-in-out"
              >
                <LuCirclePlay
                  size={100}
                  className="text-white  transition-all "
                />
                <p className="text-2xl font-semibold animate-fade-in">
                  Tap anywhere to play
                </p>
              </div>
            )}

            {/* Blurred Iframe when not playing */}
            <iframe
              className="w-full h-full border-1 border-zinc-700 absolute top-0 left-0 rounded-lg transition-all duration-500"
              src={game.iframeSrc}
              allowFullScreen
            ></iframe>

            <iframe
              className="w-full h-full  absolute -z-100 opacity-70 top-0 blur-3xl left-0 rounded-lg transition-all duration-500"
              src={game.iframeSrc}
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Controls Bar */}
        <div className=" flex justify-between py-1">
          <div className="h-[100%] flex items-center ">
            <h1 className="text-white font-extrabold  text-2xl tracking-1">
              {game.title}
            </h1>
          </div>
          {/*  */}
          <div className="flex gap-2">
            {/* Link button */}
           
            <button
              className="p-1 text-white rounded"
              onClick={() => {
                if (!isLiked) {
                  setIsLiked(true);
                  setIsDisliked(false);
                  notify(); // Notify only when switching to like
                } else {
                  setIsLiked(false);
                }
              }}
            >
              {isLiked ? (
                <BiSolidLike className="cursor-pointer" size={30} />
              ) : (
                <BiLike className="cursor-pointer" size={30} />
              )}
            </button>

            {/* Dislike button */}
            <button
              className="p-1 text-white rounded"
              onClick={() => {
                if (!isDisliked) {
                  setIsDisliked(true);
                  setIsLiked(false);
                } else {
                  setIsDisliked(false);
                }
              }}
            >
              {isDisliked ? (
                <BiSolidDislike className="cursor-pointer" size={30} />
              ) : (
                <BiDislike className="cursor-pointer" size={30} />
              )}
            </button>

            {/* fullscreen button */}
            <button
              onClick={toggleFullScreen}
              className=" p-1 text-white rounded"
            >
              <MdFullscreen className="cursor-pointer" size={35} />
            </button>
          </div>
        </div>
        <div className="flex gap-2">
          <h1>For better performance of game play here - </h1>{" "}
          <a
            href={game.iframeSrc}
            className="text-[#00FFDD]"
            target="_blank"
          >
            {game.iframeSrc}
          </a>
        </div>
      </div>
    </div>
  );
};

export default GamePage;
