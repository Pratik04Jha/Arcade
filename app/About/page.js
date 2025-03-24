import React from "react";

const page = () => {
  return (
    <>
      <div className="h-[100%] w-full mt-24 px-10 ">
        <h1 className="textShadow text-6xl tracking-tight text-center font-extrabold text-yellow-500 ">
          The story of a legend "Pratik"
        </h1>
        <div className="flex justify-center items-center gap-5 h-[60%]  ">
          <p className="w-1/2 mt-7 text-center ml-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            labore quod necessitatibus temporibus sunt enim voluptate in
            accusamus totam non soluta quibusdam vitae magni quis officia nulla
            quia quo expedita, dolorem dolores rerum sint. Neque eius quibusdam
            dolores aspernatur laborum doloremque tempora fugiat blanditiis qui,
            sit saepe praesentium dolor, facilis eos nam ab minus deleniti
            voluptatum asperiores suscipit! Quod nulla error cupiditate, ipsa
            modi culpa incidunt quidem ducimus, nam similique nostrum voluptates
            necessitatibus aut aliquid. Quidem officiis veniam, vero
            necessitatibus error consectetur. Nobis non fugiat quae! Aliquam
            laborum, magni amet, veniam soluta, dolorem ex nulla architecto
            placeat id tenetur veritatis? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Repellat, molestiae ullam nemo quae doloribus
            consequuntur odio facilis voluptatibus iusto. Aliquam libero ut sed
            officia voluptas ab expedita suscipit aperiam nihil culpa molestiae
            ea ipsa, corporis accusamus, hic facilis doloribus at quis
            dignissimos eum. Quos, tenetur nihil veniam explicabo ipsum
            distinctio.
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
        <div className="flex justify-center items-center gap-5 h-[60%] my-10 mb-10 "> 
          <p className="w-1/2 mt-7 text-center ml-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            labore quod necessitatibus temporibus sunt enim voluptate in
            accusamus totam non soluta quibusdam vitae magni quis officia nulla
            quia quo expedita, dolorem dolores rerum sint. Neque eius quibusdam
            dolores aspernatur laborum doloremque tempora fugiat blanditiis qui,
            sit saepe praesentium dolor, facilis eos nam ab minus deleniti
            voluptatum asperiores suscipit! Quod nulla error cupiditate, ipsa
            modi culpa incidunt quidem ducimus, nam similique nostrum voluptates
            necessitatibus aut aliquid. Quidem officiis veniam, vero
            necessitatibus error consectetur. Nobis non fugiat quae! Aliquam
            laborum, magni amet, veniam soluta, dolorem ex nulla architecto
            placeat id tenetur veritatis? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Repellat, molestiae ullam nemo quae doloribus
            consequuntur odio facilis voluptatibus iusto. Aliquam libero ut sed
            officia voluptas ab expedita suscipit aperiam nihil culpa molestiae
            ea ipsa, corporis accusamus, hic facilis doloribus at quis
            dignissimos eum. Quos, tenetur nihil veniam explicabo ipsum
            distinctio.
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
