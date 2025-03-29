import React from "react";

const page = () => {
  return (
    <>
      <div className="h-[100%] w-full mt-24 px-10 ">
        <h1 className="textShadow text-6xl tracking-tight text-center font-extrabold text-yellow-500 ">
          The story about me (Pratik Jha)
        </h1>
        <div className="flex justify-center items-center gap-5 h-[60%]  ">
          <p className="w-1/2 mt-7 text-center ml-10">
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
            I’m always evolving, and that’s what makes this adventure so
            exciting! So whether you’re here to learn, collaborate, or just
            enjoy the work I’ve done, I’m glad to have you on this journey with
            me.
          </p>
          <div className="w-[50%] h-[80%] flex justify-center">
            <div className="imageshadow h-full width-[57%] border-10 border-yellow-500 rounded-full flex justify-center cursor-pointer items-center">
              <img
                className="image h-full w-[100%] rounded-full  "
                src="Professional image.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <h1 className="textShadow text-6xl tracking-tight text-center mt-10 font-extrabold text-yellow-500 ">
          The story behind this arcade
        </h1>
        <div className="flex justify-center items-center gap-5 h-[60%] my-10 mb-20 ">
          <p className="w-1/2 mt-7 text-center ml-10">
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
          <div className="w-[40%] h-[100%] flex justify-center ">
            <img
              className="h-[100%] w-[60%]  object-cover object-center "
              src="Arcade.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
