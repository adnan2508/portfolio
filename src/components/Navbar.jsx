import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const links = [
    {
      id: 1,
      link: 'home'
    },
    {
      id: 2,
      link: 'about'
    },
    {
      id: 3,
      link: 'projects'
    },
    {
      id: 4,
      link: 'education'
    },
    {
      id: 5,
      link: 'contact'
    },
  ];
  return (
    <div className='flex justify-between items-center w-full h-20 bg-black text-white px-4 fixed'>
      <div>
        <h1 className='text-5xl ml-2 font-signature'>Adnan Shiragee</h1>
      </div>

      <ul className='flex'>

        {links.map(link => (
          <li key={link.id} className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-125 duration-200'>{link.link}</li>
        ))
        }
        
      </ul>
    </div>
  );
};

export default Navbar;