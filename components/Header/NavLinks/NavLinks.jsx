import { links } from "@/lib/navLinks";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import React, { useRef } from "react";

const NavLinks = ({ isActive, ease }) => {
  const linkRef = useRef(null);
  useGSAP(
    () => {
      if (!isActive) {
        gsap.fromTo(
          ".nav-link",
          { x: "-2rem", y: "2rem", opacity: 0 },
          {
            x: 0,
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.1,
            delay: 0.5,
            ease: ease,
            overwrite: "auto",
          },
        );
      } else {
        gsap.to(".nav-link", {
          opacity: 0,
          duration: 0.5,
          overwrite: "auto",
        });
      }
    },
    { scope: linkRef, dependencies: [isActive] },
  );

  return (
    <div className="min-h-screen">
      <nav
        ref={linkRef}
        className="flex flex-col h-full w-full translate-y-[6rem] translate-x-[2rem] text-[2.875rem]"
      >
        {links.map((link) => (
          <div key={link.id} className="nav-link">
            <Link href={link.path} className="block my-[1rem]">
              {link.name}
            </Link>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default NavLinks;
