import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import React, { useState, useEffect } from "react";

// styles
import {
  Dropdown,
  DropdownLInk,
  DropdownLInkMobile,
  DropdownMobile,
  ExtendedWrapper,
  Hamburger,
  HamburgerMobile,
  InnerWrapper,
  Left,
  LinkHolder,
  LogoHolder,
  NavbarLInk,
  NavbarLInkMobile,
  Right,
  RightInner,
  Wrapper,
} from "./MyNav.Styles";

// icons
import logo from "../../public/icons/nav/logo.png";
import menu from "../../public/icons/nav/hamburger.png";
import { motion, transform, useTransform, useScroll } from "framer-motion";

const MyNavbar = () => {
  const [extendNav, setExtendNav] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [dropdownMobile, setDropdownMobile] = useState(false);
  const [slideAnimate, setSlideAnimate] = useState(false);

  const onWebMenuClick = () => {
    setSlideAnimate(!slideAnimate);
    setDropdown(false);
  };

  const onMobileMenuClick = () => {
    setExtendNav(!extendNav);
    setDropdownMobile(!dropdownMobile);
  };

  return (
    <Wrapper extendNav={extendNav}>
      <Head>
        <title>Global Impact I.T Solutions & Consult</title>
        <meta name="description" content="Global Impact " />
        <link rel="icon" href="/logo.png" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
      </Head>
      {/* Normal menu */}
      <InnerWrapper>
        <Left>
          <Link href="/" className="logoPart">
            <Image src={logo} alt="logo" width="65" height="35" />
          </Link>
        </Left>
        <Right>
          <LinkHolder>
            <NavbarLInk href="/">Home</NavbarLInk>
            <Dropdown dropdown={dropdown}>
              <div
                className="dropdownbtn"
                onClick={() => setDropdown(!dropdown)}
              >
                <span>Services</span>
                <i className="fa fa-caret-down"></i>
              </div>
              <div className="dropdownMenu">
                <DropdownLInk
                  onClick={() => setDropdown(!dropdown)}
                  href="/mobile"
                >
                  Mobile Development
                </DropdownLInk>
                <DropdownLInk
                  onClick={() => setDropdown(!dropdown)}
                  href="/networking"
                >
                  Networking
                </DropdownLInk>
                <DropdownLInk
                  onClick={() => setDropdown(!dropdown)}
                  href="/management"
                >
                  Project Management
                </DropdownLInk>
                <DropdownLInk
                  onClick={() => setDropdown(!dropdown)}
                  href="/training"
                >
                  Training
                </DropdownLInk>
                <DropdownLInk
                  onClick={() => setDropdown(!dropdown)}
                  href="/web"
                >
                  Web Development
                </DropdownLInk>
                <DropdownLInk
                  onClick={() => setDropdown(!dropdown)}
                  href="/marketing"
                >
                  Digital Marketing
                </DropdownLInk>
              </div>
            </Dropdown>
            <NavbarLInk href="/about">About us</NavbarLInk>
            <NavbarLInk href="/contact">Contact</NavbarLInk>

            <Hamburger onClick={() => setExtendNav(!extendNav)}>
              {extendNav ? (
                <>&#10005;</>
              ) : (
                <Image src={menu} alt="logo" width="25" height="32" />
              )}
            </Hamburger>
            <HamburgerMobile onClick={() => setExtendNav(!extendNav)}>
              {extendNav ? (
                <>&#10005;</>
              ) : (
                <Image src={menu} alt="logo" width="25" height="32" />
              )}
            </HamburgerMobile>
          </LinkHolder>
        </Right>
      </InnerWrapper>

      {/* Mobile menu */}
      <ExtendedWrapper>
        {extendNav && (
          <>
            <NavbarLInkMobile onClick={() => setExtendNav(!extendNav)} href="/">
              Home
            </NavbarLInkMobile>
            <DropdownMobile dropdownMobile={dropdownMobile}>
              <div
                className="dropdownbtnMobile"
                onClick={() => setDropdownMobile(!dropdownMobile)}
              >
                <span>Services</span>
                <i className="fa fa-caret-down"></i>
              </div>
              <div className="dropdownMenuMobile">
                <DropdownLInkMobile onClick={onMobileMenuClick} href="/mobile">
                  Mobile Development
                </DropdownLInkMobile>
                <DropdownLInkMobile
                  onClick={onMobileMenuClick}
                  href="/networking"
                >
                  Networking
                </DropdownLInkMobile>
                <DropdownLInkMobile
                  onClick={onMobileMenuClick}
                  href="/management"
                >
                  Project Management
                </DropdownLInkMobile>
                <DropdownLInkMobile
                  onClick={onMobileMenuClick}
                  href="/training"
                >
                  Training
                </DropdownLInkMobile>
                <DropdownLInkMobile onClick={onMobileMenuClick} href="/web">
                  Web Development
                </DropdownLInkMobile>
                <DropdownLInkMobile
                  onClick={onMobileMenuClick}
                  href="/marketing"
                >
                  Digital Marketing
                </DropdownLInkMobile>
              </div>
            </DropdownMobile>
            <NavbarLInkMobile
              onClick={() => setExtendNav(!extendNav)}
              href="/about"
            >
              About us
            </NavbarLInkMobile>
            <NavbarLInkMobile
              onClick={() => setExtendNav(!extendNav)}
              href="/contact"
            >
              Contact
            </NavbarLInkMobile>
          </>
        )}
      </ExtendedWrapper>
    </Wrapper>
  );
};

export default MyNavbar;
