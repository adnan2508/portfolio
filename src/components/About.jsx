import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full py-16 bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 p-2">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          I am Md Adnan Shiragee, a passionate MERN Stack developer with a
          strong foundation in Computer Science and Engineering, which I
          obtained from Daffodil International University. My enthusiasm for web
          development drives me to constantly learn and innovate, even though I
          have yet to gain professional work experience.
        </p>

        <p className="text-xl mt-10">
        Through various personal projects, I have honed my skills in building
        dynamic and responsive web applications. I am eager to leverage my
        knowledge and passion to contribute to exciting web development projects
        and make a meaningful impact in the tech industry.
        </p>
      </div>
    </div>
  );
};

export default About;
