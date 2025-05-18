import React from "react";

const page = () => {
  return (
    <>
      <div className="h-[100%] w-full mt-15 ">
        <div className="relative  flex flex-col items-center">
          <img
            className="w-full h-70 object-cover"
            src="https://t3.ftcdn.net/jpg/07/32/10/90/360_F_732109080_4lXwGofazqAiysUpcCnrbflsNOl9EMdW.jpg"
            alt="Banner image"
          />
          <img
            className="absolute -z-100 blur-3xl top-0  w-full h-70 object-cover"
            src="https://t3.ftcdn.net/jpg/07/32/10/90/360_F_732109080_4lXwGofazqAiysUpcCnrbflsNOl9EMdW.jpg"
            alt="Banner image"
          />
          <div className="absolute left-1/2 top-[100%] -translate-1/2 h-70   rounded-full flex justify-center items-center">
            <img
              className="image h-full w-[100%] rounded-full  "
              src="https://i.pinimg.com/736x/58/6b/2d/586b2d4bd4a96da20f60e50b7f202d82.jpg"
              alt=""
            />
            <h1 className="absolute -translate-1/2 top-[110%] text-2xl font-bold cursor-default left-[50%]  ">
              Pratik Jha
            </h1>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center gap-5 h-[60%] flex-col ">
        <p className=" text-center mt-50 w-[70%]">
          I’m Pratik – a creator, problem-solver, and a passionate tech
          enthusiast who’s always been drawn to the world of innovation. My
          journey started long ago when I first discovered the power of
          technology and how it can transform ideas into reality. From the
          moment I wrote my first line of code, I was hooked. Over the years,
          I’ve dived deep into building websites, apps, developing games, and
          exploring new programming languages, always seeking ways to push the
          boundaries of what’s possible. I’ve faced challenges and celebrated
          small victories along the way, but through it all, one thing has
          remained constant: my drive to create something meaningful. For me,
          it’s not just about the end result – it’s about the journey, the
          learning, and the ability to keep growing, improving, and exploring
          new possibilities. Every project I take on is an opportunity to dive
          deeper, to explore new technologies, and to bring my ideas to life.
          I’m always evolving, and that’s what makes this adventure so exciting!
          So whether you’re here to learn, collaborate, or just enjoy the work
          I’ve done, I’m glad to have you on this journey with me.
        </p>

        <h1 className=" text-5xl  text-center mt-10 font-bold ">
          The Story Behind This Arcade
        </h1>
        <div className="flex justify-center items-center gap-5 h-[60%]  mb-20 ">
          <p className="w-[70%]  text-center ">
            Creating this arcade was a dream that stemmed from my lifelong love
            for video games and the nostalgia they bring. Growing up, I spent
            countless hours at the local arcade, lost in the excitement of
            fast-paced action, pixelated graphics, and the joy of competing with
            friends for high scores. Unlike many of the popular games today,
            like PUBG or Free Fire, I never enjoyed those types of games.
            Instead, I was drawn to the charm of classic 2D games – the simple
            yet captivating gameplay that kept me hooked for hours. Those
            moments stayed with me, and I always wanted to create something that
            would capture that same feeling but with a fresh, modern twist.
            <br />
            However, over time, my passion for playing video games shifted. I no
            longer found myself spending hours in front of the screen playing –
            instead, I found joy in creating video games. I’ve come to realize
            that building these experiences is far more fulfilling for me than
            simply playing them. Now, my focus is on designing, developing, and
            bringing these games to life, and that shift in mindset is what led
            to the creation of this arcade. <br /> This arcade is my way of
            blending the past with the present, bringing the timeless excitement
            of classic arcade games into the digital age. However, I didn’t want
            to just recreate the games – I wanted to create an experience. Some
            of the games might not be as responsive or refined, as many of them
            were made during the early stages of my learning journey. But now
            that I’ve developed more as a creator, I plan on gradually
            redeveloping those older games to bring them up to the quality
            standards I’ve set for myself. <br /> The arcade is more than just a
            collection of games – it’s an interactive space where the games not
            only provide fun, but also spark creativity and challenge. I’ve
            poured my heart into this project, ensuring that every game has its
            own unique story to tell. The arcade is still a work in progress,
            which only adds to its excitement. I’m constantly looking for ways
            to improve, adding new games and keeping the experience fresh. It’s
            a place where old-school meets new-school, and where every game has
            a purpose. <br /> I love creting games more than playing someone
            else games, for me the best games in the world are my own created
            games, any other game can not beat the fun and satisfaction of
            playing your own created games
          </p>
        </div>
      </div>
    </>
  );
};

export default page;
