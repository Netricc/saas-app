import Image from "next/image";
import { LogoSaas1 } from "@/public/images";
import { navLinks, socialLinks } from "@/constants";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="w-full bg-black flex justify-center items-center py-[40px] px-[80px] ">
      <div className="flex flex-col items-center gap-[24px]">
        <Image src={LogoSaas1} alt="logo saas" width={60} height={60}></Image>
        <nav className="flex gap-[24px] flex-wrap justify-center">
          {navLinks.map((link) => (
            <Link
              className="text-[#BCBCBC] hover:text-white duration-200"
              href={link.href}
              key={link.href}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex gap-[16px]">
          {socialLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <Image
                src={link.icon}
                width={25}
                height={25}
                alt={link.href}
              ></Image>
            </Link>
          ))}
        </div>

        <p className="text-[14px] text-center text-[#BCBCBC]">
          © 2024 Saas, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
