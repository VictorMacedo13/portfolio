"use client";

import FakeLight from "./FakeLight";
import { Description, Email, GitHub, LinkedIn } from "@mui/icons-material";
import { useState } from "react";
import logo from "../assets/dg-logo.png";

export default function Home() {
  const [flipped, setFlipped] = useState(false);
  return (
    <div className="flex justify-center">
      <main className="min-h-screen w-full bg-radial-top flex flex-col justify-center items-center">
        <div className="absolute top-0 right-0 p-5">
          <FakeLight />
        </div>

        <div className="relative w-[400px] h-[598px] [perspective:1000px]">
          <div
            className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
              flipped ? "[transform:rotateY(180deg)]" : ""
            }`}
          >
            <div className="absolute w-full h-full bg-[#201F23] rounded-lg shadow-md flex flex-col items-center text-center [backface-visibility:hidden]">
              <div className="h-48 w-16 bg-radial-bot absolute top-[-160px]"></div>
              <div className="h-10 bg-[#c918ff] flex justify-center items-center pt-5 w-full rounded-lg">
                <div className="w-20 h-3 rounded-lg bg-black"></div>
              </div>
              <div className="triangle border-l-[200px] border-l-transparent border-t-[100px] border-t-[#c918ff] border-r-[200px] border-r-transparent w-6 h-10"></div>
              <div className="w-28 h-28 rounded-full mt-[-68px] z-10 bg-[#ffffff] flex justify-center items-center transition-transform duration-300 hover:scale-150"></div>
              <div className="pt-9 font-semibold text-2xl">Victor Macêdo</div>
              <div>Frontend | Backend | Mobile</div>
              <div className="py-5 w-full flex items-center justify-start flex-col flex-1 ">
                <div className="pb-0">
                  Desenvolvedor fullstack apaixonado por criar experiências
                  únicas com tecnologia.
                </div>
                <div className="flex items-center gap-2 py-5">
                  Atualmente trabalhando na:{" "}
                  <div
                    className="flex items-center gap-1 font-bold p-1 rounded-lg hover:bg-[#38373d] hover:text-white px-2 cursor-pointer"
                    onClick={() =>
                      window.open("https://dgcom.com.br/", "_blank")
                    }
                  >
                    <img
                      className="aspect-auto w-8"
                      src={logo.src}
                      alt="Logo"
                    />
                    Dgcom
                  </div>
                </div>
                <div
                  onClick={() => setFlipped(true)}
                  className="px-4 py-2 bg-[#c918ff] text-white rounded hover:bg-[#b115e6]"
                >
                  Habilidades
                  {/* <ArrowRight /> */}
                </div>
              </div>
              <div className="flex w-full justify-center gap-2 pb-8">
                <div className="p-3 bg-[#333238] rounded-lg text-gray-300 hover:bg-[#38373d] hover:text-white">
                  <LinkedIn />
                </div>
                <div className="p-3 bg-[#333238] rounded-lg text-gray-300 hover:bg-[#38373d] hover:text-white">
                  <GitHub />
                </div>
                <div className="p-3 bg-[#333238] rounded-lg text-gray-300 hover:bg-[#38373d] hover:text-white">
                  <Description />
                </div>
                <div className="p-3 bg-[#333238] rounded-lg text-gray-300 hover:bg-[#38373d] hover:text-white">
                  <Email />
                </div>
              </div>
            </div>

            <div className="absolute w-full h-full bg-[#201F23] rounded-lg shadow-md flex flex-col items-center text-center  [backface-visibility:hidden] [transform:rotateY(180deg)]">
              <div className="h-48 w-16 bg-radial-bot absolute top-[-160px]"></div>
              <div className="h-10 bg-[#c918ff] flex justify-center items-center pt-5 w-full rounded-lg">
                <div className="w-20 h-3 rounded-lg bg-black"></div>
              </div>
              <div className="triangle border-l-[200px] border-l-transparent border-t-[100px] border-t-[#c918ff] border-r-[200px] border-r-transparent w-6 h-10"></div>
              <div className="py-5 w-full flex justify-center flex-1">
                Em desenvolvimento...
              </div>
              <div className="flex w-full justify-center gap-2 pb-8">
                <button
                  onClick={() => setFlipped(false)}
                  className="p-3 bg-[#333238] rounded-lg cursor-pointer text-gray-300 hover:bg-[#38373d] hover:text-white"
                >
                  Virar
                </button>
                <div className="p-3 bg-[#333238] rounded-lg text-gray-300 hover:bg-[#38373d] hover:text-white">
                  <LinkedIn />
                </div>
                <div className="p-3 bg-[#333238] rounded-lg text-gray-300 hover:bg-[#38373d] hover:text-white">
                  <GitHub />
                </div>
                <div className="p-3 bg-[#333238] rounded-lg text-gray-300 hover:bg-[#38373d] hover:text-white">
                  <Description />
                </div>
                <div className="p-3 bg-[#333238] rounded-lg text-gray-300 hover:bg-[#38373d] hover:text-white">
                  <Email />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
