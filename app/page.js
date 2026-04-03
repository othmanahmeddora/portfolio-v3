"use client";

import About from "@/components/About/About";
import Hero from "@/components/Hero/Hero";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    };
  }, []);

  return (
    <div className="bg-[#f5f5f5]">
      <Hero />
      <About />
    </div>
  );
}
