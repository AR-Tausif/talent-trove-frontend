import React from 'react';
type TProps = {
  serial: number;
  title: string;
  desc: string;
};
export const HowWorksCard = ({ serial, title, desc }: TProps) => {
  return (
    <div className="flex flex-wrap justify-center">
      <div className="flex flex-col  border-t-4 border-gray-300 hover:border-indigo-600 p-4 m-2   transition duration-300 ease-in-out">
        <h2 className="text-xl font-bold text-gray-500 mb-2">0{serial}</h2>
        <h1 className="text-lg font-semibold text-gray-800 mb-1 hover:text-indigo-700">
          {title}
        </h1>
        <p className="text-gray-600 text-sm">{desc}</p>
      </div>
    </div>
  );
};
