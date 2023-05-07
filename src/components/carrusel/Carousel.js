import React from "react";
import { useState, useEffect } from "react";

function Slider({ imagenes }) {
  const [imagenActual, setImagenActual] = useState(0);
  const cantidad = imagenes?.length;

  const [autoPlay, setAutoPlay] = useState(true);
  let timeOut = null;

  useEffect(() => {
    timeOut =
      autoPlay &&
      setTimeout(() => {
        siguienteImagen();
      }, 3500);
  });
  // console.log(imagenActual, cantidad)

  if (!Array.isArray(imagenes) || cantidad === 0) return;

  const siguienteImagen = () => {
    setImagenActual(imagenActual === cantidad - 1 ? 0 : imagenActual + 1);
  };

  const anteriorImagen = () => {
    setImagenActual(imagenActual === 0 ? cantidad - 1 : imagenActual - 1);
  };

  return (
    <>
      <div className="relative transform overflow-hidden min-w-xl rounded-lg bg-white text-left shadow-xl border-[#7843E6] border p-12 transition-all sm:w-full">
        <div className="mx-auto max-w-xl text-center py-12">
          <h2 className="text-4xl font-bold sm:text-5xl">Carrusel React</h2>

          <p className="mt-4 text-gray-300">
            Un componente hecho en react para un carrusel de imagenes.
          </p>
        </div>
        <div
          className="carrusel"
          onMouseEnter={() => {
            setAutoPlay(false);
            clearTimeout(timeOut);
          }}
          onMouseLeave={() => {
            setAutoPlay(true);
          }}
        >
          {imagenes.map((imagen, index) => {
            return (
              <div
                key={index}
                className={imagenActual === index ? "slide active" : "slide"}
              >
                {imagenActual === index && (
                  <img
                    className="rounded-xl"
                    key={index}
                    src={imagen}
                    alt="imagen"
                  />
                )}
              </div>
            );
          })}
          <button
            className="absolute left-8 top-52  w-11 h-11 flex justify-center items-center rounded-full shadow-md z-10 bg-gray-100 hover:bg-gray-200"
            onClick={anteriorImagen}
          >
            <svg
              className=" w-8 h-8 font-bold transition duration-500 ease-in-out transform motion-reduce:transform-none text-gray-500 hover:text-gray-600 hover:-translate-x-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
          </button>
          <button
            className="absolute right-8 top-52 w-11 h-11 flex justify-center items-center rounded-full shadow-md z-10 bg-gray-100 hover:bg-gray-200"
            onClick={siguienteImagen}
          >
            <svg
              className=" w-8 h-8 font-bold transition duration-500 ease-in-out transform motion-reduce:transform-none text-gray-500 hover:text-gray-600 hover:translate-x-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </button>

          <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
            <button
              className={
                imagenActual === 0
                  ? "w-3 h-3 rounded-full shadow-md bg-[#7843E6] hover:bg-gray-200"
                  : "w-3 h-3 rounded-full shadow-md bg-gray-100 hover:bg-gray-200"
              }
              onClick={() => setImagenActual(0)}
            ></button>
            <button
              className={
                imagenActual === 1
                  ? "w-3 h-3 rounded-full shadow-md bg-[#7843E6] hover:bg-gray-200"
                  : "w-3 h-3 rounded-full shadow-md bg-gray-100 hover:bg-gray-200"
              }
              onClick={() => setImagenActual(1)}
            ></button>
            <button
              className={
                imagenActual === 2
                  ? "w-3 h-3 rounded-full shadow-md bg-[#7843E6] hover:bg-gray-200"
                  : "w-3 h-3 rounded-full shadow-md bg-gray-100 hover:bg-gray-200"
              }
              onClick={() => setImagenActual(2)}
            ></button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Slider;
