import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="h-screen px-4 overflow-hidden relative mx-auto z-0">
      <div className="flex justify-center mt-40">
        <Image
          height={500}
          width={500}
          alt="Othman Image"
          src="/img/hero.png"
          className="mt-[10rem] grayscale hover:grayscale-0 hover:scale-110 transition-all duration-500 ease-out"
        />
      </div>
    </section>
  );
};

export default Hero;
