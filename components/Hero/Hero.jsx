import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="h-screen max-w-360 px-4 overflow-hidden relative mx-auto">
      <Image
        height={500}
        width={500}
        alt="Othman Image"
        src="/img/hero.png"
        className="grayscale hover:grayscale-0 hover:scale-110 transition-all duration-500 ease-out"
      />
    </section>
  );
};

export default Hero;
