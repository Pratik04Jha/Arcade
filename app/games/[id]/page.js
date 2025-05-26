"use client"
import { useState, useRef, useEffect } from "react"
import { useParams } from "next/navigation"
import { MdFullscreen } from "react-icons/md"
import { Simple } from "@/app/components/Simple"
import { LuCirclePlay } from "react-icons/lu"
import toast, { Toaster } from "react-hot-toast"
import { BiLike, BiDislike, BiSolidDislike, BiSolidLike } from "react-icons/bi"
import { addFavorite, removeFavorite, isFavorited } from "@/lib/favorites"

const GamePage = () => {
  const [isFullScreen, setIsFullScreen] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [musicControls, setMusicControls] = useState(null)
  const [isLiked, setIsLiked] = useState(false)
  const [isDisliked, setIsDisliked] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const gameContainerRef = useRef(null)
  const { id } = useParams()
  const games = gamesData[id]

  const userId = "user123" // i will Replace with real user ID from Firebase Auth later

  if (!games) {
    return <h1 className="text-center text-2xl mt-10">Game Not Found</h1>
  }

  // Check if game is already favorited when component mounts
  useEffect(() => {
    const checkFavoriteStatus = async () => {
      try {
        const favorited = await isFavorited(userId, games.id)
        setIsLiked(favorited)
      } catch (error) {
        console.error("Error checking favorite status:", error)
      }
    }

    checkFavoriteStatus()
  }, [games.id, userId])

  // Initialize the music controls
  useEffect(() => {
    setMusicControls(Simple())
  }, [])

  // Toggle Fullscreen Function
  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      if (gameContainerRef.current.requestFullscreen) {
        gameContainerRef.current.requestFullscreen()
      } else if (gameContainerRef.current.mozRequestFullScreen) {
        gameContainerRef.current.mozRequestFullScreen()
      } else if (gameContainerRef.current.webkitRequestFullscreen) {
        gameContainerRef.current.webkitRequestFullscreen()
      } else if (gameContainerRef.current.msRequestFullscreen) {
        gameContainerRef.current.msRequestFullscreen()
      }
      setIsFullScreen(true)
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen()
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen()
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen()
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen()
      }
      setIsFullScreen(false)
    }
  }

  // Handle Play button click
  const handlePlayClick = () => {
    const overlay = document.querySelector(".game-overlay")
    if (overlay) {
      overlay.classList.add("explode")

      // Delay hiding to allow animation to play
      setTimeout(() => {
        setIsPlaying(true)
      }, 600)
    } else {
      setIsPlaying(true)
    }

    if (musicControls) {
      musicControls.pauseMusic()
    }
  }

  const notifyAdded = () =>
    toast("Game has been added to your favorites!", {
      icon: "❤️",
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    })

  const notifyRemoved = () =>
    toast("Game has been removed from your favorites!", {
      icon: "💔",
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    })

  const handleLikeButton = async () => {
    if (isLoading) return // Prevent multiple clicks

    setIsLoading(true)
    setIsDisliked(false) // Reset dislike when liking

    try {
      if (isLiked) {
        // Remove from favorites
        const result = await removeFavorite(userId, games.id)
        if (result.success) {
          setIsLiked(false)
          notifyRemoved()
        }
      } else {
        // Add to favorites
        const result = await addFavorite({
          userId,
          gameId: games.id,
          gameTitle: games.mainTitle,
          gameDescription: games.description,
          imageSrc: games.imageSrc,
        })
        if (result.success) {
          setIsLiked(true)
          notifyAdded()
        }
      }
    } catch (error) {
      console.error("Error handling like button:", error)
      toast.error("Something went wrong. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

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
                <LuCirclePlay size={100} className="text-white  transition-all " />
                <p className="text-2xl font-semibold animate-fade-in">Tap anywhere to play</p>
              </div>
            )}

            {/* Blurred Iframe when not playing */}
            <iframe
              className="w-full h-full border-1 border-zinc-700 absolute top-0 left-0 rounded-lg transition-all duration-500"
              src={games.iframeSrc}
              allowFullScreen
            ></iframe>

            <iframe
              className="w-full h-full  absolute -z-100 opacity-70 top-0 blur-3xl left-0 rounded-lg transition-all duration-500"
              src={games.iframeSrc}
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Controls Bar */}
        <div className=" flex justify-between py-1">
          <div className="h-[100%] flex items-center ">
            <h1 className="text-white font-extrabold  text-2xl tracking-1">{games.title}</h1>
          </div>

          <div className="flex gap-2">
            {/* Like button */}
            <button
              className={`p-1 text-white rounded transition-all duration-200 ${
                isLoading ? "opacity-50 cursor-not-allowed" : "hover:scale-110"
              }`}
              onClick={handleLikeButton}
              disabled={isLoading}
            >
              {isLiked ? (
                <BiSolidLike className="cursor-pointer text-red-500" size={30} />
              ) : (
                <BiLike className="cursor-pointer hover:text-red-300" size={30} />
              )}
            </button>

            {/* Dislike button */}
            <button
              className="p-1 text-white rounded hover:scale-110 transition-all duration-200"
              onClick={() => {
                if (!isDisliked) {
                  setIsDisliked(true)
                  setIsLiked(false)
                } else {
                  setIsDisliked(false)
                }
              }}
            >
              {isDisliked ? (
                <BiSolidDislike className="cursor-pointer text-blue-500" size={30} />
              ) : (
                <BiDislike className="cursor-pointer hover:text-blue-300" size={30} />
              )}
            </button>

            {/* fullscreen button */}
            <button
              onClick={toggleFullScreen}
              className="p-1 text-white rounded hover:scale-110 transition-all duration-200"
            >
              <MdFullscreen className="cursor-pointer" size={35} />
            </button>
          </div>
        </div>
        <div className="flex gap-2">
          <h1>For better performance of game play here - </h1>{" "}
          <a href={games.iframeSrc} className="text-[#00FFDD]" target="_blank" rel="noreferrer">
            {games.iframeSrc}
          </a>
        </div>
      </div>
    </div>
  )
}

