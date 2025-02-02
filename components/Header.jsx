"use client";

import Image from "next/image";
import Link from "next/link";

import { menu1 } from "@/public/icons/";
import { LogoSaas1 } from "@/public/images";
import Button from "@/components/Button";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { navLinks } from "@/constants/";

const Header = () => {
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    if (menu) {
      gsap.to("#mobile-nav", {
        left: 0,
        ease: "power1.out",
        duration: 0.4,
      });
      gsap.to("#menu-button", {
        rotate: "90deg",
        duration: 0.4,
        ease: "elastic.out",
      });

      window.scrollTo(0, 0);
    } else {
      gsap.to("#mobile-nav", {
        left: "100%",
        ease: "power1.out",
        duration: 0.4,
      });
      gsap.to("#menu-button", {
        rotate: "0deg",
        duration: 0.4,
        ease: "elastic.out",
      });

      window.scrollTo(0, 0);
    }
  }, [menu]);

  return (
    <header className="w-full container-grid-component h-[80px] py-[20px] flex items-center justify-between">
      <Link href={"/"}>
        <Image width={40} height={40} src={LogoSaas1} alt="logo Saas"></Image>
      </Link>

      <nav className="w-[523px] f  flex items-center gap-[24px] max-sm:hidden">
        {navLinks.map((link) => (
          <Link
            className="text-base text-slate-500 hover:text-slate-800 duration-200"
            href={link.href}
            key={link.href}
          >
            {link.label}
          </Link>
        ))}
        <Button text={"Get for free"} />
      </nav>

      <button
        id="menu-button"
        className="z-30 right-7  max-sm:flex hidden"
        onClick={() => setMenu(!menu)}
      >
        <Image src={menu1} alt="menu icon" width={25} height={25}></Image>
      </button>

      <nav
        id="mobile-nav"
        className="z-20 max-sm:flex hidden   w-full h-screen fixed left-[100%] bg-[#2D51D0]  justify-center items-center top-0 "
      >
        <div className="flex flex-col items-center gap-[60px]">
          {navLinks.map((link) => (
            <Link
              className="text-5xl font-semibold text-white hover:text-slate-300 duration-200"
              href={link.href}
              key={link.href}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
