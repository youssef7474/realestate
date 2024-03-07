import { useState, useEffect } from "react";
import "./Header.css"; // Import CSS file for styling
import TranslateButton from "../../Component/TranslateButton/TranslateButton";
import { MdMapsHomeWork } from "react-icons/md";
import { useTranslation } from "react-i18next";

const Header = () => {
    const [t]=useTranslation()
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`header ${scrolling ? "scrolling" : ""} conatnier`}>
      <div className="logo" style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"5px"}}>
        <div style={{width:"45px",backgroundColor:"#EB6753",display:"flex",alignItems:"center",justifyContent:"center",padding:"5px",borderRadius:"15px"}}>
            <MdMapsHomeWork size={30} />
        </div>
        <div className="text-white		
        ">Homez</div>
      </div>
      <nav className={`menu ${menuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <a href="#home">
                {t('navBar.home')}
            </a>
          </li>
          <li>
            <a href="#about">
                {t('navBar.AboutUs')}
            </a>
          </li>
          <li>
            <a href="#contact">
                {t('navBar.ContactUs')}
            </a>
          </li>
          <li>
            <a href="#services">
                {t('navBar.OurServices')}
            </a>
          </li>
          <li>
            <a href="#products">
                {t('navBar.Products')}
            </a>
          </li>
          <li>
            <TranslateButton />
          </li>
        </ul>
      </nav>
      <div className="menu-toggle" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </header>
  );
};

export default Header;
