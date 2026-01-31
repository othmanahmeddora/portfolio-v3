import gsap from "gsap";
import SplitText from "gsap/dist/SplitText";
import React from "react";

const NavLabel = ({ label, ease }) => {
  gsap.registerPlugin(SplitText);

  const handleHover = () => {
    let split1 = SplitText.create(".label-1", {
      type: "chars",
    });
    let split2 = SplitText.create(".label-2", {
      type: "chars",
    });

    let tl = gsap.timeline();

    tl.to(split1.chars, { y: "-100%", stagger: 0.1, ease: ease }).to(
      split2.chars,
      {
        y: "-100%",
        stagger: 0.1,
        ease: ease,
      },
      "<",
    );
  };

  return (
    <div
      onMouseEnter={handleHover}
      className="relative flex flex-col items-center justify-center overflow-hidden"
      style={{ lineHeight: 0.85 }}
    >
      <p className="label-1">{label}</p>
      <p className="label-2 absolute top-[100%]">{label}</p>
    </div>
  );
};

export default NavLabel;
