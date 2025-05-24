import { Description, Email, GitHub, LinkedIn } from "@mui/icons-material";
import { Tooltip } from "@mui/material";
import React from "react";

export const Social = () => {
  const cvLink = "/curriculo.pdf";
  const email = "victor.macedo110697@gmail.com";
  const assunto = "Assunto do e-mail";
  const corpo = "Olá, estou entrando em contato através do portfólio.";
  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
    assunto
  )}&body=${encodeURIComponent(corpo)}`;

  return (
    <div>
      <div className="flex w-full justify-center gap-2 pb-8 items-end">
        <Tooltip title="LinkedIn" arrow placement="top">
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
        </Tooltip>
        <Tooltip title="Github" arrow placement="top">
          <div
            className="p-3 bg-[#333238] rounded-lg text-gray-300 hover:bg-[#38373d] hover:text-white cursor-pointer"
            onClick={() =>
              window.open("https://github.com/VictorMacedo13", "_blank")
            }
          >
            <GitHub />
          </div>
        </Tooltip>
        <Tooltip title="Currículo" arrow placement="top">
          <a
            href="https://drive.google.com/file/d/1HIVFlSJ5DC5Z8Ej3VxybBrMIE784iZJS/view?usp=sharing"
            target="_blank"
          >
            <div className="p-3 bg-[#333238] rounded-lg text-gray-300 hover:bg-[#38373d] hover:text-white cursor-pointer">
              <Description />
            </div>
          </a>
        </Tooltip>
        <Tooltip title="E-mail" arrow placement="top">
          <a href={mailtoLink}>
            <div className="p-3 bg-[#333238] rounded-lg text-gray-300 hover:bg-[#38373d] hover:text-white cursor-pointer">
              <Email />
            </div>
          </a>
        </Tooltip>
      </div>
    </div>
  );
};
