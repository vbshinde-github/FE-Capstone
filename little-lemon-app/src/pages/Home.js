import React from "react";

import {
  About,
  HeroSection,
  SpecialSection,
  Testimonials,
} from "../components";

function Home() {
  return (
    <div id="home-page">
      <HeroSection />
      <SpecialSection />
      <Testimonials />
      <About />
    </div>
  );
}

export default Home;
