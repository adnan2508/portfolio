import React from 'react';
import html from '../assets/html.png';
import css from '../assets/css.png';
import js from '../assets/javascript.png';
import tailwind from '../assets/tailwind.png';
import reac from '../assets/react.png';
import node from '../assets/node.png';
import express from '../assets/express.png';
import mongo from '../assets/mongo.png';
import figma from '../assets/figma.png';
import github from '../assets/github.png';
import fire from '../assets/firebase.png';

const Skills = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: 'HTML',
      style: 'shadow-orange-500'
    },
    {
      id: 2,
      src: css,
      title: 'CSS',
      style: 'shadow-blue-500'
    },
    {
      id: 3,
      src: js,
      title: 'JavaScript',
      style: 'shadow-yellow-500'
    },
    {
      id: 4,
      src: reac,
      title: 'React',
      style: 'shadow-blue-600'
    },
    {
      id: 5,
      src: tailwind,
      title: 'Tailwind',
      style: 'shadow-sky-400'
    },
    {
      id: 6,
      src: node,
      title: 'Nodejs',
      style: 'shadow-green-500'
    },
    {
      id: 7,
      src: express,
      title: 'Express',
      style: 'shadow-gray-700'
    },
    {
      id: 8,
      src: mongo,
      title: 'MongoDB',
      style: 'shadow-green-700'
    },
    {
      id: 9,
      src: github,
      title: 'Github',
      style: 'shadow-gray-400'
    },
    {
      id: 10,
      src: fire,
      title: 'Firebase',
      style: 'shadow-yellow-700'
    },
    {
      id: 11,
      src: figma,
      title: 'Figma',
      style: 'shadow-red-500'
    },
  ];
  return (
    <div name='skills' className='py-16 bg-gradient-to-b from-gray-800 to-black w-full '>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
        <div>
          <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Skills</p>
          <p className='py-6'>These are the technologies I have worked with</p>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-3 gap-5 text-center py-8 px-10 sm:px-0'>

          {
            techs.map(tech => (
              <div 
              key={tech.id} 
              className={`shadow-md hover:scale-105 mb-3 duration-500 py-2 rounded-lg ${tech.style}`}>
            <img src={tech.src} alt="" className='w-20 mx-auto'/>
            <p className='mt-4'>{tech.title}</p>
          </div>
            ))
          }
          
        </div>
      </div>
    </div>
  );
};

export default Skills;