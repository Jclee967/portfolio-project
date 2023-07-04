import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className=" w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className=" text-xl mt-20">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. A nam et
          dolorum quam impedit. Animi dignissimos beatae, labore ipsum ratione a
          ad quos sapiente, quidem quibusdam hic natus reprehenderit facilis
          vero cupiditate quaerat expedita culpa velit ipsam quisquam, illo ex
          accusamus modi? Distinctio commodi repellendus ratione sed provident
          odit nesciunt.
        </p>

        <br />

        <p className=" text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
          ratione quisquam facere asperiores expedita reprehenderit! Facere
          neque eveniet totam aliquam? Est tempore, fugiat ducimus ut rem,
          mollitia quaerat nulla minus blanditiis beatae eius fugit unde
          voluptatibus itaque dolore dolor assumenda neque tenetur. Architecto
          dolor at minus quo amet facere iusto?
        </p>
      </div>
    </div>
  );
};

export default About;
