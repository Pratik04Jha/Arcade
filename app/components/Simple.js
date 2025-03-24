export function Simple() {
  let music = new Audio("/background-music.mp3"); // Ensure this file is in the "public" folder
  music.loop = true;

  function playMusic() {
    music.play().catch((err) => console.log("Autoplay prevented:", err));
  }

  function pauseMusic() {
    music.pause();
  }

  return { playMusic, pauseMusic }; // Expose functions for external use
}
