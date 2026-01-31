import { links } from "@/lib/navLinks";
import { socialLinks } from "@/lib/socialLinks";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import CustomEase from "gsap/dist/CustomEase";
import Link from "next/link";
import React, { useRef } from "react";

const NavLinks = ({ isActive }) => {
  const linkRef = useRef(null);
  const socialRef = useRef(null);
  const linkEase = CustomEase.create("link", ".215, .61, .355, 1");

  useGSAP(
    () => {
      if (!isActive) {
        gsap.fromTo(
          ".nav-link",
          { x: "-1rem", y: "2rem", rotateX: 90, opacity: 0 },
          {
            x: 0,
            y: 0,
            rotateX: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.1,
            delay: 0.5,
            ease: linkEase,
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

  useGSAP(
    () => {
      if (!isActive) {
        gsap.fromTo(
          ".social-link",
          { opacity: 0 },
          {
            opacity: 1,
            duration: 1,
            stagger: 0.1,
            delay: 0.75,
            ease: linkEase,
            overwrite: "auto",
          },
        );
      } else {
        gsap.to(".social-link", {
          opacity: 0,
          duration: 0.5,
          overwrite: "auto",
        });
      }
    },
    { scope: socialRef, dependencies: [isActive] },
  );

  return (
    <nav>
      <div
        ref={linkRef}
        className="flex flex-col h-full w-full translate-y-[6rem] translate-x-[2rem] text-[2.875rem]"
      >
        {links.map((link) => (
          <div
            key={link.id}
            className="perspective-[120px] perspective-origin-bottom"
          >
            <div className="nav-link">
              <Link href={link.path} className="block my-[1rem]">
                {link.name}
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div
        ref={socialRef}
        className="translate-y-[15rem] translate-x-[2rem] flex flex-wrap gap-x-[12rem]"
      >
        {socialLinks.map((link) => (
          <Link className="social-link" key={link.id} href={link.path}>
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default NavLinks;
