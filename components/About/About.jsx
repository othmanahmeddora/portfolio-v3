import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitText from "gsap/dist/SplitText";
import React, { useRef } from "react";

const About = () => {
  const aboutText = useRef(null);

  useGSAP(() => {
    const splitText = new SplitText(aboutText.current, { type: "words" });
    const tl = gsap.timeline();

    tl.from(splitText.words, {
      y: "100%",
      duration: 0.1,
      delay: 9,
      stagger: 0.05,
      ease: "circ.Out",
    });
  }, []);
  return (
    <section className="flex items-center gap-20 py-40 max-w-360 mx-auto">
      <p
        ref={aboutText}
        className="w-250 text-[2.7rem] font-[450] text-dark translate-y-0"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, eveniet,
        quisquam mollitia, labore eaque sunt dolores inventore cumque fugiat
        dolorem sint expedita aliquam quis consequuntur repellat corporis
        distinctio incidunt ut!
      </p>

      <button className="relative overflow-hidden w-60 h-60 bg-dark rounded-full text-light text-[1.2rem] font-[450]">
        <p className="relative z-3">Let&#39;s Talk</p>
        <span className="absolute top-full left-0 w-60 h-60 bg-primary rounded-full"></span>
      </button>
    </section>
  );
};

export default About;
