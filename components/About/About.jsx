import React from "react";

const About = () => {
  return (
    <section className="flex items-center gap-20 py-40 max-w-360 mx-auto">
      <p className="w-250 text-[2.7rem] font-[450] text-dark">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, eveniet,
        quisquam mollitia, labore eaque sunt dolores inventore cumque fugiat
        dolorem sint expedita aliquam quis consequuntur repellat corporis
        distinctio incidunt ut!
      </p>

      <button className="relative overflow-hidden w-60 h-60 bg-dark rounded-full text-light text-[1.2rem] font-[450]">
        <p className="relative z-3">Let&#39;s Talk</p>
        <span className="absolute top-full left-0 w-60 h-60 bg-primary rounded-full"></span>
      </button>
    </section>
  );
};

export default About;
