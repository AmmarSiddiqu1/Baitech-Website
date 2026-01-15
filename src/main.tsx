import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "bootstrap";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/free-mode";
import "./globals.css";
import PhosphorIconsLoader from "./helper/PhosphorIconsLoader.tsx";

createRoot(document.getElementById("root")!).render(
  <>
    <PhosphorIconsLoader />
    <App />
  </>
);
