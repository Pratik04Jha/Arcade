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
    title: "The Snake Game (2D) - Made in 2024",
  },
  flappyBird: {
    iframeSrc: "https://pratik04jha.github.io/Flappy-Bird/",
    title: "The Flappy bird (2D) - Made in 2024",
  },
  fruitCatcher: {
    iframeSrc: "https://pratik04jha.github.io/Fruit-Catcher-Game/",
    title: "The Fruit catcher (2D) - Made in 2024",
  },
  boxRunner: {
    iframeSrc: "https://pratik04jha.github.io/Subway-Surfers/",
    title: "The Box runner (2D) - Made in 2024",
  },
  trexRunner: {
    iframeSrc: "https://pratik04jha.github.io/Just-Jump/",
    title: "The T-rex runner (2D) - Made in 2024",
  },
  rockPaperScissor: {
    iframeSrc: "https://pratik04jha.github.io/Stone-Paper-Scissor/",
    title: "Rock paper scissor (2D) - Made in 2024",
  },
  ticTacToe: {
    iframeSrc: "https://pratik04jha.github.io/Tic-Tac-Toe/",
    title: "Tic tac toe (2D) - Made in 2024",
  },
  numberGuessing: {
    iframeSrc: "https://pratik04jha.github.io/Number-Guessing-Game/",
    title: "The number game (2D) - Made in 2024",
  },
  bubbling: {
    iframeSrc: "https://pratik04jha.github.io/Bubbling/",
    title: "The bubbling game (2D) - Made in 2024",
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
    <div className="flex flex-col items-center justify-center h-[100vh] w-full pt-10">
      <div className="w-[75%] h-[80vh] flex flex-col border-7 border-black relative">
        <div className="games w-[100%] h-[100%] border-10 border-b-0 border-yellow-500 z-1000">
          <div ref={gameContainerRef} className="w-[100%] h-[100%] relative">
            {/* Game Overlay */}
            {!isPlaying && (
              <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center backdrop-blur-3xl bg-opacity-80 text-white z-20">
                <h2 className="text-4xl font-bold mb-4">{game.title}</h2>
                <button
                  onClick={handlePlayClick}
                  className="button px-6 py-3 bg-yellow-500 text-black font-bold text-xl transition"
                >
                  Play
                </button>
                <p className="mt-5 w-1/2 text-center " >Please ensure to turn off the background music before playing to avoid double music</p>
              </div>
            )}

            {/* Blurred Iframe when not playing */}
            <iframe
              className="w-full h-full border-5 absolute top-0 left-0 border-black transition-all duration-500"
              src={game.iframeSrc}
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Controls Bar */}
        <div className="bg-yellow-500 flex justify-between py-1 border-2 border-t-0 border-yellow-500">
          <div className="h-[100%] flex items-center pl-5">
            <h1 className="text-black font-extrabold text-2xl tracking-tighter">
              {game.title}
            </h1>
          </div>
          <div className="flex gap-2 pr-4">
            <button className="button px-1 py-1 text-white rounded">
              <MdOutlineFavoriteBorder size={30} />
            </button>
            <button className="button px-1 py-1 text-white rounded">
              <HiMiniSpeakerWave size={30} />
            </button>
            <button
              onClick={toggleFullScreen}
              className="button px-1 py-1 text-white rounded"
            >
              {isFullScreen ? (
                <MdFullscreenExit size={30} />
              ) : (
                <MdFullscreen size={30} />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamePage;
