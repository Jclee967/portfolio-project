import React, { useEffect } from "react";
import Reveal, { Fade } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import iconImage from "../assets/icon.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  useEffect(() => {
    document.title = "Jessica Lee | Portfolio";
  }, []);

  const customAnimation = keyframes`
      from {
        opacity: 0;
        transform: translate3d(50px, 0, 0);
      }

      to {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
    `;

  return (
    <div
      name="home"
      className="flex h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-5 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <Fade direction="down">
            <h2 className="text-4xl my-3 sm:text-7xl font-bold text-white">
              Hi! This is <span className=" text-cyan-500">Jessica</span>.
            </h2>
            <h2 className="text-4xl sm:text-7xl font-bold text-white">
              I'm a Full Stack Developer
            </h2>
            <p className=" text-lg text-gray-500 py-4 max-w-lg">
              I have 4 years of experience building and designing software.
              Currently, I love to work on web application using technologies
              like Vue.js, Tailwind and Spring Boot.
            </p>
          </Fade>
          <Fade delay={500}>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group cursor-pointer text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </Fade>
        </div>
        <Reveal keyframes={customAnimation} delay={500}>
          <img
            src={iconImage}
            alt="my profile"
            className="rounded-2xl mx-auto md:w-full hidden lg:block"
          />
        </Reveal>
      </div>
    </div>
  );
};

export default Home;
