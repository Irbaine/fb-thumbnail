import "./page.css";

export default function AnimatedBtn() {
  return (
    <>
      <div className="cont">
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
      <a className="me" href="#" target="_blank"></a>
    </>
  );
}
