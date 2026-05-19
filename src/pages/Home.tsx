import { useEffect } from "react";
import Hero from "../components/Hero";
import LogoMarquee from "../components/LogoMarquee";
import Projects from "../components/Projects";
import HoverReveal from "../components/HoverReveal";

export default function Home() {
  useEffect(() => { document.title = "Brent Demulder — Grafisch Vormgever"; }, []);
  return (
    <>
      <Hero />
      <LogoMarquee />
      <Projects />
      <HoverReveal />
    </>
  );
}
