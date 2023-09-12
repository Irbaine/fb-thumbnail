import "./style.css";

export default function Footer() {
  return (
    <footer className=" bg-black w-full text-second max-w-screen-xl px-10 py-6 mt-auto mx-auto overflow-hidden lg:px-8">
      <div className="flex flex-wrap justify-between sm:justify-center">
        <div className="">
          Copyright &copy; {new Date().getFullYear()}, All Right Reserved{" "}
          <a href="" className="text-first">
            Generator
          </a>
        </div>
        <div>
          <li className="xs:block">
            <a href="#" className="hover:text-first ">
              Home
            </a>
          </li>
          <li className="xs:block">
            <a href="#" className="hover:text-first">
              Terms of Service
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-first">
              Privacy Policy
            </a>
          </li>
        </div>
      </div>
    </footer>
  );
}
