import { HeroSection } from "@/components/ui/hero-odyssey";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Education } from "@/components/sections/Education";
import Achievements from "@/components/sections/Achievements";
import { Contact } from "@/components/sections/Contact";
import { Testimonials } from "@/components/sections/Testimonials";
import { Footer } from "@/components/ui/Footer";
import { useState } from "react";

const Index = () => {
  const [globalHue, setGlobalHue] = useState(220);

  return (
    <main className="w-full bg-black">
      <HeroSection onHueChange={setGlobalHue} />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Achievements />
      <Testimonials />
      <Contact />
      <Footer hue={globalHue} />
    </main>
  );
};

export default Index;
