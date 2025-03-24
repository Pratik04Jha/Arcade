import Link from "next/link";
import React from "react";
import {
  FaInstagram,
  FaGithub,
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaQuora,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="container relative pt-6 bg-zinc-900 text-white text-center h-120 ml-60 mt-5 pr-60 width-100 ">
      <h1 className="textShadow text-6xl tracking-tight text-center font-extrabold text-yellow-500 ">
        The best arcade
      </h1>
      <div className="w-full flex justify-evenly mt-10">
        <ul className="flex flex-col text-left">
          <h1 className="font-extrabold text-2xl pb-2">Website links</h1>
          <Link href="/" className="foot">
            Home
          </Link>
          <Link href="/About" className="foot">
            About
          </Link>
          <Link href="/Contact" className="foot">
            Contact
          </Link>
          <Link href="/Leaderboard" className="foot">
            Leaderboard
          </Link>
          <Link href="/History" className="foot">
            History
          </Link>
          <Link href="/Favorite" className="foot">
            Favourite
          </Link>
        </ul>
        <ul className="flex flex-col text-left">
          <h1 className="font-extrabold text-2xl pb-2">Versions</h1>

          <Link href="" className="foot">
            Version 0.1
          </Link>
          <Link href="" className="foot">
            Version 0.2
          </Link>
          <Link href="" className="foot">
            Version 0.3
          </Link>
        </ul>
        <ul className="flex flex-col text-left">
          <h1 className="font-extrabold text-2xl pb-2">All games links</h1>

          <Link
            target="_blank"
            href="https://pratik04jha.github.io/Snake-Game/"
            className="foot"
          >
            Snake game
          </Link>
          <Link
            target="_blank"
            href="https://pratik04jha.github.io/Flappy-Bird/"
            className="foot"
          >
            Flappy bird
          </Link>
          <Link
            target="_blank"
            href="https://pratik04jha.github.io/Fruit-Catcher-Game/"
            className="foot"
          >
            Fruit catcher
          </Link>
          <Link
            target="_blank"
            href="https://pratik04jha.github.io/Just-Jump/"
            className="foot"
          >
            Trex run
          </Link>
          <Link
            target="_blank"
            href="https://pratik04jha.github.io/Subway-Surfers/"
            className="foot"
          >
            Box runner
          </Link>
          <Link
            target="_blank"
            href="https://pratik04jha.github.io/Tic-Tac-Toe/"
            className="foot"
          >
            Tic tac toe
          </Link>
          <Link
            target="_blank"
            href="https://pratik04jha.github.io/Stone-Paper-Scissor/"
            className="foot"
          >
            Stone paper scissor
          </Link>
          <Link
            target="_blank"
            href="https://pratik04jha.github.io/Bubbling/"
            className="foot"
          >
            Bubling
          </Link>
          <Link
            target="_blank"
            href="https://pratik04jha.github.io/Number-Guessing-Game/"
            className="foot"
          >
            Number guessing game
          </Link>
        </ul>
        <ul className="flex flex-col text-left">
          <h1 className="font-extrabold text-2xl pb-2">Products</h1>

          <Link href="" className="foot">
            Main website
          </Link>
          <Link href="" className="foot">
            Portfolio
          </Link>
          <Link href="" className="foot">
            Artificial intelligence
          </Link>
          <Link href="" className="foot">
            Blogs
          </Link>
          <Link href="" className="foot">
            Productivity app
          </Link>
        </ul>
      </div>
        <div className="absolute bottom-[2%] left-[40%] -translate-1/2 flex gap-4" >
          <Link href="" target="_blank"> <FaInstagram size={30} className="cursor-pointer" /> </Link>
          <Link href="" target="_blank"> <FaFacebook size={30} className="cursor-pointer" /> </Link>
          <Link href="" target="_blank"> <FaLinkedin size={30} className="cursor-pointer" /> </Link>
          <Link href="" target="_blank"> <FaTwitter size={30} className="cursor-pointer" /> </Link>
          <Link href="" target="_blank"> <FaQuora size={30} className="cursor-pointer" /> </Link>
          <Link href="" target="_blank"> <FaGithub size={30} className="cursor-pointer" /> </Link>
        </div>
    </footer>
  );
};

export default Footer;
