import React from "react";
import Container from "./Container";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router";

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
            <h6 className="footer-title">Social</h6>
            <div>

              <div>
                <Link to={''} className="flex items-center gap-2">
                  <FaFacebook /> Facebook
                </Link>
                
              </div>

            </div>
          </nav>
          <form>
            <h6 className="footer-title">Newsletter</h6>
            <fieldset className="w-80">
              <label>Enter your email address</label>
              <div className="join">
                <input
                  type="text"
                  placeholder="username@site.com"
                  className="input input-bordered join-item"
                />
                <button className="btn btn-primary join-item">Subscribe</button>
              </div>
            </fieldset>
          </form>
        </footer>
        <p className="text-center text-white">
          Copyright © 2025 - All right reserved
        </p>
      </Container>
    </div>
  );
};

export default Footer;
