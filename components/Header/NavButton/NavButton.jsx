"useClient";

import gsap from "gsap";
import CustomEase from "gsap/dist/CustomEase";
import NavLabel from "../NavLabel/NavLabel";

const NavButton = ({ isActive, setIsActive }) => {
  gsap.registerPlugin(CustomEase);

  const handleButtonClick = () => {
    gsap.to(".slider", {
      y: isActive ? "-100%" : 0,
      duration: 0.5,
      ease: CustomEase.create("navButton", "0.76, 0, 0.24, 1"),
    });
  };

  return (
    <div
      onClick={() => setIsActive(!isActive)}
      className="fixed top-[2rem] right-[2rem] w-[7rem] h-[2.5rem] rounded-[1.5rem] cursor-pointer overflow-hidden uppercase font-[500]"
    >
      <div onClick={handleButtonClick} className="slider w-full h-full">
        <div className="bg-[#c9fd74] w-full h-full flex items-center justify-center">
          <NavLabel label={"menu"} />
        </div>
        <div className="bg-black text-white w-full h-full flex items-center justify-center">
          <NavLabel label={"close"} />
        </div>
      </div>
    </div>
  );
};

export default NavButton;
