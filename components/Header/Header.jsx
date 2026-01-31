"use client";

import React, { useEffect, useRef, useState } from "react";
import NavButton from "./NavButton/NavButton";
import gsap from "gsap";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    gsap.to(menuRef.current, {
      x: !isActive ? "1rem" : "0",
      y: !isActive ? "-1rem" : "0",
      width: !isActive ? "30rem" : "6.5rem",
      height: !isActive ? "40.6rem" : "2.5rem",
    });
  }, [isActive]);

  return (
    <div className="fixed top-[2rem] right-[2rem]">
      <div
        ref={menuRef}
        className="bg-[#c9fd74] w-[6.5rem] h-[2.5rem] rounded-[1.5rem]"
      ></div>
      <NavButton isActive={isActive} setIsActive={setIsActive} />
    </div>
  );
};

export default Header;
