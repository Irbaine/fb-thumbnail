"use client";

import { useState } from "react";
import AnimatedBtn from "../button/page";
import clsx from "clsx";
import Progressbar from "../progress/page";

export default function LinkSection({ platform, lang }) {
  function handleChange(event) {}

  const text = {
    en: {
      label: "Video URL",
      button: "Download",
      description: "",
    },
    sp: {
      label: "Video URL",
      button: "Descargar",
      description: "",
    },
    fr: {
      label: "Lien du Video",
      button: "Telecharger",
      description: "",
    },
    ar: {
      label: "Video URL",
      button: "Download",
      description: "",
    },
  };

  const initial = 0;
  const ln = "en";
  const [valid, setValid] = useState<boolean | number>();
  const [empty, setEmpty] = useState(true);
  const [value, setValue] = useState<string | number>();

  console.log(window.location.pathname);

  return (
    <section className="flex flex-row min-h-[200px]  justify-around w-full gap-x-9">
      <div className="flex justify-center w-full h-auto bg-[#ffffff] rounded-lg border-first border-2 border-dotted italic text-second shadow-inner">
        <div className="self-center">Preview </div>
        {/*  Preview */}
      </div>

      {/*               SECTION 2             */}
      <div className="flex flex-wrap w-[90%] py-5 bg-white shadow-3xl rounded-md">
        <div
          className={`flex ${
            lang == "ar" ? "flex-row-reverse basis-[100%]" : "flex-row"
          } items-center justify-center basis-[100%] gap-x-9`}
        >
          <label> {text.en.label} </label>
          <input
            className={clsx(
              "pl-1 focus:bg-transparent bg-gray-50 outline-0 border-2 rounded-md",
              {
                "border-second text-black": empty,
                "!border-first text-black": valid,
                "!border-error text-error ": valid === false,
              }
            )}
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              if (
                e.target.value.includes("fb") ||
                e.target.value.includes("facebook")
              ) {
                setValid(true);
                console.log(value);
                console.log("facebook link");
              } else {
                setValid(0);
              }
            }}
          />
          {/* <Image /> */}
        </div>
        <div className="flex items-center justify-center basis-[100%]">
          {/* <button> {text[props.lang].button} </button> */}
          <AnimatedBtn> {text[lang].button} </AnimatedBtn>
        </div>
      </div>
    </section>
  );
}
