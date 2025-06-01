import Image from "next/image";

const Logo: React.FC = () => {
  return (
    <div className="w-[2.5rem] h-[2.5rem] rounded-full bg-white">
      <Image
        alt="logo"
        src={"/cloudy.svg"}
        className="fill-blue-600"
        width={50}
        height={50}
      />
    </div>
  );
};