const gamesData = {
  snakeGame: {
    iframeSrc: "https://pratik04jha.github.io/Snake-Game/",
    title: "Pixel Python: The Classic Crawl | The Snake Game",
    id: "snakeGame",
    mainTitle: "The Snake Game",
    imageSrc: "https://img.freepik.com/free-photo/anime-eyes-illustration_23-2151660535.jpg",
    description:
      "Navigate your snake, devour fruits, grow endlessly - but don't bite your own tail or it's over. A timeless test of reflexes & planning!",
  },
  flappyBird: {
    iframeSrc: "https://pratik04jha.github.io/Flappy-Bird/",
    title: "Flapocalypse: Rage of the Bird | Inspired by Flappy Bird",
    id: "flappyBird",
    mainTitle: "Flappy Bird",
    imageSrc: "https://t3.ftcdn.net/jpg/04/49/19/08/360_F_449190831_i2whvIQdDIGtuIVWT6QfenWwmRApVJ5l.jpg",
    description:
      "Dodge those evil green pipes! It's the ultimate rage-quit game that dares you to beat your own high score.",
  },
  fruitCatcher: {
    iframeSrc: "https://pratik04jha.github.io/Fruit-Catcher-Game/",
    title: "Fruit Frenzy: Catch 'Em All! | Fruit Catcher Game",
    id: "fruitCatcher",
    mainTitle: "Fruit Catcher Game",
    imageSrc: "https://4kwallpapers.com/images/walls/thumbs_2t/21604.jpg",
    description:
      "Catch the fruits as much as you can in a limited time period. Fast reflexes and a hunger for sweet points are all you need.",
  },
  boxRunner: {
    iframeSrc: "https://pratik04jha.github.io/Subway-Surfers/",
    title: "Box Runner: Dash Through Dimensions",
    id: "boxRunner",
    mainTitle: "Box Runner Game",
    imageSrc:
      "https://www.hindustantimes.com/ht-img/img/2024/02/20/550x309/demon_slayer_season_3_release_1681007034048_1708432154347.jpg",
    description:
      "You're a box on the run in an endless world of spikes and gaps. Dash your way to survival in this fast-paced, reflex-testing runner!",
  },
  trexRunner: {
    iframeSrc: "https://pratik04jha.github.io/Just-Jump/",
    title: "T-Rex: Run Before Extinction | Inspired by Chrome Dino",
    id: "trexRunner",
    mainTitle: "Trex Runner",
    imageSrc: "https://lightwallpapers.com/downloads/dororo-wallpapers-/34.5900089deed71671d83179d71ac348da.jpg",
    description:
      "Inspired by the classic Chrome dino game-run through the desert, jump over cacti, dodge pterodactyls, and prove you're the king!",
  },
  rockPaperScissor: {
    iframeSrc: "https://pratik04jha.github.io/Stone-Paper-Scissor/",
    title: "RPS Showdown: Hand of Destiny | Rock Paper Scissor",
    id: "rockPaperScissor",
    mainTitle: "Rock Paper Scissor",
    imageSrc:
      "https://www.hindustantimes.com/ht-img/img/2023/12/27/550x309/solo_leveling_1698871259943_1703697976509.jfif",
    description:
      "Pick your move and challenge the computer in this quick, fun, and endlessly replayable game of strategy and chance!",
  },
  ticTacToe: {
    iframeSrc: "https://tic-tac-toe-orcin-omega-62.vercel.app/",
    title: "MindGrid: X vs O | Tic Tac Toe",
    id: "ticTacToe",
    mainTitle: "Tic Tac Toe",
    imageSrc: "https://static1.moviewebimages.com/wordpress/wp-content/uploads/2024/10/29-8.jpg",
    description:
      "Simple yet strategic! Outthink your opponent, plan three steps ahead, and claim victory in this modern take on a childhood classic.",
  },
  numberGuessing: {
    iframeSrc: "https://pratik04jha.github.io/Number-Guessing-Game/",
    title: "GuessQuest: The Mystic Number Challenge | Number Guessing Game",
    id: "numberGuessing",
    mainTitle: "Number Guessing Game",
    imageSrc: "https://static.toiimg.com/thumb/msid-110342489,width-1280,height-720,resizemode-4/110342489.jpg",
    description:
      "Is it higher or lower? Test your intuition and deduction skills as you try to crack the secret number in the fewest guesses possible!",
  },
  bubbling: {
    iframeSrc: "https://pratik04jha.github.io/Bubbling/",
    title: "BubbleBlitz: Pop or Perish | The Bubbling Game",
    id: "bubbling",
    mainTitle: "Bubbling",
    imageSrc: "https://www.impericon.com/cdn/shop/articles/Jujutsu_Kaisen_1200x1200_crop_center.webp?v=1718630060",
    description:
      "Pop bubbles, avoid traps, and conquer colorful chaos! A visually satisfying game with simple mechanics and endless bubbly fun.",
  },
}

export default GamePage
