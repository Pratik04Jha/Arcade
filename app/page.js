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
        "This is a description of the game 1 Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      bgc: "bg-blue-600",
      title: "Snake Game",
      id: "snakeGame",
    },
    {
      imageSrc:
        // "https://i.pinimg.com/736x/a0/10/96/a01096406d987a54c14d498a6b420960.jpg",
        "https://t3.ftcdn.net/jpg/04/49/19/08/360_F_449190831_i2whvIQdDIGtuIVWT6QfenWwmRApVJ5l.jpg",
      description:
        "This is a description of the game 1 lorem ipsum dolor sit amet consectetur adipisicing elit.",
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
        "This is a description of the game 1 lorem ipsum dolor sit amet consectetur adipisicing elit.",
      bgc: "bg-green-600",
      title: "Fruit Catcher",
      id: "fruitCatcher",
    },
    {
      imageSrc:
        // "https://i.pinimg.com/736x/a0/10/96/a01096406d987a54c14d498a6b420960.jpg",
        "https://www.hindustantimes.com/ht-img/img/2024/02/20/550x309/demon_slayer_season_3_release_1681007034048_1708432154347.jpg",
      description:
        "This is a description of the game 1 lorem ipsum dolor sit amet consectetur adipisicing elit.",
      bgc: "bg-green-600",
      title: "Runner Box",
      id: "boxRunner",
    },
    {
      imageSrc:
        // "https://i.pinimg.com/736x/a0/10/96/a01096406d987a54c14d498a6b420960.jpg",
        "https://lightwallpapers.com/downloads/dororo-wallpapers-/34.5900089deed71671d83179d71ac348da.jpg",
      description:
        "This is a description of the game 1 lorem ipsum dolor sit amet consectetur adipisicing elit.",
      bgc: "bg-blue-600",
      title: "T-Rex Runner",
      id: "trexRunner",
    },
    {
      imageSrc:
        // "https://i.pinimg.com/736x/a0/10/96/a01096406d987a54c14d498a6b420960.jpg",
        "https://www.hindustantimes.com/ht-img/img/2023/12/27/550x309/solo_leveling_1698871259943_1703697976509.jfif",
      description:
        "This is a description of the game 1 lorem ipsum dolor sit amet consectetur adipisicing elit.",
      bgc: "bg-yellow-600",
      title: "Rock Paper Scissors",
      id: "rockPaperScissor",
    },
    {
      imageSrc:
        "https://static1.moviewebimages.com/wordpress/wp-content/uploads/2024/10/29-8.jpg",
      description:
        "This is a description of the game 1 lorem ipsum dolor sit amet consectetur adipisicing elit.",
      bgc: "bg-blue-600",
      title: "Tic Tac Toe",
      id: "ticTacToe",
    },
    {
      imageSrc:
        "https://static.toiimg.com/thumb/msid-110342489,width-1280,height-720,resizemode-4/110342489.jpg",
      description:
        "This is a description of the game 1 lorem ipsum dolor sit amet consectetur adipisicing elit.",
      bgc: "bg-yellow-600",
      title: "Number Guessing",
      id: "numberGuessing",
    },
    {
      imageSrc:
        "https://www.impericon.com/cdn/shop/articles/Jujutsu_Kaisen_1200x1200_crop_center.webp?v=1718630060",
      description:
        "This is a description of the game 1 lorem ipsum dolor sit amet consectetur adipisicing elit.",
      bgc: "bg-green-600",
      title: "Bubbling",
      id: "bubbling",
    },
    {
      imageSrc:
        // "https://w0.peakpx.com/wallpaper/67/891/HD-wallpaper-classic-snake-adventures-snake-game-thumbnail.jpg",
        "https://img.freepik.com/free-photo/anime-eyes-illustration_23-2151660535.jpg",
      description:
        "This is a description of the game 1 Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      bgc: "bg-blue-600",
      title: "Snake Game",
      id: "snakeGame",
    },
    {
      imageSrc:
        // "https://i.pinimg.com/736x/a0/10/96/a01096406d987a54c14d498a6b420960.jpg",
        "https://t3.ftcdn.net/jpg/04/49/19/08/360_F_449190831_i2whvIQdDIGtuIVWT6QfenWwmRApVJ5l.jpg",
      description:
        "This is a description of the game 1 lorem ipsum dolor sit amet consectetur adipisicing elit.",
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
        "This is a description of the game 1 lorem ipsum dolor sit amet consectetur adipisicing elit.",
      bgc: "bg-green-600",
      title: "Fruit Catcher",
      id: "fruitCatcher",
    },
    {
      imageSrc:
        // "https://i.pinimg.com/736x/a0/10/96/a01096406d987a54c14d498a6b420960.jpg",
        "https://www.hindustantimes.com/ht-img/img/2024/02/20/550x309/demon_slayer_season_3_release_1681007034048_1708432154347.jpg",
      description:
        "This is a description of the game 1 lorem ipsum dolor sit amet consectetur adipisicing elit.",
      bgc: "bg-green-600",
      title: "Runner Box",
      id: "boxRunner",
    },
    {
      imageSrc:
        // "https://i.pinimg.com/736x/a0/10/96/a01096406d987a54c14d498a6b420960.jpg",
        "https://lightwallpapers.com/downloads/dororo-wallpapers-/34.5900089deed71671d83179d71ac348da.jpg",
      description:
        "This is a description of the game 1 lorem ipsum dolor sit amet consectetur adipisicing elit.",
      bgc: "bg-blue-600",
      title: "T-Rex Runner",
      id: "trexRunner",
    },
    {
      imageSrc:
        // "https://i.pinimg.com/736x/a0/10/96/a01096406d987a54c14d498a6b420960.jpg",
        "https://www.hindustantimes.com/ht-img/img/2023/12/27/550x309/solo_leveling_1698871259943_1703697976509.jfif",
      description:
        "This is a description of the game 1 lorem ipsum dolor sit amet consectetur adipisicing elit.",
      bgc: "bg-yellow-600",
      title: "Rock Paper Scissors",
      id: "rockPaperScissor",
    },
    {
      imageSrc:
        "https://static1.moviewebimages.com/wordpress/wp-content/uploads/2024/10/29-8.jpg",
      description:
        "This is a description of the game 1 lorem ipsum dolor sit amet consectetur adipisicing elit.",
      bgc: "bg-blue-600",
      title: "Tic Tac Toe",
      id: "ticTacToe",
    },
    {
      imageSrc:
        "https://static.toiimg.com/thumb/msid-110342489,width-1280,height-720,resizemode-4/110342489.jpg",
      description:
        "This is a description of the game 1 lorem ipsum dolor sit amet consectetur adipisicing elit.",
      bgc: "bg-yellow-600",
      title: "Number Guessing",
      id: "numberGuessing",
    },
    {
      imageSrc:
        "https://www.impericon.com/cdn/shop/articles/Jujutsu_Kaisen_1200x1200_crop_center.webp?v=1718630060",
      description:
        "This is a description of the game 1 lorem ipsum dolor sit amet consectetur adipisicing elit.",
      bgc: "bg-green-600",
      title: "Bubbling",
      id: "bubbling",
    },{
      imageSrc:
        // "https://w0.peakpx.com/wallpaper/67/891/HD-wallpaper-classic-snake-adventures-snake-game-thumbnail.jpg",
        "https://img.freepik.com/free-photo/anime-eyes-illustration_23-2151660535.jpg",
      description:
        "This is a description of the game 1 Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      bgc: "bg-blue-600",
      title: "Snake Game",
      id: "snakeGame",
    },
    {
      imageSrc:
        // "https://i.pinimg.com/736x/a0/10/96/a01096406d987a54c14d498a6b420960.jpg",
        "https://t3.ftcdn.net/jpg/04/49/19/08/360_F_449190831_i2whvIQdDIGtuIVWT6QfenWwmRApVJ5l.jpg",
      description:
        "This is a description of the game 1 lorem ipsum dolor sit amet consectetur adipisicing elit.",
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
        "This is a description of the game 1 lorem ipsum dolor sit amet consectetur adipisicing elit.",
      bgc: "bg-green-600",
      title: "Fruit Catcher",
      id: "fruitCatcher",
    },
    {
      imageSrc:
        // "https://i.pinimg.com/736x/a0/10/96/a01096406d987a54c14d498a6b420960.jpg",
        "https://www.hindustantimes.com/ht-img/img/2024/02/20/550x309/demon_slayer_season_3_release_1681007034048_1708432154347.jpg",
      description:
        "This is a description of the game 1 lorem ipsum dolor sit amet consectetur adipisicing elit.",
      bgc: "bg-green-600",
      title: "Runner Box",
      id: "boxRunner",
    },
    {
      imageSrc:
        // "https://i.pinimg.com/736x/a0/10/96/a01096406d987a54c14d498a6b420960.jpg",
        "https://lightwallpapers.com/downloads/dororo-wallpapers-/34.5900089deed71671d83179d71ac348da.jpg",
      description:
        "This is a description of the game 1 lorem ipsum dolor sit amet consectetur adipisicing elit.",
      bgc: "bg-blue-600",
      title: "T-Rex Runner",
      id: "trexRunner",
    },
    {
      imageSrc:
        // "https://i.pinimg.com/736x/a0/10/96/a01096406d987a54c14d498a6b420960.jpg",
        "https://www.hindustantimes.com/ht-img/img/2023/12/27/550x309/solo_leveling_1698871259943_1703697976509.jfif",
      description:
        "This is a description of the game 1 lorem ipsum dolor sit amet consectetur adipisicing elit.",
      bgc: "bg-yellow-600",
      title: "Rock Paper Scissors",
      id: "rockPaperScissor",
    },
    {
      imageSrc:
        "https://static1.moviewebimages.com/wordpress/wp-content/uploads/2024/10/29-8.jpg",
      description:
        "This is a description of the game 1 lorem ipsum dolor sit amet consectetur adipisicing elit.",
      bgc: "bg-blue-600",
      title: "Tic Tac Toe",
      id: "ticTacToe",
    },
    {
      imageSrc:
        "https://static.toiimg.com/thumb/msid-110342489,width-1280,height-720,resizemode-4/110342489.jpg",
      description:
        "This is a description of the game 1 lorem ipsum dolor sit amet consectetur adipisicing elit.",
      bgc: "bg-yellow-600",
      title: "Number Guessing",
      id: "numberGuessing",
    },
    {
      imageSrc:
        "https://www.impericon.com/cdn/shop/articles/Jujutsu_Kaisen_1200x1200_crop_center.webp?v=1718630060",
      description:
        "This is a description of the game 1 lorem ipsum dolor sit amet consectetur adipisicing elit.",
      bgc: "bg-green-600",
      title: "Bubbling",
      id: "bubbling",
    },{
      imageSrc:
        // "https://w0.peakpx.com/wallpaper/67/891/HD-wallpaper-classic-snake-adventures-snake-game-thumbnail.jpg",
        "https://img.freepik.com/free-photo/anime-eyes-illustration_23-2151660535.jpg",
      description:
        "This is a description of the game 1 Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      bgc: "bg-blue-600",
      title: "Snake Game",
      id: "snakeGame",
    },
    {
      imageSrc:
        // "https://i.pinimg.com/736x/a0/10/96/a01096406d987a54c14d498a6b420960.jpg",
        "https://t3.ftcdn.net/jpg/04/49/19/08/360_F_449190831_i2whvIQdDIGtuIVWT6QfenWwmRApVJ5l.jpg",
      description:
        "This is a description of the game 1 lorem ipsum dolor sit amet consectetur adipisicing elit.",
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
        "This is a description of the game 1 lorem ipsum dolor sit amet consectetur adipisicing elit.",
      bgc: "bg-green-600",
      title: "Fruit Catcher",
      id: "fruitCatcher",
    },
    {
      imageSrc:
        // "https://i.pinimg.com/736x/a0/10/96/a01096406d987a54c14d498a6b420960.jpg",
        "https://www.hindustantimes.com/ht-img/img/2024/02/20/550x309/demon_slayer_season_3_release_1681007034048_1708432154347.jpg",
      description:
        "This is a description of the game 1 lorem ipsum dolor sit amet consectetur adipisicing elit.",
      bgc: "bg-green-600",
      title: "Runner Box",
      id: "boxRunner",
    },
    {
      imageSrc:
        // "https://i.pinimg.com/736x/a0/10/96/a01096406d987a54c14d498a6b420960.jpg",
        "https://lightwallpapers.com/downloads/dororo-wallpapers-/34.5900089deed71671d83179d71ac348da.jpg",
      description:
        "This is a description of the game 1 lorem ipsum dolor sit amet consectetur adipisicing elit.",
      bgc: "bg-blue-600",
      title: "T-Rex Runner",
      id: "trexRunner",
    },
    {
      imageSrc:
        // "https://i.pinimg.com/736x/a0/10/96/a01096406d987a54c14d498a6b420960.jpg",
        "https://www.hindustantimes.com/ht-img/img/2023/12/27/550x309/solo_leveling_1698871259943_1703697976509.jfif",
      description:
        "This is a description of the game 1 lorem ipsum dolor sit amet consectetur adipisicing elit.",
      bgc: "bg-yellow-600",
      title: "Rock Paper Scissors",
      id: "rockPaperScissor",
    },
    {
      imageSrc:
        "https://static1.moviewebimages.com/wordpress/wp-content/uploads/2024/10/29-8.jpg",
      description:
        "This is a description of the game 1 lorem ipsum dolor sit amet consectetur adipisicing elit.",
      bgc: "bg-blue-600",
      title: "Tic Tac Toe",
      id: "ticTacToe",
    },
    {
      imageSrc:
        "https://static.toiimg.com/thumb/msid-110342489,width-1280,height-720,resizemode-4/110342489.jpg",
      description:
        "This is a description of the game 1 lorem ipsum dolor sit amet consectetur adipisicing elit.",
      bgc: "bg-yellow-600",
      title: "Number Guessing",
      id: "numberGuessing",
    },
    {
      imageSrc:
        "https://www.impericon.com/cdn/shop/articles/Jujutsu_Kaisen_1200x1200_crop_center.webp?v=1718630060",
      description:
        "This is a description of the game 1 lorem ipsum dolor sit amet consectetur adipisicing elit.",
      bgc: "bg-green-600",
      title: "Bubbling",
      id: "bubbling",
    },{
      imageSrc:
        // "https://w0.peakpx.com/wallpaper/67/891/HD-wallpaper-classic-snake-adventures-snake-game-thumbnail.jpg",
        "https://img.freepik.com/free-photo/anime-eyes-illustration_23-2151660535.jpg",
      description:
        "This is a description of the game 1 Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      bgc: "bg-blue-600",
      title: "Snake Game",
      id: "snakeGame",
    },
    {
      imageSrc:
        // "https://i.pinimg.com/736x/a0/10/96/a01096406d987a54c14d498a6b420960.jpg",
        "https://t3.ftcdn.net/jpg/04/49/19/08/360_F_449190831_i2whvIQdDIGtuIVWT6QfenWwmRApVJ5l.jpg",
      description:
        "This is a description of the game 1 lorem ipsum dolor sit amet consectetur adipisicing elit.",
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
        "This is a description of the game 1 lorem ipsum dolor sit amet consectetur adipisicing elit.",
      bgc: "bg-green-600",
      title: "Fruit Catcher",
      id: "fruitCatcher",
    },
    {
      imageSrc:
        // "https://i.pinimg.com/736x/a0/10/96/a01096406d987a54c14d498a6b420960.jpg",
        "https://www.hindustantimes.com/ht-img/img/2024/02/20/550x309/demon_slayer_season_3_release_1681007034048_1708432154347.jpg",
      description:
        "This is a description of the game 1 lorem ipsum dolor sit amet consectetur adipisicing elit.",
      bgc: "bg-green-600",
      title: "Runner Box",
      id: "boxRunner",
    },
    {
      imageSrc:
        // "https://i.pinimg.com/736x/a0/10/96/a01096406d987a54c14d498a6b420960.jpg",
        "https://lightwallpapers.com/downloads/dororo-wallpapers-/34.5900089deed71671d83179d71ac348da.jpg",
      description:
        "This is a description of the game 1 lorem ipsum dolor sit amet consectetur adipisicing elit.",
      bgc: "bg-blue-600",
      title: "T-Rex Runner",
      id: "trexRunner",
    },
    {
      imageSrc:
        // "https://i.pinimg.com/736x/a0/10/96/a01096406d987a54c14d498a6b420960.jpg",
        "https://www.hindustantimes.com/ht-img/img/2023/12/27/550x309/solo_leveling_1698871259943_1703697976509.jfif",
      description:
        "This is a description of the game 1 lorem ipsum dolor sit amet consectetur adipisicing elit.",
      bgc: "bg-yellow-600",
      title: "Rock Paper Scissors",
      id: "rockPaperScissor",
    },
    {
      imageSrc:
        "https://static1.moviewebimages.com/wordpress/wp-content/uploads/2024/10/29-8.jpg",
      description:
        "This is a description of the game 1 lorem ipsum dolor sit amet consectetur adipisicing elit.",
      bgc: "bg-blue-600",
      title: "Tic Tac Toe",
      id: "ticTacToe",
    },
    {
      imageSrc:
        "https://static.toiimg.com/thumb/msid-110342489,width-1280,height-720,resizemode-4/110342489.jpg",
      description:
        "This is a description of the game 1 lorem ipsum dolor sit amet consectetur adipisicing elit.",
      bgc: "bg-yellow-600",
      title: "Number Guessing",
      id: "numberGuessing",
    },
    {
      imageSrc:
        "https://www.impericon.com/cdn/shop/articles/Jujutsu_Kaisen_1200x1200_crop_center.webp?v=1718630060",
      description:
        "This is a description of the game 1 lorem ipsum dolor sit amet consectetur adipisicing elit.",
      bgc: "bg-green-600",
      title: "Bubbling",
      id: "bubbling",
    },{
      imageSrc:
        // "https://w0.peakpx.com/wallpaper/67/891/HD-wallpaper-classic-snake-adventures-snake-game-thumbnail.jpg",
        "https://img.freepik.com/free-photo/anime-eyes-illustration_23-2151660535.jpg",
      description:
        "This is a description of the game 1 Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      bgc: "bg-blue-600",
      title: "Snake Game",
      id: "snakeGame",
    },
    {
      imageSrc:
        // "https://i.pinimg.com/736x/a0/10/96/a01096406d987a54c14d498a6b420960.jpg",
        "https://t3.ftcdn.net/jpg/04/49/19/08/360_F_449190831_i2whvIQdDIGtuIVWT6QfenWwmRApVJ5l.jpg",
      description:
        "This is a description of the game 1 lorem ipsum dolor sit amet consectetur adipisicing elit.",
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
        "This is a description of the game 1 lorem ipsum dolor sit amet consectetur adipisicing elit.",
      bgc: "bg-green-600",
      title: "Fruit Catcher",
      id: "fruitCatcher",
    },
    {
      imageSrc:
        // "https://i.pinimg.com/736x/a0/10/96/a01096406d987a54c14d498a6b420960.jpg",
        "https://www.hindustantimes.com/ht-img/img/2024/02/20/550x309/demon_slayer_season_3_release_1681007034048_1708432154347.jpg",
      description:
        "This is a description of the game 1 lorem ipsum dolor sit amet consectetur adipisicing elit.",
      bgc: "bg-green-600",
      title: "Runner Box",
      id: "boxRunner",
    },
    {
      imageSrc:
        // "https://i.pinimg.com/736x/a0/10/96/a01096406d987a54c14d498a6b420960.jpg",
        "https://lightwallpapers.com/downloads/dororo-wallpapers-/34.5900089deed71671d83179d71ac348da.jpg",
      description:
        "This is a description of the game 1 lorem ipsum dolor sit amet consectetur adipisicing elit.",
      bgc: "bg-blue-600",
      title: "T-Rex Runner",
      id: "trexRunner",
    },
    {
      imageSrc:
        // "https://i.pinimg.com/736x/a0/10/96/a01096406d987a54c14d498a6b420960.jpg",
        "https://www.hindustantimes.com/ht-img/img/2023/12/27/550x309/solo_leveling_1698871259943_1703697976509.jfif",
      description:
        "This is a description of the game 1 lorem ipsum dolor sit amet consectetur adipisicing elit.",
      bgc: "bg-yellow-600",
      title: "Rock Paper Scissors",
      id: "rockPaperScissor",
    },
    {
      imageSrc:
        "https://static1.moviewebimages.com/wordpress/wp-content/uploads/2024/10/29-8.jpg",
      description:
        "This is a description of the game 1 lorem ipsum dolor sit amet consectetur adipisicing elit.",
      bgc: "bg-blue-600",
      title: "Tic Tac Toe",
      id: "ticTacToe",
    },
    {
      imageSrc:
        "https://static.toiimg.com/thumb/msid-110342489,width-1280,height-720,resizemode-4/110342489.jpg",
      description:
        "This is a description of the game 1 lorem ipsum dolor sit amet consectetur adipisicing elit.",
      bgc: "bg-yellow-600",
      title: "Number Guessing",
      id: "numberGuessing",
    },
    {
      imageSrc:
        "https://www.impericon.com/cdn/shop/articles/Jujutsu_Kaisen_1200x1200_crop_center.webp?v=1718630060",
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
