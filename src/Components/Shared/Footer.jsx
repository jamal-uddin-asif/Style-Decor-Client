import React from "react";
import Container from "./Container";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { Link } from "react-router";
import Logo from "./Logo";
import { CiMail, CiPhone } from "react-icons/ci";

const Footer = () => {
  return (
    <div className="bg-secondary p-9">
      <Container>
        <footer className="footer sm:footer-horizontal  text-white ">
          <nav>
            <h6 className="footer-title text-2xl">Services</h6>
            <a href="#home" className="link link-hover">
              Home
            </a>
            <a href="#seminar" className="link link-hover">
              Seminar
            </a>
            <a href="#office" className="link link-hover">
              Office
            </a>
            <a href="#wedding" className="link link-hover">
              Weeding{" "}
            </a>
            <a href="#meeting" className="link link-hover">
              Meeting{" "}
            </a>
          </nav>
          <nav>
            <h6 className="footer-title text-2xl">Business working hours</h6>
            <p className="">8am to 4pm</p>
            <p className="">6px to 2am</p>
          </nav>
          <nav>
            <h6 className="footer-title text-2xl">Contact</h6>
            <p className="flex items-center gap-2"><CiMail />asifzehendmg@gmail.com</p>
            <p className="flex items-center gap-2"><CiPhone />+8801610990018</p>
          </nav>
          <nav>
            <h6 className="footer-title">Social</h6>
            <div>

              <div>
                <Link to={'https://www.facebook.com/asifzehendmg/'} className="flex mb-4 items-center gap-2">
                  <FaFacebook size={20} /> Facebook
                </Link>
                <Link to={'https://github.com/jamal-uddin-asif'} className="flex mb-4 items-center gap-2">
                  <FaGithub size={20} /> Github
                </Link>
                
              </div>

            </div>
          </nav>
        <div>
          <Logo></Logo>
        </div>
        </footer>
        <p className="text-center text-white/30">
          Copyright © 2025 - All right reserved
        </p>
      </Container>
    </div>
  );
};

export default Footer;
