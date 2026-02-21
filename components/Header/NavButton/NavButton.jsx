"useClient";

import gsap from "gsap";
import CustomEase from "gsap/dist/CustomEase";
import NavLabel from "../NavLabel/NavLabel";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

const NavButton = ({ isActive, setIsActive }) => {
  const sliderRef = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(CustomEase);
  });

  const navEase = CustomEase.create("navButton", "0.76, 0, 0.24, 1");

  const toggleMenu = () => {
    setIsActive(!isActive);

    gsap.to(sliderRef.current, {
      y: isActive ? "-100%" : 0,
      duration: 0.5,
      ease: navEase,
      delay: !isActive && ".3",
    });
  };

  return (
    <div
      onClick={toggleMenu}
      className="absolute top-0 right-0 w-[6.5rem] h-[2.5rem] rounded-[1.5rem] cursor-pointer overflow-hidden uppercase font-[400]"
    >
      <div ref={sliderRef} className="slider w-full h-full">
        <div className="bg-[#c9fd74] w-full h-full flex items-center justify-center">
          <NavLabel label={"menu"} ease={navEase} />
        </div>
        <div className="bg-black text-[#c0fd74] w-full h-full flex items-center justify-center">
          <NavLabel label={"close"} ease={navEase} />
        </div>
      </div>
    </div>
  );
};

export default NavButton;
