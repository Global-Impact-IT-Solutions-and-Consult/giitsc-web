import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

// Styles
import { Wrapper } from './Navbar.Styles';

// logo
import logo from "../../public/images/GIITSC_LOGO.png"


const Navbar = () => {

  return (
    <>
      <Wrapper>
        <Head>
          <title>GIITSC</title>
          <meta name="description" content="Global Impact " />
          <link rel="icon" href="/logo.png" />
        </Head>
        <section className="top-nav">
          <Link href="/" className="logoPart">
            <Image src={logo} alt="logo" width="65" height="35" />
            {/* <span>GIITSC</span> */}
          </Link>
          <input id="menu-toggle" type="checkbox" />
          <label className="menu-button-container" htmlFor="menu-toggle">
            <div className="menu-button"></div>
          </label>
          <ul className="menu">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About us</Link>
            </li>
            <li>
              <Link href="/stream">Services</Link>
            </li>
            <li>
              <Link href="/leaderboard">Contact</Link>
            </li>
          </ul>
        </section>
      </Wrapper>
    </>
  );
}

export default Navbar