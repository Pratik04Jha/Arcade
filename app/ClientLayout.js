"use client";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";

export default function ClientLayout({ children }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    
    handleResize(); // Set initial state on load
    window.addEventListener("resize", handleResize);
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile ? <MobileMessage /> : <>{children}</>;
}

// Mobile UI Message Component
function MobileMessage() {
  return (
    <div className="h-screen absolute top-0 z-10000000000 w-full -translate-0.5 overflow-hidden left-0 flex flex-col justify-center items-center text-white text-center px-6 bg-black">
      <h1 className="text-3xl font-bold mb-4">⚠️ Oops!</h1>
      <p className="text-lg">
        You need a <span className="text-blue-400">desktop</span> to view{" "}
        <span className="text-blue-400">Pratik Jha’s Arcade</span>.
      </p>
      <p className="mt-2 text-sm text-gray-400">
        Try opening this on a <strong>laptop or PC</strong> for the best experience.
      </p>
    </div>
  );
}
