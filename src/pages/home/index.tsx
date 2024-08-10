import { ChevronRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { Menu } from "../../components/menu";

export function Home() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 425);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/aboutme");
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 425);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="h-screen flex justify-center items-center overflow-x-hidden overflow-y-hidden">
      <Menu onClick={toggleMenu} />
      <div className="flex flex-col gap-4 text-center items-center mx-2 mobile:mx-4">
        <h1 className="text-6xl font-bold mobile:text-4xl">Yuri Takamisawa</h1>
        <TypeAnimation
          sequence={[
            "Estudante de Tecnologia",
            1500,
            "Desenvolvedor Front-end",
            1500,
            "Desenvolvedor Back-end",
            1500,
          ]}
          wrapper="span"
          speed={60}
          deletionSpeed={60}
          style={{
            fontSize: isMobile ? "1.3em" : "1.8em",
            display: "inline-block",
            fontWeight: "medium",
          }}
          repeat={Infinity}
        />

        <div className="flex justify-center flex-col gap-4">
          <button
            onClick={handleClick}
            className={`relative flex items-center text-lg group 
                        ${isMobile ? "py-2 pl-6 pr-12" : "py-4 pl-8 pr-16"} 
                        bg-white border-2 border-black hover:bg-gray-100 transition-all box-border`}
          >
            <span
              className={`flex ${
                isMobile ? "text-base" : "text-xl"
              } font-medium`}
            >
              Sobre mim
            </span>
            <span className="absolute right-4 flex transition-transform transform group-hover:translate-x-1">
              <ChevronRight />
            </span>
          </button>

          <button
            onClick={handleClick}
            className={`relative flex items-center text-lg group 
                        ${isMobile ? "py-2 pl-6 pr-12" : "py-4 pl-8 pr-16"} 
                        bg-white border-2 border-black hover:bg-gray-100 transition-all box-border`}
          >
            <span
              className={`flex ${
                isMobile ? "text-base" : "text-xl"
              } font-medium`}
            >
              Projetos
            </span>
            <span className="absolute right-4 flex transition-transform transform group-hover:translate-x-1">
              <ChevronRight />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
