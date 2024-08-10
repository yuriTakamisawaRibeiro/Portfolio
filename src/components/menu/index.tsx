import { Github, Linkedin } from "lucide-react";
import React, { useState } from "react";

export function Menu({ onClick }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    if (onClick) onClick();
  };

  return (
    <div>
      <button
        onClick={handleToggle}
        className="absolute top-4 right-4 pt-4 pr-4 mobile:pr-2 cursor-pointer flex flex-col justify-center items-center z-50"
      >
        <span
          className={`bg-black block transition-all duration-300 ease-out h-1 w-10 rounded-sm ${
            isOpen ? "transform rotate-45 translate-y-2 mobile:bg-white" : ""
          }`}
        />
        <span
          className={`bg-black block transition-all duration-300 ease-out h-1 w-10 rounded-sm my-1 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={`bg-black block transition-all duration-300 ease-out h-1 w-10 rounded-sm ${
            isOpen ? "transform -rotate-45 -translate-y-2 mobile:bg-white" : ""
          }`}
        />
      </button>

      <div
        className={`fixed top-0 left-0 h-screen transition-all duration-300 ease-out bg-gray-800 shadow-shape z-40 ${
          isOpen ? "w-1/4 mobile:w-full" : "w-0"
        }`}
      >
        {isOpen && (
          <div className="flex flex-col h-full text-white ">
            <div className="flex flex-col items-center justify-center flex-grow  ">
              <a href="#" className="mb-6 text-2xl mobile:text-3xl hover:text-amber-200 transition-all duration-300 ">Inicio</a>
              <a href="#" className="mb-6 text-2xl mobile:text-3xl hover:text-amber-200 transition-all duration-300">Sobre mim</a>
              <a href="#" className="mb-6 text-2xl mobile:text-3xl hover:text-amber-200 transition-all duration-300">Projetos</a>
            </div>
            <div className="flex flex-row justify-center p-5 space-x-4 ">
              <a href="https://www.linkedin.com/in/yuritakamisawa" target="_blank" rel="noopener noreferrer" className="hover:text-amber-200 transition-all duration-300 ">
                <Linkedin size={35} />
              </a>
              <a href="https://github.com/yuriTakamisawaRibeiro" target="_blank" rel="noopener noreferrer" className="hover:text-amber-200 transition-all duration-300">
                <Github size={35} />
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
