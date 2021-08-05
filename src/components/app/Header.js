import React from 'react';
import { Link } from 'react-router-dom';

const header = `
  bg-white 
  w-full
  h-16 
  flex 
  items-center 
  pl-4 
  z-10 
  border-b-4 
  border-gray-300
`;

const h1 = `
  text-xl 
  font-semibold 
  text-gray-700 
  tracking-wide 
  shadow-2xl
`;

const Header = () => {
  return (
    <header className={header}>
      <Link to={'/'}>
        <h1 className={h1}>Avatar Characters</h1>
      </Link>
    </header>
  )
};

export default Header;