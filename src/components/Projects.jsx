import React from 'react';
import conformz from '../assets/conformz.jpg';
import dineease from '../assets/dineease.jpg';
import explorex from '../assets/explorex.jpg';
import { Link } from 'react-router-dom';


const Projects = () => {
  const projects =[
    {
      id: 1,
      name: "Conformz",
      description: 'This is a contest making platform. User can participate in various contests and a contest creator can create and select winner for a particular contest. An Admin can give or block anyone and approves contest from creators.',
      feature: "Add contest, Select winner, Payment method, React toastify",
      tech: "React, Node, MongoDB",
      src: conformz,
      live:'https://conformz.web.app/',
      code: 'https://github.com/adnan2508/conformz'
    },
    {
      id: 2,
      name: "Dine-Ease",
      description: "Dineease is Restaurant Management website. User can add a food item and also he/she can see his/her added food item list in a protected route. User can also purchase food items if it's available for them",
      feature: "Add item, Delete item, Purchase item",
      tech: "React, Node, MongoDB, Tailwind CSS",
      src: dineease,
      live:'https://dineease-5bb20.web.app/',
      code: 'https://github.com/adnan2508/dine-ease'
    },
    {
      id: 3,
      name: "Explorex",
      description: "Explorex is a Tourism Management website. Explorex offers a seamless and immersive experience for travel enthusiasts, providing detailed information on a wide array of breathtaking destinations with user-friendly navigation.",
      feature: "Add tourist spot, Delete spot, Login/Logout method",
      tech: "React, Node, MongoDB, Swipper js",
      src: explorex,
      live:'https://explorex-c0add.web.app/',
      code: 'https://github.com/adnan2508/explorex'
    },
  ];
  return (
    <div name='projects' className='py-16 bg-gradient-to-b from-black to-gray-800 w-full text-white '>

      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 p-2 border-gray-500'>Projects</p>
          <p className='py-6'>Check out some of my works right here</p>
        </div>

        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-10 sm:px-0'>
        {
          projects.map(project => (
            <div key={project.id} className='shadow-md shadow-gray-600 rounded-lg'>
            <img 
            src={project.src} 
            alt="" 
            className='rounded-md duration-200 hover:scale-105'
            />
            <div className='mx-8 my-5'>
              <h2 className='text-xl font-semibold'>{project.name}</h2>
              <p className='text-base mt-5'>{project.description}</p>
              <p className='text-base mt-5'>Features: {project.feature}</p>
              <p className='text-base mt-5'>Technologies: {project.tech}</p>
            </div>
            <div className='flex items-center justify-center'>
              <Link to={project.live} className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Live</Link>
              <Link to={project.code} className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</Link>
            </div>
          </div>
          ))
        }
          
        </div>

      </div>

    </div>
  );
};

export default Projects;