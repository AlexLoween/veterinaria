import Image from "next/image";

export default function Encuentros() {
  return (
    <div className="flex items-center justify-center px-8 py-8 mx-8 bg-red-300 shadow-2xl rounded-3xl">
      <div className="flex flex-col items-center gap-8 sm:flex-row md:flex-row">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl text-left text-black md:text-center text-apple-system md:text-3xl">
            Encuentros
          </h1>

          <p className="max-w-xl mx-auto mt-8 text-justify">
            Mientras que las Hacker House son efectivas caso por caso, los
            encuentros proporcionan un entorno regular para que las mujeres
            establezcan contactos y se capaciten mutuamente. El contenido varía
            desde formatos de incorporación hasta profundizaciones técnicas y
            orientadas a la investigación, así como sesiones de presentación y
            emparejamiento abiertas. La necesidad de crear puntos de encuentro
            centrado en las mujeres está validada y además de la alta tasa de
            interés, porque se necesita un enfoque estructurado para otorgar y
            facilitar el apoyo a las mujeres en el ecosistema blockchain.
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
