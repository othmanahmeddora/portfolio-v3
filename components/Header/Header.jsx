"use client";

import React, { useRef, useState } from "react";
import NavButton from "./NavButton/NavButton";
import gsap from "gsap";
import CustomEase from "gsap/dist/CustomEase";
import NavLinks from "./NavLinks/NavLinks";
import { useGSAP } from "@gsap/react";

const Header = () => {
  const [isActive, setIsActive] = useState(true);
  const menuRef = useRef(null);
  const navEase = CustomEase.create("navButton", "0.76, 0, 0.24, 1");

  useGSAP(() => {
    gsap.to(menuRef.current, {
      x: !isActive && "1rem",
      y: !isActive && "-1rem",
      width: isActive ? "6.5rem" : "30rem",
      height: isActive ? "2.5rem" : "40.6rem",
      duration: 0.75,
      ease: navEase,
      delay: isActive && ".3",
    });
  }, [isActive]);

  return (
    <header>
      <section className="fixed top-8 right-8 z-50">
        <div ref={menuRef} className="bg-[#c9fd74] rounded-3xl w-26 h-10">
          <NavLinks
            isActive={isActive}
            setIsActive={setIsActive}
            ease={navEase}
          />
        </div>
        <NavButton isActive={isActive} setIsActive={setIsActive} />
      </section>
    </header>
  );
};

export default Header;
