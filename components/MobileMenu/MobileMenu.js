import React, { Fragment, useState } from 'react';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/List";
import Collapse from "@material-ui/core/Collapse";
import { Link } from 'react-scroll'
import NavLink from 'next/link'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const menus = [
    {
        id: 1,
        title: 'Home',
        link: 'home',
    },

]


const MobileMenu = () => {

    const [openId, setOpenId] = useState(0);
    const [menuActive, setMenuState] = useState(false);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div>
            <div className={`mobileMenu ${menuActive ? "show" : ""}`}>
                <div className="menu-close">
                    <div className="clox" onClick={() => setMenuState(!menuActive)}><i className="ti-close"></i></div>
                </div>

                <ul className="responsivemenu">
                    <li className="menu-item-has-children">
                        <AnchorLink href='#scrool'>Home</AnchorLink>
                    </li>
                    <li>
                        <Link activeClass="active" to="about" spy={true} smooth={true} duration={500}>IDO</Link>
                    </li>
                    <li><Link activeClass="active" to="service" spy={true} smooth={true} duration={500}>關於LBB</Link></li>
                    <li>
                        <Link activeClass="active" to="experience" spy={true} smooth={true} duration={500}>邀請連結</Link>
                    </li>
                    {/* <li>
                        <Link activeClass="active" to="portfolio" spy={true} smooth={true} duration={500} onClick={ClickHandler}>Portfolio</Link>
                    </li>
                    <li>
                        <Link activeClass="active" to="contact" spy={true} smooth={true} duration={500}>Contact</Link>
                    </li>
                    <li>
                        <Link activeClass="active" to="blog" spy={true} smooth={true} duration={500}>Blog</Link>
                    </li> */}
                </ul>

            </div>

            <div className="showmenu" onClick={() => setMenuState(!menuActive)}>
                <button type="button" className="navbar-toggler open-btn">
                    <span className="icon-bar first-angle"></span>
                    <span className="icon-bar middle-angle"></span>
                    <span className="icon-bar last-angle"></span>
                </button>
            </div>
        </div>
    )
}

export default MobileMenu;