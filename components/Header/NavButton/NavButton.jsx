"useClient";

import gsap from "gsap";

const NavButton = ({ isActive, setIsActive }) => {
  const handleButtonClick = () => {
    gsap.to(".slider", { y: isActive ? -40 : 0 });
  };

  return (
    <div
      onClick={() => setIsActive(!isActive)}
      className="fixed top-[2rem] right-[2rem] w-[6rem] h-[2.5rem] rounded-[1.5rem] cursor-pointer overflow-hidden"
    >
      <div onClick={handleButtonClick} className="slider w-full h-full">
        <div className="bg-[#c9fd74] w-full h-full flex items-center justify-center">
          Menu
        </div>
        <div className="bg-black text-white w-full h-full flex items-center justify-center">
          Close
        </div>
      </div>
    </div>
  );
};

export default NavButton;
