import React from "react";
import Technologies from "../components/Technologies";
import Supportbutton from "../components/SupportButton";
import SocialButtons from "../components/SocialButtons";
import Image from "next/image";

const page = () => {
  const data = [
    { title: "Next.js" },
    { title: "React.js" },
    { title: "Vercel" },
    { title: "Node.js" },
    { title: "Tailwind CSS" },
  ];
  const support = [
    {
      title: "Buy me a coffee",
      src: "https://buymeacoffee.com/poptale?status=1",
    },
    { title: "Ko-Fi", src: "https://ko-fi.com/pratikjha#payment-widget" },
    { title: "Patreon", src: "https://www.patreon.com/c/Poptale" },
  ];

  const social = [
    { title: "Instagram", src: "https://www.instagram.com/poptale_artz" },
    {
      title: "Facebook",
      src: "https://www.facebook.com/profile.php?id=61574732885384",
    },
    { title: "Twitter(X)", src: "https://x.com/pratik04jha" },
    {
      title: "Linkedin",
      src: "https://www.linkedin.com/in/pratik-jha-380037301",
    },
    { title: "Github", src: "https://github.com/Pratik04Jha" },
    { title: "Quora", src: "https://www.quora.com/profile/Pratik-1703" },
  ];

  return (
    <>
      <div className="h-[100%] w-full mt-15 ">
        <div className="relative  flex flex-col items-center">
          <Image
            width={500}
            height={500}
            priority
            className="w-full pointer-events-none h-60 select-none object-cover"
            src="https://dkemhji6i1k0x.cloudfront.net/000_clients/1234731/page/1234731pUh2h2NM.png"
            alt="Banner image"
          />
          <Image
            width={500}
            height={500}
            priority
            className="absolute pointer-events-none select-none -z-100 blur-3xl top-0  w-full h-60 object-cover"
            src="https://dkemhji6i1k0x.cloudfront.net/000_clients/1234731/page/1234731pUh2h2NM.png"
            alt="Banner image"
          />
          <div className="absolute left-1/2 top-[100%] -translate-1/2 h-70   rounded-full flex justify-center items-center">
            <Image
              width={200}
              height={100}
              priority
              className="image h-[70%] pointer-events-none select-none rounded-full  "
              src="https://cdn.hero.page/pfp/3ca815a8-c12b-4e06-a23a-74509807d46c-delightful-anime-boy-with-red-accents-adorable-red-anime-pfp-3.png"
              alt=""
            />
            <h1 className="absolute  -translate-1/2 top-[100%] w-full text-center  text-3xl font-bold cursor-default left-[50%]  ">
              Pratik Jha
            </h1>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center gap-5 h-[60%] flex-col ">
        <p className=" text-center mt-45 w-[70%]">
          Hey, I’m Pratik — a creator, explorer, and tech enthusiast obsessed
          with turning ideas into reality. My journey began with curiosity and a
          keyboard, and ever since, I’ve been diving into everything from web
          development and game design to experimenting with new tech. I don’t
          just build for the sake of it — I build to learn, grow, and push the
          boundaries of what’s possible. Every bug I fix, every game I release,
          every project I launch — it’s all part of the thrill. This arcade is
          more than just games — it’s a piece of my journey, and it’s only
          getting started.
        </p>

        <h1 className=" text-3xl  text-center mt-10 font-bold ">
          Built From Memories, Powered by Code
        </h1>
        <div className="flex justify-center items-center gap-5 h-[60%]   ">
          <p className="w-[70%]  text-center ">
            This arcade isn’t just a collection of games — it’s a piece of my
            soul. I grew up obsessed with classic 2D games, not the mainstream
            stuff like PUBG or Free Fire. While others chased battle royales, I
            was chasing high scores in pixelated playgrounds. But over time, I
            stopped playing and started building. I realized creating games gave
            me way more joy than playing them. So, I brought this dream to life
            — not just to revive retro vibes, but to evolve them with a modern
            twist. Some of the games here were built when I was just starting
            out, raw and imperfect — but that’s part of the story. I’m
            constantly upgrading them, learning and growing with each line of
            code. For me, nothing beats the thrill of playing a game I made with
            my own hands. This arcade is my tribute to the past, my playground
            for the present, and a foundation for the future.
          </p>
        </div>

        <h1 className=" text-3xl  text-center mt-10 font-bold ">
          Technologies used
        </h1>

        <div className="flex justify-center w-full">
          <ul className="flex flex-wrap justify-center gap-5 mt-5 sm:w-[60%] w-full">
            {data.map((items, index) => (
              <div key={index} custom={index}>
                <Technologies data={items} />
              </div>
            ))}
          </ul>
        </div>

        <div className="flex flex-col items-center  gap-10">
          <h1 className="text-3xl  text-center mt-10 font-bold">Support</h1>
          <div className="flex flex-wrap justify-center w-full items-center gap-5">
            {support.map((items, index) => (
              <div key={index} custom={index}>
                <Supportbutton support={items} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center mt-10 w-full gap-4">
          {social.map((items, index) => (
            <SocialButtons key={index} social={items} />
          ))}
        </div>

        <div className="flex items-center flex-col my-10">
          <h2 className="love text-2xl md:text-5xl w-full md:w-[70%]  text-center font-bold  leading-15">
            Made with 🤍 by a 16 year old boy from India
          </h2>
          <div className="flex flex-col md:flex-row w-full justify-center gap-5 items-center  ">
            <h1 className="text-lg sm:text-xl md:text-2xl text-center md:text-left">
              Read my journey –
            </h1>
            <div className="relative group w-fit my-10">
              <div className="relative p-[3px] sm:p-[4px] md:p-[5px] px-[6px] sm:px-[8px] md:px-[10px] rounded-[100px] overflow-hidden">
                <div className="absolute -inset-100 z-0 rounded-[100px] bg-[conic-gradient(from_0deg,red,orange,yellow,green,cyan,blue,violet,red)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-spin-slow pointer-events-none" />

                <button className="changed relative overflow-hidden text-sm sm:text-base md:text-lg lg:text-2xl py-6 px-16 sm:py-4 sm:px-20 md:py-10 md:px-32 cursor-pointer hover:scale-[1.05] transition-all duration-300 ease-in-out bg-amber-50 text-black rounded-[100px] flex items-center justify-center z-20">
                  <span className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 z-30 text-white mix-blend-difference whitespace-nowrap">
                    Blog Post
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
