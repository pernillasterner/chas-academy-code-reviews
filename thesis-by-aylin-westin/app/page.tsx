"use client";

import Image from "next/image";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { FaInstagram, FaTiktok } from "react-icons/fa";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between font-poppins">
      <div></div>
      <nav className="w-full flex items-center justify-between lg:flex p-4">
        <Image
          src="/Logo.png"
          alt="Logo keemchi white"
          width={40}
          height={40}
        />
        <div className="md:block hidden">
          <ul className="flex text-slate-200 space-x-6">
            <li>
              <a
                href="#home"
                className="hover:underline"
                aria-label="Home link"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#restaurants"
                className="hover:underline"
                aria-label="Our Restaurants link"
              >
                Our Restaurants
              </a>
            </li>
            <li>
              <a
                href="#menu"
                className="hover:underline"
                aria-laebl="Menu link"
              >
                Menu
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:underline"
                aria-label="About us link"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:underline"
                aria-label="Contact link"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <button
          onClick={toggleModal}
          className={`hamburger-button md:hidden text-slate-300 text-4xl ${
            isOpen ? "hidden" : ""
          } menu-button`}
        >
          &#9776;
        </button>
        {isOpen && (
          <div className="modal md:hidden text-slate-300">
            <div className="flex justify-between items-center text-2xl">
              <div></div>
              <button onClick={toggleModal} className="close-button">
                &times;
              </button>
            </div>
            <ul>
              <li>
                <a
                  href="#home"
                  className="hover:underline"
                  aria-label="Home link"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#restaurants"
                  className="hover:underline"
                  aria-label="Our Restaurants link"
                >
                  Our Restaurants
                </a>
              </li>
              <li>
                <a
                  href="#menu"
                  className="hover:underline"
                  aria-laebl="Menu link"
                >
                  Menu
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:underline"
                  aria-label="About us link"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:underline"
                  aria-label="Contact link"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
      <div className="h-screen flex justify-center items-center p-4">
        <div className="relative z-10 flex flex-col items-center text-center space-y-10 opacity-85 mb-20">
          <Image
            src="/keemchi.png"
            alt="Keemchi Logo texted"
            width={300}
            height={300}
          />
          <p className="text-white font-light">MODERN KOREAN RESTAURANT</p>
          <p className="text-white font-thin lg:w-2/3 md:w-2/3">
            Explore a fusion of traditional Korean flavors and modern techniques
            in Stockholm and Uppsala
          </p>
          <button className="bg-cream py-2 px-4 rounded opacity-90 hover:opacity-100 w-1/2 lg:w-1/4 md:w-1/4">
            <a
              href="#menu"
              className="text-blue-900 font-semibold"
              aria-label="Menu button"
            >
              Menu
            </a>
          </button>
        </div>
      </div>
      <div></div>
      <footer className="bg-cream text-blue-900 p-10 w-full flex flex-col md:flex-row lg:flex-row justify-around items-start space-y-6 md:space-y-0 lg:space-y-0">
        <div className="flex flex-col items-start space-y-2">
          <Image
            src="/keemchi-blue.png"
            alt="Keemchi Logo texted blue"
            width={100}
            height={100}
          />
          <p>Modern Korean Restaurant</p>
          <Image
            src="/Logo-blue.png"
            alt="Keemchi Logo blue"
            width={30}
            height={30}
          />
        </div>

        <div className="space-y-4">
          <p className="font-bold">QUICK MENU</p>
          <ul className="space-y-2">
            <li>
              <a
                href="#home"
                className="hover:underline"
                aria-label="Home link"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#restaurants"
                className="hover:underline"
                aria-label="Our restaurants link"
              >
                Our Restaurants
              </a>
            </li>
            <li>
              <a
                href="#menu"
                className="hover:underline"
                aria-label="Menu link"
              >
                Menu
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:underline"
                aria-label="About us link"
              >
                About Us
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-2">
          <p className="font-bold">CONTACT</p>
          <p>Phone: +46 704 59 02 99</p>
          <p>
            Email:{" "}
            <a
              href="mailto:info@keemchi.se"
              className="hover:underline"
              aria-label="Email link"
            >
              info@keemchi.se
            </a>
          </p>
        </div>
        <div className="space-y-2">
          <p className="font-bold">SOCIAL</p>
          <div className="flex justify-start space-x-4">
            <a
              href="https://instagram.com"
              className="text-blue-900 hover:underline"
              aria-label="Instagram icon"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://tiktok.com"
              className="text-blue-900 hover:underline"
              aria-label="Tiktok icon"
            >
              <FaTiktok size={24} />
            </a>
          </div>
        </div>
      </footer>
      <div className="bg-cream w-full py-2">
        <hr className="border-t border-blue-900" />
        <p className="text-center mt-2 text-xs">
          © {new Date().getFullYear()} Keemchi. All rights reserved.
        </p>
      </div>
    </main>
  );
}
