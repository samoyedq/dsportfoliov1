import React, { useContext } from "react";
import Brightness2Icon from "@mui/icons-material/Brightness2";
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { ThemeContext } from "../../context/ThemeContext";
import "./Navbar.css"; 
import logo from "../../assets/images/logo.png"; // Adjust the path as necessary

export const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [showNavList, setShowNavList] = React.useState(false);

  const toggleNavList = (id) => {
    const element = document.getElementById(id?.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setShowNavList(!showNavList);
  };

  return (

    <nav className="navbar ">
      {}
      <div className="navbar-logo">
        <img src={logo} alt="Logo" className="logo-image" />
      </div>

      {}
      {/* <ul className="navbar-desktop-menu">
        {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              onClick={() => toggleNavList(`#${item.toLowerCase()}`)}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      {}
      <div className={`navbar-mobile-menu ${showNavList ? 'active' : ''}`}>
        <div className="navbar-mobile-content">
          <ul>
            {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={() => toggleNavList(`#${item.toLowerCase()}`)}
                >
                  {item}
                </a>
              </li>
            ))}
            <li>
              <a
                href=""
                onClick={toggleNavList}
                className="resume-btn"
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div> */}

      {}
      <div className="navbar-right">
        {}
        <a
          href="https://drive.usercontent.google.com/download?id=1ybgs94wItlckdUyx8at6VxCf0giUfU6n&export=download&authuser=0&confirm=t&uuid=3a1a394b-0f78-43aa-bf88-20c2df6fcd56&at=AN8xHooHfuRnuj21ztUPqwJE91nq:1750241532070"
          className="resume-btn"
       
          rel="noreferrer"
        >
          Resume
        </a>

        <button
          type="button"
          onClick={toggleTheme}
          className="theme-toggle-btn"
          aria-label="toggle theme"
        >
          {theme === "dark" ? <WbSunnyRoundedIcon /> : <Brightness2Icon />}
        </button>

         <button
          type="button"
          onClick={() => toggleNavList()}
          className="mobile-toggle-btn"
          aria-label="toggle navigation"
        >
          {showNavList ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
    </nav>

  );
};