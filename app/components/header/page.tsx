"use client";
import React, { useRef, forwardRef } from "react";

import { FaCloudDownloadAlt } from "react-icons/fa";

const Header = forwardRef(function Header({ scrolToRef }) {
  const scroll = () => {
    console.log("hello");
    scrolToRef.current.scrollIntoView({
      behavior: "smooth",
      //block: "end",
      inline: "nearest",
    });
  };

  return (
    <>
      <div className="flex justify-between px-[4%] mb-auto h-auto text-lg">
        <div>
          {" "}
          <FaCloudDownloadAlt className="w-[64px] h-[37px] text-first" />
        </div>
        <button
          className="cursor-help text-second font-bold self-center"
          onClick={scroll}
        >
          How To Use?
        </button>
      </div>
    </>
  );
});

export default Header;

// {behavior:"smooth", block: "end", inline:"nearest"}

// import React, { useRef } from 'react';
// const App = () => {
//   const scollToRef = useRef();
//   return (
//     <div className="container">
//       <button onClick={() => scollToRef.current.scrollIntoView()}>
//         Scroll
//       </button>
//       <div ref={scollToRef}>scroll Me</div>
//     </div>
//   );
// };
// export default App;
