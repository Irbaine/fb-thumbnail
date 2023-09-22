import React, { useState, useEffect } from "react";
import { cn } from "@/app/utils/page";

export default function Progressbar() {
  const [filled, setFilled] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (filled < 100 && isRunning) {
      setTimeout(() => setFilled((prev) => (prev += 2)), 100);
    }
  }, [filled, isRunning]);

  // lets use a switch case

  useEffect(() => {
    setIsRunning(true);
  }, []);

  return (
    <div className="w-full">
      <span className=""> {filled}%</span>

      <div
        className={cn(`h-[10px] bg-success shadow w-0`, {
          "w-0": filled === 0,
          "w-1/12": filled >= 10,
          "w-2/12": filled >= 20,
          "w-3/12": filled >= 30,
          "w-4/12": filled >= 40,
          "w-5/12": filled >= 50,
          "w-6/12": filled >= 60,
          "w-7/12": filled >= 70,
          "w-8/12": filled >= 80,
          "w-9/12": filled >= 90,
          "w-10/12": filled >= 93,
          "w-11/12": filled >= 97,
          "w-full": filled === 100,
        })}
      ></div>
    </div>
  );
}
