import React from 'react';

const Header: React.FC = () => {
  return (
    <div className="container w-full h-60 flex flex-1 flex-col items-center justify-evenly border-b border-gray-50">
      <input type="search" name="search" id="" placeholder="Search Foods" className="h-14 w-96 rounded-3xl p-3 mt-5" />
      <span className="text-3xl ">Explore Foods</span>
    </div>
  );
}

export { Header };
