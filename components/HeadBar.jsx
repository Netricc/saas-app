import Image from "next/image";
import Link from "next/link";

import { arrowRight1 } from "@/public/icons";

const HeadBar = () => {
  return (
    <div className="w-full h-[44px] flex items-center justify-center container-grid-section text-white bg-black">
      <p className="max-md:hidden text-[14px] text-gray-300">
        Streamline your workflow and boost your productivity.
      </p>
      <Link
        href={"/"}
        className="flex ml-[12px] items-center hover:text-gray-200 duration-200  text-[12px]"
      >
        <span>Get Started for free</span>
        <Image
          src={arrowRight1}
          width={20}
          height={15}
          alt="arrow-right"
        ></Image>
      </Link>
    </div>
  );
};

export default HeadBar;
