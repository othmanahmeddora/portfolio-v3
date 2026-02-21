import gsap from "gsap";
import SplitText from "gsap/dist/SplitText";
import React, { useRef } from "react";

const NavLabel = ({ label, ease }) => {
  const scope = useRef(null);

  const handleHover = () => {
    let ctx = gsap.context(() => {
      const split1 = new SplitText(".label-1", { type: "chars" });
      const split2 = new SplitText(".label-2", { type: "chars" });

      gsap
        .timeline()
        .to(split1.chars, {
          y: "-100%",
          stagger: 0.05,
          duration: 0.4,
          ease: ease,
        })
        .to(
          split2.chars,
          { y: "-100%", stagger: 0.05, duration: 0.4, ease: ease },
          "<",
        );
    }, scope);
  };

  return (
    <div
      ref={scope}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      className="relative flex flex-col items-center justify-center overflow-hidden"
      style={{ lineHeight: 0.85 }}
    >
      <p className="label-1">{label}</p>
      <p className="label-2 absolute top-[100%]">{label}</p>
    </div>
  );
};

export default NavLabel;
