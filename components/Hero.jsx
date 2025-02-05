import Button from "./Button";
import Link from "next/link";
import Image from "next/image";

import { heroImage1, cylinder, halfTorus } from "@/public/images";

import { arrowRight2 } from "@/public/icons";
const Hero = () => {
  return (
    <div className="h-screen w-full hero-bg overflow-x-hidden">
      <section className="h-full w-full  container-grid-component flex items-center justify-between relative">
        <div className=" z-20">
          <span className="text-[14px] cursor-pointer hover:text-white duration-200 text-slate-900 border border-solid border-slate-300 px-[12px] py-[4px] rounded-[8px]  font-medium">
            Version 2.0 is here
          </span>
          <h1 className="mt-[42px] text-[72px] font-bold leading-[72px] hero-title max-md:text-[60px] max-sm:text-[46px]">
            Pathway to <br /> ProDuctivity
          </h1>
          <p className="w-[478px] max-sm:w-full mt-[32px] text-[20px] text-[#010D3E] ">
            Celebrate the joy of accomplishment with an app designed to track
            your progress, motivate your efforts, and celebrate your successes.
          </p>
          <div className="flex gap-[4px] mt-[30px]">
            <Button text={"Get for free"}></Button>
            <Link
              href={"/"}
              className="flex ml-[12px] items-center font-medium  hover:text-white duration-200  text-[16px]"
            >
              <span>Learn More</span>
              <Image
                src={arrowRight2}
                width={20}
                height={15}
                alt="arrow-right"
              ></Image>
            </Link>
          </div>
        </div>

        <Image
          className="absolute top-[100px] left-[50%]"
          src={cylinder}
          alt="cylinder"
          width={220}
        ></Image>
        <Image
          className="absolute top-[30%] left-[60%]"
          src={heroImage1}
          width={648}
          alt="hero Image"
        ></Image>
      </section>
    </div>
  );
};

export default Hero;
