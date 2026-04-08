import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitText from "gsap/dist/SplitText";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import React, { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutText = useRef(null);
  const CTAOverlay = useRef(null);

  useGSAP(() => {
    const splitText = new SplitText(aboutText.current, {
      type: "words",
      mask: "words",
    });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: aboutText.current,
        toggleActions: "restart none none none",
      },
    });

    tl.from(splitText.words, {
      y: "100%",
      opacity: 0,
      duration: 0.5,
      // delay: 9,
      stagger: 0.08,
      ease: "circ.out",
    });
  }, []);

  const showOverlay = () => {
    gsap.to(CTAOverlay.current, {
      y: "0",
      duration: 0.5,
      ease: "power3.inOut",
    });
  };

  const hideOverlay = () => {
    gsap.to(CTAOverlay.current, {
      y: "-100%",
      duration: 0.5,
      ease: "power3.inOut",
      onComplete: () => {
        gsap.to(CTAOverlay.current, { y: "100%", duration: 0 });
      },
    });
  };
  return (
    <section className="flex items-center gap-20 py-40 max-w-360 mx-auto">
      <p
        ref={aboutText}
        className="w-250 text-[2.7rem] font-[450] text-dark translate-y-0"
      >
        Let&#39;s go beyond the normal and create something unique, something
        that we could leave our mark on it to be remembered and recognized with.{" "}
        <br />
        I&#39;m waiting for you let&#39;s do it now.
      </p>

      <a
        href={"mailto:othmanahmeddora@gmail.com"}
        onMouseEnter={showOverlay}
        onMouseLeave={hideOverlay}
        data-scroll
        data-scroll-speed="0.2"
        className="relative cursor-pointer overflow-hidden w-60 h-60 bg-dark outline-0 border-0 rounded-full text-light text-[1.2rem] font-[450]"
      >
        <p className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] z-3">
          Let&#39;s Talk
        </p>
        <span
          ref={CTAOverlay}
          className="absolute top-0 left-0 w-60 h-60 translate-y-full outline-0 border-0 bg-primary rounded-full"
        ></span>
      </a>
    </section>
  );
};

export default About;
