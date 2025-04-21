import { Description, Email, GitHub, LinkedIn } from "@mui/icons-material";
import React from "react";

export const Social = () => {
  const cvLink = "/cv.pdf";
  const email = "victor.macedo110697@gmail.com";
  const assunto = "Assunto do e-mail";
  const corpo = "Olá, estou entrando em contato através do portfólio.";
  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
    assunto
  )}&body=${encodeURIComponent(corpo)}`;

  return (
    <div>
      <div className="flex w-full justify-center gap-2 pb-8 items-end">
        <div
          className="p-3 bg-[#333238] rounded-lg text-gray-300 hover:bg-[#38373d] hover:text-white cursor-pointer"
          onClick={() =>
            window.open(
              "https://linkedin.com/in/victor-fernando-macedo",
              "_blank"
            )
          }
        >
          <LinkedIn />
        </div>
        <div
          className="p-3 bg-[#333238] rounded-lg text-gray-300 hover:bg-[#38373d] hover:text-white cursor-pointer"
          onClick={() =>
            window.open("https://github.com/VictorMacedo13", "_blank")
          }
        >
          <GitHub />
        </div>
        <a href={cvLink} download>
          <div className="p-3 bg-[#333238] rounded-lg text-gray-300 hover:bg-[#38373d] hover:text-white cursor-pointer">
            <Description />
          </div>
        </a>
        <a href={mailtoLink}>
          <div className="p-3 bg-[#333238] rounded-lg text-gray-300 hover:bg-[#38373d] hover:text-white cursor-pointer">
            <Email />
          </div>
        </a>
      </div>
    </div>
  );
};
