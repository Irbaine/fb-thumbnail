import "./style.css";

export default function Flags() {
  return (
    <div className="flex">
      <div className={`w-[30px] h-[20px] francia`}></div>
      <div className={`w-[30px] h-[20px] alemania`}></div>
      <div className={`w-[30px] h-[20px] rusia`}></div>
      <div className={`w-[30px] h-[20px] emiratos-árabes-unidos`}>
        <div className="capa-1"></div>
      </div>
      <div className={`w-[30px] h-[20px] españa`}>
        <div className="capa-1"></div>
      </div>
      <div className={`w-[30px] h-[20px] reino-unido`}>
        {" "}
        <div className="capa-1"></div>
        <div className="capa-2"></div>
        <div className="capa-3"></div>
        <div className="capa-4"></div>
        <div className="capa-5"></div>
        <div className="capa-6"></div>
        <div className="capa-7"></div>
      </div>
    </div>
  );
}
