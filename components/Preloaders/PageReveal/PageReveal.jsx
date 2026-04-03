import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import CustomEase from "gsap/dist/CustomEase";
import React, { useEffect, useRef } from "react";

CustomEase.create("hop", "0.9, 0, 0.1, 1");

const PageReveal = () => {
  const name1 = useRef(null);
  const name2 = useRef(null);
  const divider = useRef(null);
  const blocks = useRef([]);
  const pageRevealContainer = useRef(null);

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
          onComplete: () => {
            gsap.to(counter, { display: "none" });
          },
        });

        tl.to(name1.current, { y: "0%" }, "-=.5");
        tl.to(name2.current, { y: "0%" }, "<");

        tl.to(divider.current, {
          scaleY: "100%",
          duration: 1,
          onComplete: () => {
            gsap.to(divider.current, {
              scaleY: "0%",
              duration: 0.7,
              delay: 1.65,
            });
          },
        });

        tl.to(name1.current, { y: "100%", delay: 1 });
        tl.to(name2.current, { y: "-100%" }, "<");

        tl.to(blocks.current, { scaleY: 0, duration: 1, stagger: 0.1 });

        tl.to(pageRevealContainer.current, { display: "none" });
      }

      counter.textContent = currentCounterValue;

      let delay = Math.floor(Math.random() * 300);

      setTimeout(updateCounter, delay);
    };
    updateCounter();
  }, []);

  return (
    <section ref={pageRevealContainer} className="relative z-50 h-screen">
      <div
        ref={(el) => (blocks.current[0] = el)}
        className="absolute bg-[#171717] h-screen w-[50%] top-0 left-0 scale-y-100 origin-top"
      ></div>
      <div
        ref={(el) => (blocks.current[1] = el)}
        className="absolute bg-[#171717] h-screen w-[50%] top-0 left-[50%] origin-top"
      ></div>

      <h1 className="counter absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-[#f5f5f5] text-[15rem] font-sans">
        0
      </h1>

      <div className="overflow-hidden flex items-center gap-8 absolute top-[50%] left-[50%] translate-x-[-48%] translate-y-[-50%] text-[#f5f5f5] text-[3rem]">
        <h1
          ref={name1}
          className="translate-y-[-120%] capitalize font-editorial font-extralight italic"
        >
          othman
        </h1>
        <h1 ref={name2} className="translate-y-[120%] capitalize">
          ahmed
        </h1>
      </div>

      <span
        ref={divider}
        className="absolute top-0 left-[50%] translate-x-[-50%] origin-top w-px h-full bg-white scale-y-0"
      ></span>
    </section>
  );
};

export default PageReveal;
