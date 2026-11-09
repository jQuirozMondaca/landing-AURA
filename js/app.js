// Importación de módulos locales (Requiere servidor local por políticas CORS)
import { initNeuralNetwork } from "./modules/neuronal-network.js";
import { initAudioPlayer } from "./modules/audio-player.js";
import { initThemeSwitcher } from "./modules/theme-switcher.js";
import { initFormHandler } from "./modules/form-handler.js";

document.addEventListener("DOMContentLoaded", () => {
  console.log("Iniciando AURA Core...");

  // Orquestador: Inicializa cada componente de forma independiente
  initNeuralNetwork("neural-bg");
  initAudioPlayer("audio-toggle", "bg-audio");
  initThemeSwitcher("theme-toggle");
  initFormHandler("contact-form");
});
