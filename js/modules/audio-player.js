export function initAudioPlayer(btnId, audioId) {
  const btn = document.getElementById(btnId);
  const audio = document.getElementById(audioId);
  if (!btn || !audio) return;

  const updateButton = () => {
    const isPlaying = !audio.paused;
    btn.style.color = isPlaying
      ? "var(--primary-color)"
      : "var(--text-color)";
    btn.setAttribute("aria-label", isPlaying ? "Pausar música" : "Reproducir música");
    btn.setAttribute("aria-pressed", String(isPlaying));
  };

  btn.addEventListener("click", async () => {
    if (audio.paused) {
      try {
        await audio.play();
      } catch (error) {
        console.warn("No se pudo reproducir el audio:", error);
      }
    } else {
      audio.pause();
    }
  });

  audio.addEventListener("play", updateButton);
  audio.addEventListener("pause", updateButton);
  audio.addEventListener("ended", updateButton);
  updateButton();
}
