import React from "react";
// import { HardHat, Wrench, Hammer } from "react-icons/ci"; // Optional: using lucide icons for that dev flair

const UnderConstruction = () => {
  return (
    <div className="relative h-screen w-full bg-black text-white flex flex-col items-center justify-center px-6 text-center">
      
      {/* Construction Icon + Title */}
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Page Under Construction
        </h1>
        <p className="max-w-xl mt-2 text-lg sm:text-xl text-zinc-300 font-medium">
          This may take a while, but i am working hard to bring you something
          special. This page is still in progress 
        </p>
      </div>

      {/* Divider */}
      <div className="my-8 w-full max-w-md border-t border-zinc-700" />

      {/* Tools Section */}
      <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
        <div className="flex flex-col items-center">
          {/* <Wrench className="text-yellow-400 w-8 h-8 mb-2" /> */}
          <span className="text-zinc-300">Coding in Progress</span>
        </div>
        <div className="flex flex-col items-center">
          {/* <Hammer className="text-yellow-400 w-8 h-8 mb-2" /> */}
          <span className="text-zinc-300">Designing the Vibe</span>
        </div>
        <div className="flex flex-col items-center">
          {/* <HardHat className="text-yellow-400 w-8 h-8 mb-2" /> */}
          <span className="text-zinc-300">Launching Soon</span>
        </div>
      </div>

      {/* Footer-ish Line */}
      <div className="absolute bottom-6 text-sm text-zinc-500 font-light">
        Made with love by Pratik | Stay tuned...
      </div>
    </div>
  );
};

export default UnderConstruction;
