import React from "react";
import markdownPreview from "../assets/markdown-previewer.png";
import portfolioSite from "../assets/portfolio-site.png";
import drowsDetection from "../assets/drows-detection.png";

const Portfolio = () => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  const portfolios = [
    {
      id: 4,
      src: portfolioSite,
      demoUrl: "",
      codeUrl: "https://github.com/Jclee967/portfolio-project",
    },
    {
      id: 2,
      src: markdownPreview,
      demoUrl: "https://starlit-lokum-f2efed.netlify.app/",
      codeUrl: "https://github.com/Jclee967/markdown-previewer",
    },
    {
      id: 1,
      src: drowsDetection,
      demoUrl: "",
      codeUrl: "https://github.com/Jclee967/Yolov8-Object-Detection-on-Browser",
    },
  ];
  return (
    <div
      name="portfolio"
      className=" bg-gradient-to-b from-black to-gray-800 w-full h-fit py-20 text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demoUrl, codeUrl }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="aspect-video rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                {demoUrl === "" ? (
                  <button className="w-1/2 px-6 py-3 m-4 opacity-50" disabled>
                    Demo
                  </button>
                ) : (
                  <button
                    className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                    onClick={() => openInNewTab(demoUrl)}
                  >
                    Demo
                  </button>
                )}

                {codeUrl === "" ? (
                  <button className="w-1/2 px-6 py-3 m-4 opacity-50" disabled>
                    Code
                  </button>
                ) : (
                  <button
                    className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                    onClick={() => openInNewTab(codeUrl)}
                  >
                    Code
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
