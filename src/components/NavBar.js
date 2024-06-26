import { CgMenuGridR } from "react-icons/cg";
import { HiMoon } from "react-icons/hi";
import { HiSun } from "react-icons/hi";
import Menu from "./Menu";
import { useState, useEffect } from "react";

const NavBar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [screen, setScreen] = useState(window.innerWidth < 900);
  useEffect(() => {
    if (theme == "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  
  };
  
  
  useEffect(() => {
    const updateScreenSize = () => {
      setScreen(window.innerWidth < 900);
    };

    window.addEventListener("resize", updateScreenSize);

    return () => {
      window.removeEventListener("resize", updateScreenSize);
    };
  }, []);

  return (
    <section className="NAVBAR p-5  max-2xl:px-1 max-xl:px-0 mx-20 sm:mx-20 max-xl:mx-10 mt-5 font-['Poppins']  max-sm:p-2 max-sm:mx-5 max-sm:max-h-[48px]">
      <div className="NAVBAR flex justify-between capitalize">
        <div className="LOGO flex items-center">
          <a
            href="#"
            className="text-3xl bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent dark:text-cyan-500 max-sm:text-2xl"
          >
            {"Ankit{</>}"}
          </a>
          {screen && ( 
            <button onClick={toggleTheme}  className={` mt-1 px-6 ${theme === "dark" ? "text-white" : "text-black"}`}>
              {theme === "dark" ? (
                <HiMoon className="-translate-y-1 text-2xl" />
              ) : (
                <HiSun className="-translate-y-1 text-2xl" />
              )}
            </button>
          )}
        </div>
        <div className="NAVLINKS text-[20px] translate-x-[80px] hidden lg:flex gap-6 max-2xl:gap-3 text-gray-800 dark:text-[#e1e1e1]  ">
        <a
            href="#home"
            className="nav-link  text-lg"
          >
            <button className="px-2 py-2 hover:text-blue-600 dark:hover:text-cyan-500  ">
              Home <span className="top"></span>
              <span className="right"></span>
              <span className="bottom"></span>
              <span className="left"></span>
            </button>
          </a>
          <a
            href="#about"
            className="nav-link  text-lg"
          >
            <button className="px-2 py-2 hover:text-blue-600 dark:hover:text-cyan-500  ">
              About
              <span className="top"></span>
              <span className="right"></span>
              <span className="bottom"></span>
              <span className="left"></span>
            </button>
          </a>
          <a
            href="#experience"
            className="nav-link hover:text-blue-600 dark:hover:text-cyan-500 text-lg"
          >
            <button className="px-2 py-2 hover:text-blue-600 dark:hover:text-cyan-500 ">
              Experiences
              <span className="top"></span>
              <span className="right"></span>
              <span className="bottom"></span>
              <span className="left"></span>
            </button>
          </a>
          <a
            href="#skills"
            className="nav-link  text-lg"
          >
            <button className="hover:text-blue-600 dark:hover:text-cyan-500  px-2 py-2">
              Skills <span className="top"></span>
              <span className="right"></span>
              <span className="bottom"></span>
              <span className="left"></span>
            </button>
          </a>
          <a
            href="#projects"
            className="nav-link hover:text-blue-600 dark:hover:text-cyan-500 text-lg"
          >
            <button className="px-2 py-2 hover:text-blue-600 dark:hover:text-cyan-500 ">
              Projects
              <span className="top"></span>
              <span className="right"></span>
              <span className="bottom"></span>
              <span className="left"></span>
            </button>
          </a>
          <a
            href="#education"
            className="nav-link hover:text-blue-600 dark:hover:text-cyan-500 text-lg"
          >
            <button className="px-2 py-2 ">
              Educations
              <span className="top"></span>
              <span className="right"></span>
              <span className="bottom"></span>
              <span className="left"></span>
            </button>
          </a>
          <a
            href="#contact"
            className="nav-link hover:text-blue-600 dark:hover:text-cyan-500 text-lg"
          >
            <button className="px-2 py-2 hover:text-blue-600 dark:hover:text-cyan-500 ">
              Contact <span className="top"></span>
              <span className="right"></span>
              <span className="bottom"></span>
              <span className="left"></span>
            </button>
          </a>
          <button onClick={toggleTheme} className="p-2 bg-gradient-to-tl">
            {theme === "dark" ? (
              <HiMoon className="-translate-y-1 text-2xl" />
            ) : (
              <HiSun className="-translate-y-1 text-2xl" />
            )}
          </button>
        </div>
        <button onClick={() => setMobileMenu(!mobileMenu)}>
          <CgMenuGridR className="hidden max-lg:block text-[#00040f] dark:text-[#e1e1e1] text-[32px]" />
        </button>
      </div>
      {mobileMenu && <Menu />}
    </section>
  );
};

export default NavBar;
