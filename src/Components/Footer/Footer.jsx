import React from 'react'
import "./Footer.scss"
import ContentWrapper from '../ContentWrapper/ContentWrapper'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                </div>
                <div className="socialIcons">
                    <span className="icon">
                    <FaFacebookSquare />
                    </span>
                    <span className="icon">
                    <FaInstagramSquare />
                    </span>
                    <span className="icon">
                    <FaTwitter />
                    </span>
                    <span className="icon">
                    <FaLinkedin />
                    </span>
                </div>
            </ContentWrapper>
        </footer>
    </div>
  )
}

export default Footer
