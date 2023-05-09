import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";

function Carrusel() {
  const imagenes = ["/foto.jpg", "/foto1.jpg", "/foto2.jpg"];

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
      <div className="relative transform overflow-hidden min-w-xl rounded-lg bg-white text-left shadow-xl p-12 transition-all sm:w-full">
        <div className="mx-auto text-center py-8">
          <h1 class="font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
            Carrusel simple con React + Tailwind
          </h1>
          <p className="mt-4 text-sm text-gray-600">
            Un componente para un simple carrusel de imagenes, hecho con React y Tailwind
          </p>
        </div>
        <div
          className="relative flex "
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
                className={
                  imagenActual === index
                    ? "slide active animate-fade-left"
                    : "slide"
                }
              >
                {imagenActual === index && (
                  <Image
                    className="rounded-xl"
                    key={index}
                    width={1200}
                    height={1200}
                    src={imagen}
                    alt="imagen"
                  />
                )}
              </div>
            );
          })}

          <button
            className="absolute left-4 top-1/3 sm:top-1/2  w-8 h-8 flex justify-center items-center rounded-full shadow-md z-10 bg-gray-100 hover:bg-gray-200"
            onClick={anteriorImagen}
          >
            <svg
              className=" w-4 h-4 font-bold transition duration-500 ease-in-out transform motion-reduce:transform-none text-gray-500 hover:text-gray-600 hover:-translate-x-0.5"
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
            className="absolute right-4 top-1/3 w-8 h-8 sm:top-1/2 flex justify-center items-center rounded-full shadow-md z-10 bg-gray-100 hover:bg-gray-200"
            onClick={siguienteImagen}
          >
            <svg
              className=" w-4 h-4 sm: font-bold transition duration-500 ease-in-out transform motion-reduce:transform-none text-gray-500 hover:text-gray-600 hover:translate-x-0.5"
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
        </div>
        <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-4 left-1/2">
          <button
            className={
              imagenActual === 0
                ? "w-3 h-3 rounded-full shadow-md bg-[#8c3cfc ] hover:bg-gray-200"
                : "w-3 h-3 rounded-full shadow-md bg-gray-100 hover:bg-gray-200"
            }
            onClick={() => setImagenActual(0)}
          ></button>
          <button
            className={
              imagenActual === 1
                ? "w-3 h-3 rounded-full shadow-md bg-[#8c3cfc ] hover:bg-gray-200"
                : "w-3 h-3 rounded-full shadow-md bg-gray-100 hover:bg-gray-200"
            }
            onClick={() => setImagenActual(1)}
          ></button>
          <button
            className={
              imagenActual === 2
                ? "w-3 h-3 rounded-full shadow-md bg-[#8c3cfc ] hover:bg-gray-200"
                : "w-3 h-3 rounded-full shadow-md bg-gray-100 hover:bg-gray-200"
            }
            onClick={() => setImagenActual(2)}
          ></button>
        </div>
      </div>
    </>
  );
}

export default Carrusel;
