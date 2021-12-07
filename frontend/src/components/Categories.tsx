import React from "react";

const Categories: React.FC = () => {
  return (
    <div className="rounded-3xl w-2/5 h-10 bg-white mt-16">
      <ul className="flex flex-1 justify-evenly items-center h-full" >
        <li className="hover:text-pink-600 cursor-pointer"> Lanches</li>
        <li className="hover:text-pink-600 cursor-pointer"> Lanches doces</li>
        <li className="hover:text-pink-600 cursor-pointer"> Mercearias</li>
        <li className="hover:text-pink-600 cursor-pointer"> Bebidas</li>
        <li className="hover:text-pink-600 cursor-pointer"> Biscoitos</li>
        <li className="hover:text-pink-600 cursor-pointer">...</li>
      </ul>
    </div>
  );
}

export default Categories;
