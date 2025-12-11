import React, { useState } from "react";
import "./Sidebar.css";


import {
    RiHome2Line,
    RiUser3Line,
    RiStackLine,
    RiChat3Line,
    RiFileList3Line,
    RiMoonLine,
    RiSunLine,
    RiMenu2Line,
} from "react-icons/ri";

const Sidebar = (props) => {
    const [toggle, showMenu] = useState(false);

    const handleLinkClick = () => {
        showMenu(false); // closes menu after clicking any link (mobile UX)
    };

    return (
        <>
            <aside className={toggle ? 'aside show-menu' : 'aside'}>
                {/* <a href="#home" className="nav__logo">
                    <img src={props.theme === 'light' ? LightLogo : Logo} alt="logo" />
                </a> */}

                <nav className="nav">
                    <div className="nav__menu">
                        <ul className="nav__list">
                            <li className="nav__item">
                                <a href="#home" className="nav__link" onClick={handleLinkClick}>
                                    <RiHome2Line />
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#about" className="nav__link" onClick={handleLinkClick}>
                                    <RiUser3Line />
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#services" className="nav__link" onClick={handleLinkClick}>
                                    <RiFileList3Line />
                                </a>
                            </li>

                            {/* <li className="nav__item">
                                <a href="#resume" className="nav__link" onClick={handleLinkClick}>
                                    <RiBriefcase2Line />
                                </a>
                            </li> */}

                            <li className="nav__item">
                                <a href="#portfolio" className="nav__link" onClick={handleLinkClick}>
                                    <RiStackLine />
                                </a>
                            </li>

                           

                            <li className="nav__item">
                                <a href="#contact" className="nav__link" onClick={handleLinkClick}>
                                    <RiChat3Line />
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div className="nav__footer">
                    <button 
                        onClick={props.switchTheme} 
                        className="nav__link footer__button"
                    >
                        {props.theme === 'light' ? <RiMoonLine /> : <RiSunLine />}
                    </button>
                </div>
            </aside>

            <div 
                className={toggle ? 'nav__toggle nav__toggle-open' : 'nav__toggle'} 
                onClick={() => showMenu(!toggle)}
            >
                <RiMenu2Line />
            </div>
        </>
    );
};

export default Sidebar;
