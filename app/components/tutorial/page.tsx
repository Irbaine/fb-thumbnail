import { PiBracketsCurlyFill, PiPlusCircleFill } from "react-icons/pi";
import { FaCloudDownloadAlt } from "react-icons/fa";
import React from "react";

export default function Tutorial({ scrolToRef }) {
  return (
    <section ref={scrolToRef}>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl text-center">
          How to Download Facebook Video Thumbnail
        </h1>
        <h2>
          A free tool for instantly grabbing and downloading any YouTube
          thumbnail.
        </h2>
      </div>
      <div className="flex justify-between w-full sm:flex-col">
        <div className="flex flex-col justify-between text-center">
          <div className="flex self-center">
            <PiPlusCircleFill className="w-[64px] h-[64px] text-first" />
          </div>
          <h2 className="font-bold text-2xl text-first">
            Add your website URL
          </h2>
          <p className="mx-[3%]">
            Just add the YouTube video URL in the corresponding field.
          </p>
        </div>

        <div className="flex flex-col justify-between text-center">
          <div className="flex self-center">
            <PiBracketsCurlyFill className="w-[64px] h-[64px] text-first" />
          </div>
          <h2 className="font-bold text-2xl text-first">
            Add your website URL
          </h2>
          <p className="mx-[3%]">
            Just add the YouTube video URL in the corresponding field.
          </p>
        </div>

        <div className="flex flex-col justify-between text-center">
          <div className="flex self-center">
            <FaCloudDownloadAlt className="w-[64px] h-[64px] text-first" />
          </div>
          <h2 className="font-bold text-2xl text-first">
            Add your website URL
          </h2>
          <p className="mx-[3%]">
            Just add the YouTube video URL in the corresponding field.
          </p>
        </div>
      </div>
    </section>
  );
}
