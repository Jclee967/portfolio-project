import React from "react";
import { AiFillHtml5 } from "react-icons/ai";
import {
  BiLogoSpringBoot,
  BiLogoReact,
  BiLogoJavascript,
  BiLogoNodejs,
} from "react-icons/bi";

const Skills = () => {
  const techs = [
    {
      id: 1,
      tag: <AiFillHtml5 key={1} size={100} className="mx-auto" />,
      name: "HTML",
    },
    {
      id: 2,
      tag: <BiLogoJavascript key={2} size={100} className="mx-auto" />,
      name: "Javascript",
    },
    {
      id: 3,
      tag: <BiLogoReact key={3} size={100} className="mx-auto" />,
      name: "React",
    },
    {
      id: 4,
      tag: <BiLogoNodejs key={4} size={100} className="mx-auto" />,
      name: "Node.js",
    },
    {
      id: 5,
      tag: <BiLogoSpringBoot key={4} size={100} className="mx-auto" />,
      name: "Spring Boot",
    },
  ];

  return (
    <div
      name="skills"
      className=" bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className=" max-w-screen-lgm mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Skills
          </p>
          <p className="py-6"> These are technologies I have worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, tag, name }) => (
            <div
              key={id}
              className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg"
            >
              {tag}
              <p className="mt-4">{name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
