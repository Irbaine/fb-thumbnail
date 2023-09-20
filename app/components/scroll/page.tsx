"use client";

import React, { useRef } from "react";

export default function Scroll() {
  const scollToRef = React.useRef<HTMLInputElement>(null);
  return (
    <div>
      <button
        onClick={() =>
          scollToRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
          })
        }
      >
        Scroll
      </button>
      <div>scroll Me</div>
    </div>
  );
}
