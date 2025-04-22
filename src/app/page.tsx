"use client";

import FakeLight from "../components/FakeLight";
import { useState } from "react";
import logo from "../assets/dg-logo.png";
import avatar from "../assets/profile.jpeg";
import { Social } from "@/components/social";
import Image from "next/image";
import { Stack } from "@/components/stack";
import { ArrowBack } from "@mui/icons-material";
import { StackMinor } from "@/components/stackMinor";

export default function Home() {
  const [flipped, setFlipped] = useState(false);
  return (
    <div className="flex justify-center">
      <main className="min-h-screen w-full bg-radial-top flex flex-col justify-center items-center">
        <div className="absolute top-0 right-0 p-5">
          <FakeLight />
        </div>

        <div className="relative w-[400px] h-[598px] [perspective:1000px] text-gray-300">
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

              <div className="w-28 h-28 rounded-full mt-[-68px]  bg-gray-300 flex justify-center items-center transition-transform duration-300 hover:scale-150 z-0 ">
                <Image
                  className="rounded-full w-[108px] h-[108px] object-cover"
                  src={avatar.src}
                  alt="Victor Macêdo"
                  width={108}
                  height={108}
                />
              </div>

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
                    className="flex items-center gap-1 font-bold p-1 py-2 border-[#54535a] border rounded-lg hover:bg-[#38373d] hover:text-white px-2 cursor-pointer transition-colors duration-300"
                    onClick={() =>
                      window.open("https://dgcom.com.br/", "_blank")
                    }
                  >
                    <Image
                      className="aspect-auto w-8"
                      src={logo.src}
                      alt="Logo"
                      width={32}
                      height={32}
                    />
                    Dgcom
                  </div>
                </div>
                <div
                  onClick={() => setFlipped(true)}
                  className="px-4 py-2 bg-[#c918ff] text-white rounded hover:bg-[#b115e6] cursor-pointer transition-colors duration-300"
                >
                  Habilidades
                  {/* <ArrowRight /> */}
                </div>
              </div>
              <Social />
            </div>

            <div className="absolute w-full h-full bg-[#201F23] rounded-lg shadow-md flex flex-col items-center text-center  [backface-visibility:hidden] [transform:rotateY(180deg)]">
              <div className="h-48 w-16 bg-radial-bot absolute top-[-160px]"></div>
              <div className="h-10 bg-[#c918ff] flex justify-center items-center pt-5 w-full rounded-lg">
                <div className="w-20 h-3 rounded-lg bg-black"></div>
              </div>
              <div className="triangle border-l-[200px] border-l-transparent border-t-[100px] border-t-[#c918ff] border-r-[200px] border-r-transparent w-6 h-10"></div>
              <div className="p-5 w-full flex justify-center items-center  flex-wrap  gap-2  flex-1">
                <Stack name="React" src="/react.svg"></Stack>
                <Stack name="TypeScript" src="/ts.svg"></Stack>
                <Stack name="Next.js" src="/next.svg"></Stack>
                <Stack name="Node.js" src="/node.svg"></Stack>
                <Stack name="Express.js" src="/express.svg"></Stack>
                <Stack name="Java" src="/java.svg"></Stack>
                <Stack name="Spring Framework" src="/SPRING.svg"></Stack>
                <Stack name="React Native" src="/react.svg"></Stack>
                <StackMinor
                  name="Tailwind CSS"
                  src="/tailwind.svg"
                ></StackMinor>
                <StackMinor
                  name="PostgreSQL"
                  src="/postgresql.svg"
                ></StackMinor>
                <StackMinor name="MySQL" src="/mysql.svg"></StackMinor>
                <StackMinor name="Docker" src="/docker.svg"></StackMinor>
                <StackMinor
                  name="Kubernetes"
                  src="/kubernetes.svg"
                ></StackMinor>
                <StackMinor name="AWS" src="/aws.svg"></StackMinor>
                <StackMinor name="Figma" src="/figma.svg"></StackMinor>
                <StackMinor name="Git" src="/git.svg"></StackMinor>
                <StackMinor name="Jira" src="/jira.svg"></StackMinor>
                <StackMinor
                  name="Material Ui"
                  src="/materialui.svg"
                ></StackMinor>
                <StackMinor name="MySQL" src="/mysql.svg"></StackMinor>
                <StackMinor
                  name="PostgreSQL"
                  src="/postgresql.svg"
                ></StackMinor>
                <StackMinor name="redux" src="/redux.svg"></StackMinor>

                <div className="w-full flex pt-8  justify-center items-center flex-col">
                  <button
                    onClick={() => setFlipped(false)}
                    className="px-4 py-2  bg-[#c918ff] gap-1 flex justify-center items-center text-white rounded hover:bg-[#b115e6] cursor-pointer transition-colors duration-300 h-fit"
                  >
                    <ArrowBack />
                    Voltar
                  </button>
                </div>
              </div>

              <Social />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
