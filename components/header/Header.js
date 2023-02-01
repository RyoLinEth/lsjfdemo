import React from 'react'
import { Link } from 'react-scroll'
import NavLink from 'next/link'
import MobileMenu from '../MobileMenu/MobileMenu'
import WalletConnect from './WallectConnector'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Header = (props) => {

    const handleDefaultAccount = (value) => {
        props.defaultAccountChange(value)
    }

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <header id="header" className="wpo-header-style-1">
            <div className="wpo-site-header">
                <nav className="navigation navbar navbar-expand-lg navbar-light">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                                <MobileMenu />
                            </div>
                            <div className="col-lg-2 col-md-6 col-6">
                                <div className="navbar-header">
                                    <Link onClick={ClickHandler} className="navbar-brand site-logo" to="/">
                                        <img src="images/LSJF2.png" alt="" />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-1 col-1">
                                <div id="navbar" className="collapse navbar-collapse navigation-holder">
                                    <button className="menu-close"><i className="ti-close"></i></button>
                                    <ul className="nav navbar-nav mb-2 mb-lg-0">
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
                                            <Link activeClass="active" to="portfolio" spy={true} smooth={true} duration={500}>Portfolio</Link>
                                        </li>
                                        <li>
                                            <Link activeClass="active" to="contact" spy={true} smooth={true} duration={500}>Contact</Link>
                                        </li>
                                        <li>
                                            <Link activeClass="active" to="blog" spy={true} smooth={true} duration={500}>Blog</Link>
                                        </li> */}
                                    </ul>

                                </div>
                            </div>
                            <WalletConnect defaultAccountChange={handleDefaultAccount} />
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header;