"use client";
import React, { useState, useRef, useEffect } from "react";
import { useParams } from "next/navigation";
import { MdFullscreen, MdFullscreenExit } from "react-icons/md";
import { HiMiniSpeakerWave } from "react-icons/hi2";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { Simple } from "@/app/components/Simple";

const gamesData = {
  snakeGame: {
    iframeSrc: "https://pratik04jha.github.io/Snake-Game/",
    title: "The Snake Game",
  },
  flappyBird: {
    iframeSrc: "https://pratik04jha.github.io/Flappy-Bird/",
    title: "The Flappy bird",
  },
  fruitCatcher: {
    iframeSrc: "https://pratik04jha.github.io/Fruit-Catcher-Game/",
    title: "The Fruit catcher",
  },
  boxRunner: {
    iframeSrc: "https://pratik04jha.github.io/Subway-Surfers/",
    title: "The Box runner",
  },
  trexRunner: {
    iframeSrc: "https://pratik04jha.github.io/Just-Jump/",
    title: "The T-rex runner",
  },
  rockPaperScissor: {
    iframeSrc: "https://pratik04jha.github.io/Stone-Paper-Scissor/",
    title: "Rock paper scissor",
  },
  ticTacToe: {
    iframeSrc: "https://pratik04jha.github.io/Tic-Tac-Toe/",
    title: "Tic tac toe",
  },
  numberGuessing: {
    iframeSrc: "https://pratik04jha.github.io/Number-Guessing-Game/",
    title: "The number game",
  },
  bubbling: {
    iframeSrc: "https://pratik04jha.github.io/Bubbling/",
    title: "The bubbling game",
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
    setIsPlaying(true);
    if (musicControls) {
      musicControls.pauseMusic();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-[100vh] w-full pt-10 ">
      <div className="w-[80%] h-[90%] flex flex-col  relative">
        <div className="games w-[100%] h-[100%]  z-1000">
          <div ref={gameContainerRef} className="w-[100%] h-[100%] relative">
            {/* Game Overlay */}
            {!isPlaying && (
              <div
                onClick={handlePlayClick}
                className="absolute border-1 border-zinc-700 top-0 cursor-pointer left-0 w-full h-full flex flex-col items-center justify-center backdrop-blur-3xl bg-opacity-80 rounded-2xl text-white z-20"
              >
                <h2 className="text-4xl font-bold mb-4">{game.title}</h2>
                <p>Tap anywhere to play</p>
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
          <div className="flex gap-1">
            <button className=" p-1 text-white rounded">
              <MdOutlineFavoriteBorder className="cursor-pointer" size={30} />
            </button>
            <button className=" p-1 text-white rounded">
              <HiMiniSpeakerWave className="cursor-pointer" size={30} />
            </button>
            <button
              onClick={toggleFullScreen}
              className=" p-1 text-white rounded"
            >
              {isFullScreen ? (
                <MdFullscreenExit className="cursor-pointer" size={30} />
              ) : (
                <MdFullscreen className="cursor-pointer" size={30} />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamePage;
