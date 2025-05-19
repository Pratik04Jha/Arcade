"use client";
import React from "react";
import Card from "./components/Card";

const Page = () => {
  const data = [
    {
      imageSrc:
        // "https://w0.peakpx.com/wallpaper/67/891/HD-wallpaper-classic-snake-adventures-snake-game-thumbnail.jpg",
        "https://img.freepik.com/free-photo/anime-eyes-illustration_23-2151660535.jpg",
      description:
        "Navigate your snake, devour fruits, grow endlessly - but don’t bite your own tail or it’s over. A timeless test of reflexes & planning!",
      bgc: "bg-blue-600",
      title: "Snake Game",
      id: "snakeGame",
    },
    {
      imageSrc:
        // "https://i.pinimg.com/736x/a0/10/96/a01096406d987a54c14d498a6b420960.jpg",
        "https://t3.ftcdn.net/jpg/04/49/19/08/360_F_449190831_i2whvIQdDIGtuIVWT6QfenWwmRApVJ5l.jpg",
      description:
        "Dodge those evil green pipes! It's the ultimate rage-quit game that dares you to beat your own high score.",
      bgc: "bg-yellow-600",
      title: "Flappy Bird",
      id: "flappyBird",
    },
    //
    {
      imageSrc:
        // "https://i.pinimg.com/736x/a0/10/96/a01096406d987a54c14d498a6b420960.jpg",
        "https://4kwallpapers.com/images/walls/thumbs_2t/21604.jpg",
      description:
        "Catch the fruits as much as you can in a limited time period. Fast reflexes and a hunger for sweet points are all you need.",
      bgc: "bg-green-600",
      title: "Fruit Catcher",
      id: "fruitCatcher",
    },
    {
      imageSrc:
        // "https://i.pinimg.com/736x/a0/10/96/a01096406d987a54c14d498a6b420960.jpg",
        "https://www.hindustantimes.com/ht-img/img/2024/02/20/550x309/demon_slayer_season_3_release_1681007034048_1708432154347.jpg",
      description:
        "You’re a box on the run in an endless world of spikes and gaps. Dash your way to survival in this fast-paced, reflex-testing runner!",
      bgc: "bg-green-600",
      title: "Runner Box",
      id: "boxRunner",
    },
    {
      imageSrc:
        // "https://i.pinimg.com/736x/a0/10/96/a01096406d987a54c14d498a6b420960.jpg",
        "https://lightwallpapers.com/downloads/dororo-wallpapers-/34.5900089deed71671d83179d71ac348da.jpg",
      description:
        "Inspired by the classic Chrome dino game-run through the desert, jump over cacti, dodge pterodactyls, and prove you're the king!",
      bgc: "bg-blue-600",
      title: "T-Rex Runner",
      id: "trexRunner",
    },
    {
      imageSrc:
        // "https://i.pinimg.com/736x/a0/10/96/a01096406d987a54c14d498a6b420960.jpg",
        "https://www.hindustantimes.com/ht-img/img/2023/12/27/550x309/solo_leveling_1698871259943_1703697976509.jfif",
      description:
        "Pick your move and challenge the computer in this quick, fun, and endlessly replayable game of strategy and chance!",
      bgc: "bg-yellow-600",
      title: "Rock Paper Scissors",
      id: "rockPaperScissor",
    },
    {
      imageSrc:
        "https://static1.moviewebimages.com/wordpress/wp-content/uploads/2024/10/29-8.jpg",
      description:
        "Simple yet strategic! Outthink your opponent, plan three steps ahead, and claim victory in this modern take on a childhood classic.",
      bgc: "bg-blue-600",
      title: "Tic Tac Toe",
      id: "ticTacToe",
    },
    {
      imageSrc:
        "https://static.toiimg.com/thumb/msid-110342489,width-1280,height-720,resizemode-4/110342489.jpg",
      description:
        "Is it higher or lower? Test your intuition and deduction skills as you try to crack the secret number in the fewest guesses possible!",
      bgc: "bg-yellow-600",
      title: "Number Guessing",
      id: "numberGuessing",
    },
    {
      imageSrc:
        "https://www.impericon.com/cdn/shop/articles/Jujutsu_Kaisen_1200x1200_crop_center.webp?v=1718630060",
      description:
        "Pop bubbles, avoid traps, and conquer colorful chaos! A visually satisfying game with simple mechanics and endless bubbly fun.",
      bgc: "bg-green-600",
      title: "Bubbling",
      id: "bubbling",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center  py-30">
      <div className="flex items-center w-full justify-start pl-20 gap-2 fixed top-13 left-60 z-500 py-2 bg-black/80 backdrop-blur-xl">
        {[
          { title: "All" },
          { title: "Adventure" },
          { title: "Action" },
          { title: "Puzzle" },
          { title: "Horror" },
          { title: "Platformer" },
          { title: "Fighting" },
          { title: "Shooter" },
          { title: "Racing" },
          { title: "Simulation" },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-zinc-900 cursor-pointer hover:bg-zinc-800 text-white px-4 py-2 rounded-lg text-sm font-semibold"
          >
            {item.title}
          </div>
        ))}
      </div>
      <div className="h-full w-full flex flex-wrap justify-center gap-10">
        {data.map((game, index) => (
          <Card key={index} data={game} />
        ))}
      </div>
    </div>
  );
};

export default Page;
