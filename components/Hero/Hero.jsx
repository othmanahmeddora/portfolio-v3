"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitText from "gsap/dist/SplitText";
import Image from "next/image";
import React, { useRef } from "react";
import PageReveal from "../Preloaders/PageReveal/PageReveal";

const Hero = () => {
  const title1 = useRef(null);
  const title2 = useRef(null);
  const title3 = useRef(null);
  const pageRevealContainer = useRef(null);
  const scrollDownSpinner = useRef(null);

  useGSAP(() => {
    const split1 = new SplitText(title1.current, {
      type: "chars",
      tag: "span",
      charsClass: "inline-block",
    });
    const split2 = new SplitText(title2.current, {
      type: "chars",
      tag: "span",
      charsClass: "inline-block",
    });
    const split3 = new SplitText(title3.current, {
      type: "chars",
      tag: "span",
      charsClass: "inline-block",
    });

    const tl = gsap.timeline();

    tl.to(pageRevealContainer.current, { display: "none", delay: 8.9 });

    tl.from(
      split1.chars,
      {
        y: "400%",
        stagger: 0.1,
        duration: 1.6,
        ease: "expo.out",
      },
      "-=1.4",
    );

    tl.from(
      split2.chars,
      { y: "400%", stagger: 0.1, duration: 1.6, ease: "expo.out" },
      "<",
    );

    tl.from(
      split3.chars,
      { y: "400%", stagger: 0.1, duration: 1.6, ease: "expo.out" },
      "<",
    );

    tl.from(scrollDownSpinner.current, { y: "160%", duration: 1 }, "-=1");
  }, []);

  return (
    <>
      <section
        ref={pageRevealContainer}
        className="fixed top-0 left-0 h-full w-full z-50"
      >
        <PageReveal />
      </section>

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

        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-[20rem] leading-60 uppercase text-center font-bold z-[-1] text-primary">
          <p ref={title1} className="tracking-[-0.049em] whitespace-nowrap">
            Front-end
          </p>
          <p ref={title2} className="tracking-[-0.033em] whitespace-nowrap">
            Developer
          </p>
          <p ref={title3} className="tracking-[-0.0845em] whitespace-nowrap">
            Freelancer
          </p>
        </div>

        <div
          ref={scrollDownSpinner}
          className="absolute bottom-[10%] left-[50%] translate-x-[-50%] z-3 text-light uppercase font-bold"
        >
          <div className="relative w-35 h-35">
            <svg
              viewBox="0 0 140 140"
              width="140"
              height="140"
              className="absolute top-0 left-0 animate-spin-slow"
            >
              <defs>
                <path
                  id="circlePath"
                  d="M 70,70 m -46,0 a 46,46 0 1,1 92,0 a 46,46 0 1,1 -92,0"
                />
              </defs>
              <circle cx="70" cy="70" r="38" fill="#c9fd74" />
              <text
                fill="#f5f5f5"
                fontSize="12.5"
                fontWeight="600"
                letterSpacing="3.2"
              >
                <textPath href="#circlePath">
                  . SCROLL DOWN . SCROLL DOWN
                </textPath>
              </text>
            </svg>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
              <svg width="25" height="30" viewBox="0 0 16 20" fill="none">
                <line
                  x1="8"
                  y1="0"
                  x2="8"
                  y2="16"
                  stroke="#f5f5f5"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <polyline
                  points="2,10 8,17 14,10"
                  fill="none"
                  stroke="#f5f5f5"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
