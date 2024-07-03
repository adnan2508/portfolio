import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500 p-2'>About</p>
        </div>
        <p className='text-xl mt-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo expedita earum ex ipsa exercitationem inventore dolores voluptate nam nulla sunt, dicta dolorum eaque saepe quidem, totam, nesciunt sed quas fugit et. Eaque eum corrupti veniam officiis earum molestias, velit consectetur vitae quasi, architecto libero cumque, repudiandae itaque deleniti impedit reprehenderit.</p>
      </div>
    </div>
  );
};

export default About;