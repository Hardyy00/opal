import { MenuIcon } from "lucide-react";
import Image from "next/image";

type Props = {};

const LandingPageNavBar = (props: Props) => {
  return (
    <div className="flex  w-full justify-between items-center">
      <div className="text-3xl font-semibold flex items-center gap-x-3">
        <MenuIcon className="w-6 h-6" />
        <Image
          alt="logo"
          src={"/logo.svg"}
          className="bg-white"
          width={40}
          height={40}
        />
      </div>
      Landing Page Navbar
    </div>
  );
};

export default LandingPageNavBar;
