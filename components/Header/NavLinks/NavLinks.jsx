import { links } from "@/lib/navLinks";
import Link from "next/link";
import React from "react";

const NavLinks = () => {
  return (
    <div className="min-h-screen">
      <nav className="flex flex-col h-full pt-[5rem] pl-[2rem] text-[2.875rem]">
        {links.map((link) => (
          <div key={link.id}>
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
