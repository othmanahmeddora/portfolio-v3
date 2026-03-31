import gsap from "gsap";
import React from "react";

const PageReveal = () => {
  CustomEase.create("hop", "0.9, 0, 0.1, 1");
  return (
    <section className="relative z-50 h-screen">
      <div className="absolute bg-[#171717] h-screen w-[50%] top-0 left-0"></div>
      <div className="absolute bg-[#171717] h-screen w-[50%] top-0 left-[50%]"></div>

      <h1 className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-[#f5f5f5] text-[15rem]">
        0
      </h1>

      <div className="flex items-center gap-8 absolute top-[50%] left-[50%] translate-x-[-52%] translate-y-[-50%] text-[#f5f5f5] text-[2.5rem]">
        <h1>othman</h1>
        <h1>ahmed</h1>
      </div>

      <span className="absolute top-0 left-[50%] translate-x-[-50%] origin-[center top] w-px h-full bg-white"></span>
    </section>
  );
};

export default PageReveal;
