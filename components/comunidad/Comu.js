import Image from "next/image";

export default function Comu() {
  return (
    <div className="flex items-center justify-center px-8 py-8 mx-8 bg-red-100 shadow-2xl rounded-3xl">
      <div className="flex flex-col items-center gap-8 sm:flex-row md:flex-row">
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-left text-black sm:text-2xl md:text-center text-apple-system ">
            Comunidad{" "}
          </h1>

          <p className="max-w-5xl mx-auto mt-8 text-justify">
            H.E.R. España ofrece formación, programas de becas, red de contactos
            y desarrollo profesional para mujeres en todas las etapas de su
            carrera y de cualquier sector, que estén interesadas en la
            tecnología blockchain y en formar parte de una gran comunidad.
          </p>
        </div>
      </div>
    </div>
  );
}
