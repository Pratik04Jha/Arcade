"use client";
import React from "react";
import Card from "./components/Card";

const Page = () => {
  const data = [
    {
      imageSrc:
        "https://w0.peakpx.com/wallpaper/67/891/HD-wallpaper-classic-snake-adventures-snake-game-thumbnail.jpg",
      description:
        "This is a description of the game 1 Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      bgc: "bg-blue-600",
      title: "Snake Game",
      id: "snakeGame",
    },
    {
      imageSrc:
        "https://i.pinimg.com/736x/a0/10/96/a01096406d987a54c14d498a6b420960.jpg",
      description:
        "This is a description of the game 1 lorem ipsum dolor sit amet consectetur adipisicing elit.",
      bgc: "bg-yellow-600",
      title: "Flappy Bird",
      id: "flappyBird",
    },
    {
      imageSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTBnn2kCwICO_qxecI8eBa8OtTIZt-USZfzw&s",
      description:
        "This is a description of the game 1 lorem ipsum dolor sit amet consectetur adipisicing elit.",
      bgc: "bg-green-600",
      title: "Fruit Catcher",
      id: "fruitCatcher",
    },
    {
      imageSrc:
        "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/207140/capsule_616x353.jpg?t=1739394720",
      description:
        "This is a description of the game 1 lorem ipsum dolor sit amet consectetur adipisicing elit.",
      bgc: "bg-green-600",
      title: "Runner Box",
      id: "boxRunner",
    },
    {
      imageSrc:
        "https://i.pinimg.com/736x/16/dd/3c/16dd3c00f195c53e9a7364ca891fcdbb.jpg",
      description:
        "This is a description of the game 1 lorem ipsum dolor sit amet consectetur adipisicing elit.",
      bgc: "bg-blue-600",
      title: "T-Rex Runner",
      id: "trexRunner",
    },
    {
      imageSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl9l8WA_3CYCH29r76wabCqhNGSolJZOZgVw&s",
      description:
        "This is a description of the game 1 lorem ipsum dolor sit amet consectetur adipisicing elit.",
      bgc: "bg-yellow-600",
      title: "Rock Paper Scissors",
      id: "rockPaperScissor",
    },
    {
      imageSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHLGosHWIQ7jppcm_TXZvv_obxWWhOMYmI6g&s",
      description:
        "This is a description of the game 1 lorem ipsum dolor sit amet consectetur adipisicing elit.",
      bgc: "bg-blue-600",
      title: "Tic Tac Toe",
      id: "ticTacToe",
    },
    {
      imageSrc:
        "https://i.pinimg.com/736x/38/b5/d6/38b5d6251f225b5a6c3346131209ab29.jpg",
      description:
        "This is a description of the game 1 lorem ipsum dolor sit amet consectetur adipisicing elit.",
      bgc: "bg-yellow-600",
      title: "Number Guessing",
      id: "numberGuessing",
    },
    {
      imageSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPPjEoI19Vk1D6PPQm8UwM1uhu7yTv9y4fRA&s",
      description:
        "This is a description of the game 1 lorem ipsum dolor sit amet consectetur adipisicing elit.",
      bgc: "bg-green-600",
      title: "Bubbling",
      id: "bubbling",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-15 py-30">
      
      <div className="h-full w-full flex flex-wrap justify-center gap-10">
        {data.map((game, index) => (
          <Card key={index} data={game} />
        ))}
      </div>
    </div>
  );
};

export default Page;
