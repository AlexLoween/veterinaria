import Image from "next/image";

export default function Dao() {
  return (
    <div className="flex items-center justify-center px-8 py-8 mx-8 bg-red-300 shadow-2xl rounded-3xl">
      <div className="flex flex-col items-center gap-8 sm:flex-row md:flex-row">
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-left text-black md:text-2xl md:text-center text-apple-system">
            Pero ...¿Qué es una DAO?
          </h1>

          <p className="max-w-5xl mx-auto mt-8 text-justify">
            Las DAO, (Organización Autónoma Descentralizada), son una forma
            efectiva y segura de trabajar con personas de ideas afines en por
            todo el mundo. En lugar de estar dirigida por una jerarquía de
            gestión, una DAO es administrada por sus miembros y toma decisiones
            mediante un sistema de votación. Además, las DAO pueden operar sin
            fronteras geográficas y sin necesidad de una entidad extra de
            gestión, lo que permite una mayor flexibilidad y adaptación a los
            cambios en el entorno.
          </p>
        </div>
      </div>
    </div>
  );
}
