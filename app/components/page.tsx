import AnimatedBtn from "./button/page";
export default function LinkSection({ platform, lang }) {
  function handleChange() {}

  const text = {
    en: {
      label: "Video URL",
      button: "Download",
    },
    sp: {
      label: "Video URL",
      button: "Descargar",
    },
    fr: {
      label: "Lien du Video",
      button: "Telecharger",
    },
    ar: {
      label: "Video URL",
      button: "Download",
    },
  };

  const ln = "en";

  return (
    <section className="flex flex-row-reverse justify-around w-full gap-x-9">
      <div className="bg-black w-full h-[20px]"> {/*  Preview */}</div>
      <div className="w-[90%] bg-white drop-shadow-xl rounded-md">
        <div
          className={`flex ${
            lang == "ar" ? "flex-row-reverse" : "flex-row"
          } items-center justify-center basis-[100%] gap-x-9`}
        >
          <label> {text.en.label} </label>
          <input className="border-2 rounded-md" />
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
