import { MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const LandingPageNavBar = (props: Props) => {
  return (
    <div className="flex  w-full justify-between items-center">
      <div className="text-3xl font-semibold flex items-center gap-x-3">
        <MenuIcon className="w-8 h-8" />
        <Image
          alt="logo"
          src={"/logo.svg"}
          className="fill-white"
          width={40}
          height={40}
        />
        Opal
      </div>
      <div className="hidden gap-x-10 items-center lg:flex">
        <Link
          className="bg-[#7320DD] py-2 px-5 font-semibold text-lg rounded-full hover:bg-[#7320DD]/80"
          href="/"
        >
          Home
        </Link>
        <Link href="/">Pricing</Link>
        <Link href="/">Contact</Link>
      </div>
      LandingPageNavBar
    </div>
  );
};

export default LandingPageNavBar;
