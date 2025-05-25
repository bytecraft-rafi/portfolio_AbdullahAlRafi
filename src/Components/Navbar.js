import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHome } from "react-icons/ai";
import { BsPerson, BsCodeSlash } from "react-icons/bs";
import { CgFileDocument } from "react-icons/cg";

const Nav = () => {
    const [navbarblur, setnavbarblur] = useState(false);

    function scrollHandler() {
        if (window.scrollY >= 20) {
            setnavbarblur(true);
        } else {
            setnavbarblur(false);
        }
    }

    var showMenu = () => {
        var bar = document.getElementsByClassName("bar");
        var ham = document.getElementsByClassName("NavbarLinks");
        bar[0].classList.toggle("barOne");
        bar[1].classList.toggle("barTwo");
        bar[2].classList.toggle("barThree");
        ham[0].classList.toggle("showNavbar");
    }

    var hideMenu = () => {
        var bar = document.getElementsByClassName("bar");
        var ham = document.getElementsByClassName("NavbarLinks");
        bar[0].classList.remove("barOne");
        bar[1].classList.remove("barTwo");
        bar[2].classList.remove("barThree");
        ham[0].classList.remove("showNavbar");
    }

    window.addEventListener("scroll", scrollHandler);

    return (
        <nav className={navbarblur ? 'Navbar blur' : 'Navbar'}>
            {/* Logo: just AAR, click to home */}
            <h1
                title="Go to Home"
                onClick={() => window.location.href = "/"}
                className='Logo'
                style={{
                    cursor: 'pointer',
                    fontWeight: 800,
                    fontSize: "1.7em",
                    letterSpacing: ".07em",
                    userSelect: "none",
                    margin: 0
                }}
            >
                AAR
            </h1>

            <div className='Hamburger' onClick={showMenu}>
                <span className='bar'></span>
                <span className='bar'></span>
                <span className='bar'></span>
            </div>

            <ul className='NavbarLinks'>
                {/* Home with icon */}
                <li onClick={hideMenu}>
                    <Link to="/"><AiOutlineHome /> Home</Link>
                </li>
                <li onClick={hideMenu}><Link to="/About"><BsPerson /> About</Link></li>
                <li onClick={hideMenu}><Link to="/Education"><CgFileDocument /> Education</Link></li>
                <li onClick={hideMenu}><Link to="/Experience"><CgFileDocument /> Experience</Link></li>
                <li onClick={hideMenu}><Link to="/Project"><BsCodeSlash /> Project</Link></li>
                <li onClick={hideMenu}><Link to="/Publication"><CgFileDocument /> Publication</Link></li>
                <li onClick={hideMenu}><Link to="/Blog"><CgFileDocument /> Blog</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;
