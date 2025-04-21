import Image from "next/image";
import React from "react";

export const Stack = ({ name, src }: { name: string; src: string }) => {
  return (
    <div className="flex items-center justify-center gap-1 w-fit h-fit p-1 px-2 bg-[#38373D] rounded-lg hover:bg-[#54535a] cursor-pointer transition-colors duration-300">
      <Image src={src} alt="react" width={18} height={18} className="" />
      <span className="font-bold text-white">{name}</span>
    </div>
  );
};
