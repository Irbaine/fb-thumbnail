import "./page.css";
import { useState, useEffect } from "react";
import { cn } from "@/app/utils/page";

export default function AnimatedBtn() {
  const [state, setState] = useState("Unclicked");
  const [count, setCount] = useState(0);

  // function Number({ n, d }) {
  //   const { number } = useSpring({
  //     from: { number: 0 },
  //     number: n,
  //     delay: 2000,
  //     config: { duration: d * 1000, mass: 1, tension: 20, friction: 10 },
  //   });
  //   return <animated.div>{number.to((n) => n.toFixed(0) + "%")}</animated.div>;
  // }

  const [filled, setFilled] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (filled < 100 && isRunning) {
      setTimeout(() => setFilled((prev) => (prev += 2)), 100);
    } else if (filled === 100) {
      setState("Done");
    } else if (isRunning) {
      setState("Running");
    }
  }, [filled, isRunning]);

  return (
    <>
      {/* <div className="cont">
        <a className="fas fa-arrow-alt-circle-down btn" href="#succes">
          <span className="txt">&#68;ownload</span>
        </a>
        <div id="succes">
          <a className="fas fa-times-circle" href="#"></a>
          <div className="fas fa-check status">
            <span className="txt">Done</span>
          </div>
          <div className="loader"></div>
        </div>
      </div>
      <a className="me" href="#" target="_blank"></a> */}

      <div className="mt-4 absolute py-[20px]">
        <a
          className={cn(
            "cursor-pointer  text-white py-2 px-3 rounded shadow-[0_8px_6px_-6px_#555] duration-700 hover:tracking-wider hover:px-4 hover:text-lg",
            {
              //"bg-success cursor-wait": state === "Clicked",
              "bg-first ": state === "Unclicked",
              "bg-success text-black ": state === "Done",
              "bg-none shadow-none": isRunning,
            }
          )}
          onClick={() => {
            setState("Clicked");
            setIsRunning(true);
          }}
        >
          {/* */}
          <span
            className={cn("", {
              "text-white": state === "Unlicked",
              "text-black": state === "Clicked",
              "text-black ": isRunning,
              "text-white ": state === "Done",
            })}
          >
            {state === "Clicked" || isRunning
              ? filled === 100
                ? "Done"
                : filled + "%"
              : "Download"}
          </span>
        </a>

        {/* <div className="text-black"><Number n={100} d={9} /></div> */}

        <div
          className={cn("w-full", {
            block: state == "Clicked",
            hidden: state == "Unclicked",
          })}
        >
          <div
            className={cn(`h-[50px] bg-black shadow w-0`, {
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
      </div>
    </>
  );
}
