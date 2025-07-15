//

import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import BubbleBackground from "./components/BubbleBackground";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import TimelineSection from "./components/TimelineSection";
import ScoreboardSection from "./components/ScoreboardSection";
import PartnersSection from "./components/PartnersSection";
import FAQSection from "./components/FAQSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import CollabClubs from "./components/CollabClubs";
import Prizes from "./components/Prizes";
import MemoriesSection from "./components/MemoriesSection";

export function App() {
  return (
    <Router>
      <div className="relative min-h-screen w-full overflow-x-hidden bg-black text-white">
        <BubbleBackground />
        <div className="relative z-10">
          <Header />
          <main className="mx-auto w-full">
            <section id="home">
              <HeroSection />
            </section>
            <section id="about" className="py-20">
              <AboutSection />
            </section>
            

            {/* <section id="scoreboard" className="py-20 bg-black bg-opacity-70">
              <ScoreboardSection />
            </section> */}
            <section id="timeline" className="py-20">
              <TimelineSection />
            </section>

            {/* <section id="partners" className="py-20 bg-black bg-opacity-70">
              <PartnersSection />
            </section> */}
            <section id="prizes" className=" bg-opacity-70">
              <Prizes />
            </section>
                        <section id="mems" className=" bg-opacity-70">
              <MemoriesSection />
            </section>
            <section id="faq" className="py-20">
              <FAQSection />
            </section>
            <section id="contact" className="py-20 bg-black bg-opacity-70">
              <ContactSection />
              <CollabClubs />
            </section>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}
