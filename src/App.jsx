import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import hero from "./assets/hero.jpg"; // 👈 your hero image
import hero7 from "./assets/hero7.jpg";
import project1 from "./assets/hero4.jpg"; // 👈 example card images
import project2 from "./assets/hero3.jpg";
import project3 from "./assets/hero1.jpg";

import img1 from "./assets/hero4.jpg";
import img2 from "./assets/hero3.jpg";
import img3 from "./assets/hero1.jpg";
import img4 from "./assets/repair.jpg";
import repair1 from "./assets/repair1.jpg";
import repair3 from "./assets/repair3.jpg";

import equity from "./assets/equity.png";
import kcb from "./assets/kcb.png";
import naivas from "./assets/naivas.png";
import cop from "./assets/cop.png";

const images = [img1, img2, img3, img2];

export default function App() {
  const [navBg, setNavBg] = useState(false);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 4000); // change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  // Change navbar bg when scrolling
  useEffect(() => {
    const handleScroll = () => {
      setNavBg(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [navPosition, setNavPosition] = useState("top"); // 'top' or 'bottom'

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      // scrolling down → hide navbar
      setShowNavbar(false);
    } else {
      // scrolling up → show navbar at bottom
      setShowNavbar(true);
      setNavPosition("bottom");
    }

    // if user is near top, reset to top position
    if (window.scrollY < 10) {
      setNavPosition("top");
      setShowNavbar(true);
    }

    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  const scrollToBottom = () => {
    const documentHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;
    const scrollPosition = documentHeight - windowHeight;

    window.scrollTo({
      top: scrollPosition,
      behavior: "smooth",
    });
  };

  const myStyle = {
    backgroundImage: `url(${hero})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  const [isBottomNavbarVisible, setIsBottomNavbarVisible] = useState(false);

  useEffect(() => {
    const handleBottomNavbarScroll = () => {
      if (window.scrollY > 100) {
        setIsBottomNavbarVisible(true);
      } else {
        setIsBottomNavbarVisible(false);
      }
    };

    window.addEventListener("scroll", handleBottomNavbarScroll);
    return () => window.removeEventListener("scroll", handleBottomNavbarScroll);
  }, []);

  return (
    <div className="font-sans scroll-smooth">
      <div className="fixed left-4 flex flex-col gap-4 bottom-2 bg-transparent">
        <div className="cursor-pointer" onClick={scrollToTop}>
          <div className="p-1 bg-gray-200 justify-center items-center flex rounded-full">
            <IoIosArrowUp />
          </div>
        </div>
        <div className="cursor-pointer" onClick={scrollToBottom}>
          <div className="p-1 bg-gray-200 justify-center items-center flex rounded-full">
            <IoIosArrowDown />
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav
        className="Sticky   w-full z-50 transition-all duration-500"
  
      >
        <div className="max-w-6xl flex justify-between items-center my-2 mx-4 py-4 px-6 bg-black/50 backdrop-blur-md rounded-lg shadow-lg">
          <h1 className="bg-white p-1 px-4 flex rounded text-2xl font-bold text-blue-600">
            BlueFrost
          </h1>

          <ul className="flex gap-6 bg-white bg-opacity-20 backdrop-blur-md px-4 py-2 rounded-lg">
            <li>
              <a
                href="#home"
                className="text-white drop-shadow-[0_0_8px_rgba(59,130,246,0.9)] transition duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-white drop-shadow-[0_0_8px_rgba(59,130,246,0.9)] transition duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="text-white drop-shadow-[0_0_8px_rgba(59,130,246,0.9)] transition duration-300"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-white drop-shadow-[0_0_8px_rgba(59,130,246,0.9)] transition duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${
          isBottomNavbarVisible
            ? "bottom-0 opacity-100 translate-y-0"
            : "-bottom-20 opacity-0"
        }`}
      >
        <div className="max-w-6xl mx-auto flex justify-center items-center py-4 px-6 ">
          {/* <h1 className="bg-white px-4 py-1 rounded text-2xl font-bold text-blue-600">
            BlueFrost
          </h1> */}

          <ul className="flex gap-6 bg-black/60 backdrop-blur-md px-4 py-2 rounded-lg">
            {["Home", "About", "Services", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-white drop-shadow-[0_0_8px_rgba(59,130,246,0.9)] hover:text-blue-300 transition duration-300"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <section className="relative h-[90vh] overflow-hidden">
        {/* Background image wrapper with fade effect */}
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}

        {/* Overlay + content */}
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center z-20">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Aircon & Refrigeration
            </h1>
            <p className="text-lg md:text-xl mb-6">
              Trusted by top companies for cooling and refrigeration solutions.
            </p>
            <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="px-8 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-500 transition"
              >
                Get a Free Quote
              </a>
              <a
                href="#gallery"
                className="px-8 py-3 bg-white text-blue-600 rounded-lg shadow hover:bg-gray-100 transition"
              >
                View Our Work
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Floating WhatsApp Chat Button */}
      <a
        href="https://wa.me/254700000000"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 z-50"
      >
        <FaWhatsapp size={30} />
      </a>

      <div className="flex flex-col justify-start items-center gap-8 py-12 mt-24 mx-6 sm:mx-8 lg:mx-24">
        <h2 className="text-4xl font-bold text-blue-600 mb-4">About Us</h2>
        <p className="font-light text-gray-400 sm:px-[100px] lg:px-[200px] sm:text-lg text-md">
          At Blue Frost Cooling Solutions, we specialize in providing reliable
          and efficient air conditioning and refrigeration services for both
          residential and commercial clients. With years of experience in the
          HVAC industry, we’ve built a reputation for excellence through quality
          workmanship, timely service, and customer satisfaction. Our team of
          certified technicians is passionate about creating comfortable
          environments whether it’s installing new systems, performing expert
          repairs, or offering preventive maintenance to keep your equipment
          running at peak performance. We have proudly worked with major
          corporates, retail chains, and hospitality businesses, ensuring their
          cooling systems operate efficiently and sustainably.
        </p>
      </div>

      <div className="flex flex-col gap-12">
        {" "}
        <div className="flex sm:flex-row flex-col items-center justify-between gap-8 mx-4">
          <img src={hero} alt="" className="w-[350px] sm:w-[550px] " />
          <IoIosArrowUp size={30} cursor={"pointer"} />
          <div className="flex flex-col justify-center items-center">
            <div className="">
              <h1 className="text-3xl sm:text-4xl text-[#D7B987]">
                Our Our Mission
              </h1>
              <div className="border-b-[#D7B987] border-2 mb-4" />
            </div>
            <p className="font-light text-gray-400 sm:px-[100px] px-0 sm:text-lg text-md">
              Your comfort is our mission and we make it happen with the perfect
              balance of innovation, reliability, and care. Your comfort is our
              mission and we make it happen with the perfect balance of
              innovation, reliability, and care.
            </p>
          </div>
        </div>
        <section id="services" className="bg-white py-20 px-6 text-center">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-blue-600 mb-4">
              Our Services
            </h2>
            <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
              At{" "}
              <span className="text-blue-600 font-semibold">
                Blue Frost Cooling Solutions
              </span>
              , we provide reliable, affordable, and energy-efficient air
              conditioning and refrigeration services for homes, offices, and
              large corporates. Our mission is to keep you cool and comfortable
              — no matter the season.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="bg-blue-50 hover:bg-blue-100 transition-all duration-300 rounded-2xl shadow-md p-8">
                <img
                  src={img4}
                  alt="AC Installation"
                  className="w-50 h-50 mx-auto mb-4 rounded shadow object-cover"
                />
                <h3 className="text-2xl font-semibold text-blue-700 mb-2">
                  AC Installation & Repair
                </h3>
                <p className="text-gray-600">
                  Professional installation, repairs, and servicing for all
                  types of air conditioners from split units to commercial
                  systems.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-blue-50 hover:bg-blue-100 transition-all duration-300 rounded-2xl shadow-md p-8">
                <img
                  src={repair3}
                  alt="Refrigeration Services"
                  className="w-50 h-40 mx-auto mb-4 rounded shadow"
                />
                <h3 className="text-2xl font-semibold text-blue-700 mb-2">
                  Refrigeration Solutions
                </h3>
                <p className="text-gray-600">
                  We install, service, and maintain cold rooms, chillers, and
                  display fridges for supermarkets, restaurants, and industries.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-blue-50 hover:bg-blue-100 transition-all duration-300 rounded-2xl shadow-md p-8">
                <img
                  src={repair1}
                  alt="Preventive Maintenance"
                  className="w-50 h-50 mx-auto mb-4 rounded shadow object-cover"
                />
                <h3 className="text-2xl font-semibold text-blue-700 mb-2">
                  Preventive Maintenance
                </h3>
                <p className="text-gray-600">
                  Keep your systems running at peak performance with regular
                  inspections, cleaning, and maintenance programs.
                </p>
              </div>
            </div>

            <div className="mt-12">
              <a
                href="#contact"
                className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transition"
              >
                Request a Service
              </a>
            </div>
          </div>
        </section>
        <div className="flex sm:flex-row flex-col items-center justify-between gap-8 mx-4">
          <img src={hero} alt="" className="w-[350px] sm:w-[450px] " />
          <IoIosArrowUp size={30} cursor={"pointer"} />
          <div className="flex flex-col justify-center items-center">
            <div className="">
              <h1
                class="play-fair"
                className="text-3xl sm:text-4xl font-serif italic py-3 text-blue-600"
              >
                Our Experience
              </h1>
              <div className="border-2 mb-4" />
            </div>
            <p className="font-light text-gray-400 sm:px-[100px] px-0 sm:text-lg text-md">
              With years of hands on experience in the air conditioning and
              refrigeration industry, Blue Frost Cooling Solutions has built a
              strong reputation for excellence, reliability, and
              professionalism. Our team of certified technicians has
              successfully handled installations, repairs, and maintenance for
              residential homes, office complexes, and large commercial projects
              across the region. We take pride in combining technical expertise
              with modern technology to deliver energy-efficient and
              long-lasting cooling solutions. From diagnostics to complete
              system overhauls, every project is executed with precision,
              safety, and customer satisfaction at the core of what we do.
            </p>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section
        id="home"
        className="h-screen top-24 flex flex-col items-center justify-center bg-cover bg-center text-white text-center relative"
        style={{ backgroundImage: `url(${hero7})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        {/* Hero Content */}
        <div className="relative z-10 px-6 max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Trusted{" "}
            <span className="text-blue-500">Aircon & Refrigeration</span>{" "}
            Experts
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-200">
            Keeping homes and businesses cool with reliable, affordable, and
            professional solutions.
          </p>
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-500 transition"
            >
              Get a Free Quote
            </a>
            <a
              href="#gallery"
              className="px-8 py-3 bg-white text-blue-600 rounded-lg shadow hover:bg-gray-100 transition"
            >
              View Our Work
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-32 max-w-4xl mx-auto px-6 text-center"
      >
        {/* Animated Cards */}
        <div className=" w-full max-w-6xl px-6 z-20">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white bg-opacity-90 backdrop-blur-md rounded-xl shadow-lg overflow-hidden"
            >
              <img
                src={project1}
                alt="Project 1"
                className="w-full h-40 object-cover"
              />
              <div className="p-4 text-gray-800">
                <h3 className="text-lg font-semibold">Corporate Clients</h3>
                <p className="text-sm mt-2">
                  Trusted by top companies for cooling and refrigeration
                  solutions.
                </p>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white bg-opacity-90 backdrop-blur-md rounded-xl shadow-lg overflow-hidden"
            >
              <img
                src={project2}
                alt="Project 2"
                className="w-full h-40 object-cover"
              />
              <div className="p-4 text-gray-800">
                <h3 className="text-lg font-semibold">Proven Expertise</h3>
                <p className="text-sm mt-2">
                  Years of experience delivering reliable cooling solutions.
                </p>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-white bg-opacity-90 backdrop-blur-md rounded-xl shadow-lg overflow-hidden"
            >
              <img
                src={project3}
                alt="Project 3"
                className="w-full h-40 object-cover"
              />
              <div className="p-4 text-gray-800">
                <h3 className="text-lg font-semibold">Affordable Services</h3>
                <p className="text-sm mt-2">
                  High quality services at competitive prices.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
        <section className="bg-gray-100 py-16 mt-12 overflow-hidden">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">
            Trusted By
          </h2>

          <div className="relative">
            <div className="flex animate-slide gap-8">
              <div className="bg-white shadow p-6 rounded-lg flex-shrink-0">
                <img src={equity} alt="Equity Bank" className="w-[150px]" />
              </div>
              <div className="bg-white shadow p-6 rounded-lg flex-shrink-0">
                <img src={kcb} alt="KCB Bank" className="w-[150px]" />
              </div>
              <div className="bg-white shadow p-6 rounded-lg flex-shrink-0">
                <img src={naivas} alt="Naivas" className="w-[150px]" />
              </div>

              {/* Duplicate logos for smooth infinite loop */}
              <div className="bg-white shadow p-6 rounded-lg flex-shrink-0">
                <img src={equity} alt="Equity Bank" className="w-[150px]" />
              </div>
              <div className="bg-white shadow p-6 rounded-lg flex-shrink-0">
                <img src={kcb} alt="KCB Bank" className="w-[150px]" />
              </div>
              <div className="bg-white shadow p-6 rounded-lg flex-shrink-0">
                <img src={naivas} alt="Naivas" className="w-[150px]" />
              </div>
              <div className="bg-white shadow p-6 rounded-lg flex-shrink-0">
                <img src={cop} alt="Naivas" className="w-[150px]" />
              </div>
            </div>
          </div>
        </section>

        <h2 className="text-3xl font-bold text-blue-600 mb-6 mt-10">
          Contact Us
        </h2>
        <p className="text-gray-700">
          Call us or send a message we’re here to help!
        </p>
        <form className="mt-8 grid gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="border rounded-lg px-4 py-3 w-full"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border rounded-lg px-4 py-3 w-full"
          />
          <textarea
            placeholder="Your Message"
            className="border rounded-lg px-4 py-3 w-full"
            rows="4"
          ></textarea>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-500 transition">
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white text-center py-6">
        <p>&copy; {new Date().getFullYear()} BlueFrost. All rights reserved.</p>
      </footer>
    </div>
  );
}
