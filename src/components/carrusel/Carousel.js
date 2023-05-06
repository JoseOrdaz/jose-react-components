import React from 'react';
import estilos from './Slider.module.css';

function Slider({ imagenes }) {
	// Variables y Estados
	const [imagenActual, setImagenActual] = React.useState(0);
	const cantidad = imagenes?.length;

	// Return prematuro para evitar errores
	if (!Array.isArray(imagenes) || cantidad === 0) return;

	const siguienteImagen = () => {
		setImagenActual(imagenActual === cantidad - 1 ? 0 : imagenActual + 1);
	};

	const anteriorImagen = () => {
		setImagenActual(imagenActual === 0 ? cantidad - 1 : imagenActual - 1);
	};

	return (

	<>
	      <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl border-[#7843E6] border p-12 transition-all sm:w-full">

	 <div class="mx-auto max-w-xl text-center py-12">
      <h2 class="text-4xl font-bold sm:text-5xl">Carrusel React</h2>

      <p class="mt-4 text-gray-300">
        Un componente hecho en react para un carrusel de imagenes. 
      </p>
    </div>
		<div className={estilos.container}>
		
			{imagenes.map((imagen, index) => {
				return (
					<div key={index}
						className={
							imagenActual === index
								? `${estilos.slide} ${estilos.active}`
								: estilos.slide
						}>
						{imagenActual === index && (
							<img class='rounded-xl' key={index} src={imagen} alt="imagen" />
						)}
					</div>
				);
			})}
				<button class='absolute left-8 top-50% w-11 h-11 flex justify-center items-center rounded-full shadow-md z-10 bg-gray-100 hover:bg-gray-200' onClick={anteriorImagen}><svg class=" w-8 h-8 font-bold transition duration-500 ease-in-out transform motion-reduce:transform-none text-gray-500 hover:text-gray-600 hover:-translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7">
            </path>
        </svg></button>
			<button class="absolute right-8 top-50%  w-11 h-11 flex justify-center items-center rounded-full shadow-md z-10 bg-gray-100 hover:bg-gray-200" onClick={siguienteImagen}><svg class=" w-8 h-8 font-bold transition duration-500 ease-in-out transform motion-reduce:transform-none text-gray-500 hover:text-gray-600 hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"></path>
        </svg></button>
		</div>
		</div>

	
	</>
	);
}

export default Slider;