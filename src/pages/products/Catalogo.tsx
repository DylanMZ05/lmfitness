// Catalogo.tsx
import React from "react";
import CatalogoCard from "./CatalogoCard";

import ParallaxSlider from "../../components/Slider";


const slidesData = [
  {
      imageUrl: "",
      text: "OFERTA 1",
  },
  {
      imageUrl: "",
      text: "OFERTA 2",
  },
  {
      imageUrl: "",
      text: "OFERTA 3",
  },
  {
      imageUrl: "",
      text: "OFERTA 4",
  },
];

const Catalogo: React.FC = () => {
  return (
    <>
      <div className="h-[100px]"></div>
      <section className="mx-4 rounded-2xl flex justify-center">
        <div className="rounded-2xl max-w-4xl w-full">
          {/* Ejemplo de banner */}
          <div className="bg-[url('/assets/fondo-2.jpeg')] flex flex-col items-center justify-center bg-cover bg-center max-w-4xl rounded-lg mb-2 border-3 border-neutral-800/40">
            <div className="w-[100%] flex flex-col items-center justify-center bg-black/60 py-5">
              <img src="assets/logo.jpeg" alt="" className="h-25"/>
              <h3 className="text-center text-white font-semibold text-4xl">NUESTRAS OFERTAS</h3>
              <div className="bg-red-600 h-[3px] w-60 mx-auto mb-3 mt-1 rounded-full"></div>
            </div>
          </div>
          <div className="">
            <ParallaxSlider  slides={slidesData} width=""/>
          </div>
        </div>
      </section>
      <section>
        <CatalogoCard />
      </section>
    </>
  );
}

export default Catalogo;
