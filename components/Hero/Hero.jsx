import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="h-screen px-4 overflow-hidden relative mx-auto z-0">
      <div className="flex justify-center mt-10 z-50">
        <Image
          height={500}
          width={500}
          alt="Othman Image"
          src="/img/hero.png"
          className="grayscale w-160"
        />
      </div>

      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-[20rem] leading-60 uppercase text-center font-bold z-[-1] text-[#c9fd74]">
        <p className="tracking-[-0.018em]">Frontend</p>
        <p className="tracking-[-0.033em]">Developer</p>
        <p className="tracking-[-0.085em]">Freelancer</p>
      </div>
    </section>
  );
};

export default Hero;
