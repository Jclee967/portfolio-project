import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="flex w-full h-fit py-20 bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className=" text-xl mt-10 leading-loose">
          I am a full stack developer mainly using Java & JavaScript, and
          working in agile development environment.
        </p>

        <br />

        <p className=" text-xl mt-10 leading-loose">
          My specialties include troubleshooting, fast learning, Object-oriented
          programming (OOP), microservices architecture, SOAP/REST API web
          services, Event-Driven designs, and Model View Controller (MVC)
          methods of organizing code. So far I have acquired experience in Java,
          Spring Boot, Hibernate, JPA, JUnit, Selenium, SQL, JavaScript, Vue.js,
          HTML, CSS, and docker. Also, I've been studying React.js, Node.js, and
          AWS cloud computing as I'm enthusiastic to learn more techniques and
          frameworks to improve my work.
        </p>

        <br />

        <p className=" text-xl mt-10 leading-loose">
          I'm also captivated by the potential of AI to generate a new era of
          innovation. As a recent graduate from the postgraduate program of AI,
          I have worked on a diverse range of AI projects, from object detection
          and classification to Natural language processing (NLP) and Retrieval
          Augmented Generation (RAG).
        </p>
      </div>
    </div>
  );
};

export default About;
