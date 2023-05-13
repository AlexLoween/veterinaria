import Image from "next/image";

export default function Hackatones() {
  return (
    <div className="flex items-center justify-center px-8 py-8 mx-8 bg-red-300 shadow-2xl rounded-3xl">
      <div className="flex flex-col items-center gap-8 sm:flex-row md:flex-row">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl text-left text-black md:text-center text-apple-system md:text-3xl">
            Hackatones
          </h1>

          <p className="max-w-xl mx-auto mt-8 text-justify">
            Los Hackatons brindarán una oportunidad para que las mujeres con
            experiencia y en los primeros años de su carrera hackeen juntas,
            creando un sistema de tutoría informal para nutrir el talento. H.E.R
            DAO trabajará para desarrollar concursos de hacking que reflejen los
            objetivos actuales del ecosistema de Harmony. Inicialmente, habrá 2
            hackatones internas más pequeñas que servirán principalmente como
            pilotos y sentarán las bases para proponer formatos a mayor escala
            en una etapa posterior.
          </p>
        </div>

        <div className="flex flex-col-reverse md:flex-row">
          <Image
            src="/experiencia.jpg"
            alt=""
            width={500}
            height={500}
            className="max-w-full"
          />
        </div>
      </div>
    </div>
  );
}
