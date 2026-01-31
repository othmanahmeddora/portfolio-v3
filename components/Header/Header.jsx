"use client";

import React, { useState } from "react";
import NavButton from "./NavButton/NavButton";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div>
      <NavButton isActive={isActive} setIsActive={setIsActive} />
    </div>
  );
};

export default Header;
