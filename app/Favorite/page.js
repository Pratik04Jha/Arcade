// app/favorite/page.js
"use client"; // Add this at the top to make it a client component

import { useEffect, useState } from "react";
import { getFavorites } from "@/lib/favorites";
import Image from "next/image";
import Link from "next/link";

const FavoritePage = () => {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFavorites = async () => {
      const userId = "user123"; // Replace with real user ID later
      try {
        const favs = await getFavorites(userId);
        setFavorites(favs);
      } catch (error) {
        console.error("Error fetching favorites:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFavorites();
  }, []);

  if (loading) {
    return (
      <div className="p-4 h-screen flex items-center justify-center">
        <p>Loading favorites...</p>
      </div>
    );
  }

  return (
    <div className="p-4 h-screen flex items-center pt-20 flex-col">
      <div className="flex flex-wrap justify-center items-center gap-10">
        {favorites.map((games) => (
          <div
            key={games.id}
            className="group relative w-[22rem] h-[26rem] py-2 px-2 rounded-3xl overflow-hidden transition-all duration-500 transform scale-[1.025] cursor-pointer hover:scale-[1.05]  hover:border-zinc-700 hover:rotate-[0.3deg] backdrop-blur-md"
          >
            {/* Image Section */}
            <div className="h-[55%] w-full overflow-hidden relative rounded-3xl">
              <Image
                src={games.imageSrc}
                width={500}
                height={500}
                alt={games.gameTitle}
                priority // Preload the image for better performance
                className="h-full pointer-events-none select-none w-full object-cover object-center rounded-3xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[1.5deg]"
              />
              {/* Neon Glow Overlay */}
              <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-transparent to-zinc-900 opacity-70 transition-opacity duration-300 group-hover:opacity-90"></div>
            </div>

            {/* Glow Blur Background */}
            <Image
              src={games.imageSrc}
              width={500}
              height={500}
              alt={games.gameTitle}
              priority // Preload the image for better performance
              className="absolute pointer-events-none select-none blur-[80px] opacity-90 top-0 -z-1 h-[50%] w-full object-cover object-center rounded-3xl transition-all duration-500 scale-110"
            />

            {/* Shine Streak on Hover */}
            <div className="absolute inset-0 z-20 pointer-events-none before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-100%] group-hover:before:animate-[shine_1.2s_ease-in-out_forwards] rounded-3xl" />

            {/* Content Section */}
            <div className="px-5 py-4 text-center flex flex-col justify-center">
              <h1 className="text-2xl font-bold text-white drop-shadow-md  transition-all duration-300">
                {games.gameTitle}
              </h1>
              <p className="text-sm text-zinc-300 mt-2">
                {games.gameDescription}
              </p>

              {/* Play Button */}
              <div className=" mt-6 rounded-lg flex  gap-8 overflow-hidden cursor-pointer">
                <Link href={`/games/${games.gameId}`}>
                  <button className=" cursor-pointer relative bg-red-700  transition-all duration-300 text-white text-lg font-semibold px-18 py-2 ">
                    <span className=" z-10">Play</span>
                  </button>
                </Link>
                <button className="cursor-pointer ">See details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritePage;