import type { FC } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Metrics from "./components/Metrics";
import AppScreens from "./components/AppScreens";
import FinalCTA from "./components/FinalCTA";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import SmoothScroll from "./helper/SmoothScroll";
import InitializeAOS from "./helper/InitializeAOS";

const App: FC = () => {
  return (
    <div>
      <SmoothScroll />
      <InitializeAOS />
      <Header />
      <Hero />
      <HowItWorks />
      <Features />
      <Metrics />
      <FinalCTA />
      <AppScreens />
      <FAQ />
      <Footer />
    </div>
  );
};

export default App;
