import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import CustomEase from "gsap/dist/CustomEase";
import React, { useEffect, useRef } from "react";

CustomEase.create("hop", "0.9, 0, 0.1, 1");

const PageReveal = () => {
  const name1 = useRef(null);
  const name2 = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    let counter = document.querySelector(".counter");
    let currentCounterValue = 20;

    const updateCounter = () => {
      if (currentCounterValue === 100) {
        return;
      }

      currentCounterValue += Math.floor(Math.random() * 10);

      if (currentCounterValue > 100 || currentCounterValue === 100) {
        currentCounterValue = 100;
        tl.to(counter, {
          scale: "500",
          delay: 0.5,
          duration: 2,
          ease: "expo.inOut",
        });

        tl.to(name1.current, { y: "0%" }, "-=.5");
        tl.to(name2.current, { y: "0%" }, "<");

        tl.to(name1.current, { y: "100%", delay: 1 });
        tl.to(name2.current, { y: "-100%" }, "<");
      }

      counter.textContent = currentCounterValue;

      let delay = Math.floor(Math.random() * 300);

      setTimeout(updateCounter, delay);
    };
    updateCounter();
  }, []);

  return (
    <section className="relative z-50 h-screen">
      <div className="absolute bg-[#171717] h-screen w-[50%] top-0 left-0"></div>
      <div className="absolute bg-[#171717] h-screen w-[50%] top-0 left-[50%]"></div>

      <h1 className="counter absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-[#f5f5f5] text-[15rem]">
        0
      </h1>

      <div className="overflow-hidden flex items-center gap-8 absolute top-[50%] left-[50%] translate-x-[-52%] translate-y-[-50%] text-[#f5f5f5] text-[2.5rem]">
        <h1 ref={name1} className="translate-y-[-120%]">
          othman
        </h1>
        <h1 ref={name2} className="translate-y-[120%]">
          ahmed
        </h1>
      </div>

      <span className="absolute top-0 left-[50%] translate-x-[-50%] origin-[center top] w-px h-full bg-white"></span>
    </section>
  );
};

export default PageReveal;
