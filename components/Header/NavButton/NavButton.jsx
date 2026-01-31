import React from "react";

const NavButton = () => {
  return (
    <div className="fixed top-[2rem] right-[2rem] w-[6rem] h-[2.5rem] bg-[#c9fd74] rounded-[1.5rem] cursor-pointer">
      <div className="bg-red-400 w-full h-full flex items-center justify-center">
        Menu
      </div>
      <div className="bg-green-400 w-full h-full flex items-center justify-center">
        Close
      </div>
    </div>
  );
};

export default NavButton;
