import { MenuIcon } from "lucide-react";
import Image from "next/image";

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
      <div className="hidden gap-x-10 items-center lg:flex"></div>
      Landing Page Navbar
    </div>
  );
};

export default LandingPageNavBar;
