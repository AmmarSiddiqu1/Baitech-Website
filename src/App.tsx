import type { FC } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TrustStrip from "./components/TrustStrip";
import Features from "./components/Features";
import About from "./components/About";
import Services from "./components/Services";
import HowItWorks from "./components/HowItWorks";
import AppScreens from "./components/AppScreens";
import Metrics from "./components/Metrics";
import Pricing from "./components/Pricing";
import ForLandlords from "./components/ForLandlords";
import ForTenants from "./components/ForTenants";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
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
      <TrustStrip />
      <Features />
      <About />
      <Services />
      <HowItWorks />
      <AppScreens />
      <Metrics />
      <Pricing />
      <ForLandlords />
      <ForTenants />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <section id='contact' className='tw-py-80-px bg-light'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8 mx-auto text-center'>
              <h2
                className='tw-mb-4'
                style={{
                  fontSize: "clamp(28px, 4vw, 48px)",
                  fontWeight: 700,
                  color: "#002B49",
                }}
                data-aos='fade-up'
              >
                Let's talk
              </h2>
              <p
                className='tw-mb-6'
                style={{
                  fontSize: "18px",
                  color: "#666",
                  lineHeight: "1.6",
                }}
                data-aos='fade-up'
                data-aos-delay={100}
              >
                Contact form will be implemented here. For now, use the CTAs above
                to get in touch.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default App;
