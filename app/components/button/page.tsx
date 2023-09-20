import { useState } from "react";
import "./page.css";

export default function AnimatedBtn() {
  const [state, setState] = useState("Unclicked");

  // scrollIntoView({ behavior: 'smooth' });

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
          className="cursor-pointer bg-first text-white py-2 px-3 rounded shadow-[0_8px_6px_-6px_#555] duration-700 hover:tracking-wider hover:px-4 hover:text-lg"
          onClick={() => {
            setState("Clicked");
          }}
        >
          <span className="">&#68;ownload</span>
        </a>
        <div className={state == "Clicked" ? "block" : "hidden"}>Loading</div>
      </div>
    </>
  );
}
