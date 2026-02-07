import { links } from "@/lib/navLinks";
import { socialLinks } from "@/lib/socialLinks";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import CustomEase from "gsap/dist/CustomEase";
import Link from "next/link";
import React, { useRef } from "react";

const NavLinks = ({ isActive }) => {
  const linkEase = CustomEase.create("link", ".215, .61, .355, 1");

  useGSAP(() => {
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
  }, [isActive]);

  useGSAP(() => {
    if (!isActive) {
      gsap.fromTo(
        ".social-link",
        { opacity: 0 },
        {
          opacity: 1,
          duration: 2,
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
  }, [isActive]);

  return (
    <nav>
      <div className="flex flex-col h-full w-full translate-y-[6rem] translate-x-[2rem] text-[2.875rem]">
        {links.map((link) => (
          <div
            key={link.id}
            className="perspective-[120px] perspective-origin-bottom"
          >
            <div className="nav-link opacity-0">
              <Link href={link.path} className="block my-[1rem]">
                {link.name}
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="translate-y-[15rem] translate-x-[2rem] flex flex-wrap gap-x-[12rem]">
        {socialLinks.map((link) => (
          <Link
            className="social-link opacity-0"
            key={link.id}
            href={link.path}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default NavLinks;
