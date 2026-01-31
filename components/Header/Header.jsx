"use client";

import React, { useEffect, useRef, useState } from "react";
import NavButton from "./NavButton/NavButton";
import gsap from "gsap";
import CustomEase from "gsap/dist/CustomEase";
import NavLinks from "./NavLinks/NavLinks";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const menuRef = useRef(null);

  const navEase = CustomEase.create("navButton", "0.76, 0, 0.24, 1");

  useEffect(() => {
    gsap.to(menuRef.current, {
      x: !isActive ? "1rem" : "0",
      y: !isActive ? "-1rem" : "0",
      width: !isActive ? "30rem" : "6.5rem",
      height: !isActive ? "40.6rem" : "2.5rem",
      duration: 0.75,
      ease: navEase,
    });
  }, [isActive]);

  return (
    <div className="fixed top-[2rem] right-[2rem]">
      <div
        ref={menuRef}
        className="bg-[#c9fd74] w-full h-full rounded-[1.5rem]"
      >
        <NavLinks />
      </div>
      <NavButton isActive={isActive} setIsActive={setIsActive} />
    </div>
  );
};

export default Header;
