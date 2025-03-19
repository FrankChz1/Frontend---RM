import React, { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline"; // Importar íconos de Heroicons

const ExpandableMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Generar texto aleatorio
  const randomText = () => {
    const texts = [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    ];
    const randomIndex = Math.floor(Math.random() * texts.length);
    return texts[randomIndex];
  };

  return (
    <div className="relative min-h-screen bg-gray-100">
      {/* Expandable content */}
      <div
        className={`fixed top-0 left-0 h-full bg-cream transition-all duration-500 ease-in-out ${isOpen ? "w-[20%]" : "w-[5%]"}`}
        style={{
          backgroundColor: isOpen ? "#F5F5DC" : "#6B7280", // Cream color when open, gray when closed
        }}
      >
        <div className="flex flex-col justify-start h-full">
          {/* Button to open/close the menu */}
          <button
            onClick={toggleMenu}
            className="mx-auto mt-6 px-4 py-2 flex items-center bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300"
            aria-label={isOpen ? "Cerrar Menú" : "Abrir Menú"}
          >
            {isOpen ? (
              <>
                <ChevronLeftIcon className="w-5 h-5" />
                Cerrar
              </>
            ) : (
              <>
                <ChevronRightIcon className="w-5 h-5" />
              </>
            )}
          </button>

          {/* Content inside the expandable menu */}
          <div className={`p-6 transition-all duration-100 ease-in-out ${isOpen ? "opacity-100" : "opacity-0"}`}>
            <h3 className="text-xl font-bold text-gray-800">Expandable Menu</h3>
            <p className="text-sm text-gray-600 mt-2">This is some content inside the expandable menu.</p>
          </div>
        </div>
      </div>

      {/* Main content area (right side) */}
      <div
        className={`transition-all duration-500 ease-in-out ${isOpen ? "ml-[20%]" : "ml-[5%]"}`}
        style={{
          marginLeft: isOpen ? "20%" : "5%",
        }}
      >
        {/* Random text */}
        <div className="mb-4 p-6">
          <h2 className="text-2xl font-semibold text-gray-800">Random Text</h2>
          <p className="text-gray-700 mt-2">{randomText()}</p>
        </div>

        {/* Card Views */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all">
            <h4 className="text-xl font-semibold text-gray-800">Card 1</h4>
            <p className="text-gray-600 mt-2">{randomText()}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all">
            <h4 className="text-xl font-semibold text-gray-800">Card 2</h4>
            <p className="text-gray-600 mt-2">{randomText()}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all">
            <h4 className="text-xl font-semibold text-gray-800">Card 3</h4>
            <p className="text-gray-600 mt-2">{randomText()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpandableMenu;
