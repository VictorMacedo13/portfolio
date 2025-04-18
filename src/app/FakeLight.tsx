//FakeLight

import { useRef, useState } from "react";
import Bulb from "./bulb";
import BrokenBulb from "./brokenbulb";

export default function FakeLight() {
  const [lightMode, setLightMode] = useState(false);

  const notifyInteration = (mode: boolean) => {
    const value = mode ? "on" : "off";
    // gaEvent("light_mode", { value });
  };

  const handleBulbClick = () => {
    if (lightRef.current) {
      lightRef.current.style.boxShadow = "0px 0px 15px 8px yellow";
      lightRef.current.style.opacity = "0.75";
      lightRef.current.style.transition =
        "opacity 500ms ease, box-shadow 500ms ease";
    }

    notifyInteration(!lightMode);

    setTimeout(() => {
      setLightMode(!lightMode);
    }, 500);
  };

  const handleBrokenClick = () => {
    notifyInteration(!lightMode);
  };

  const lightRef = useRef<HTMLDivElement>(null);

  if (!lightMode) {
    return (
      <>
        <div
          className="relative flex w-6 cursor-pointer justify-center pt-1"
          onClick={() => handleBulbClick()}
        >
          <div
            ref={lightRef}
            className="absolute mt-[5px] block h-[10px] w-[10px] rounded-full bg-yellow-400 opacity-0"
          ></div>
          <Bulb />
        </div>
      </>
    );
  }

  return (
    <>
      <div className="w-6 pt-1" onClick={() => handleBrokenClick()}>
        <BrokenBulb />
      </div>
    </>
  );
}
