import Image from "next/image";

export default function Lanzamiento() {
  return (
    <div className="flex items-center justify-center px-8 py-8 mx-8 bg-red-100 shadow-2xl rounded-3xl">
      <div className="flex flex-col items-center gap-8 sm:flex-row md:flex-row">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl text-left text-black md:text-center text-apple-system md:text-3xl">
            ¡HER DAO en España!
          </h1>

          <p className="max-w-xl mx-auto mt-8 text-justify">
            Estamos muy contentas de anunciar el lanzamiento de HER DAO en
            España, que pretende empoderar y atraer a más mujeres al ecosistema
            blockchain, Esta iniciativa tiene como objetivo fomentar la
            diversidad y la inclusión en la tecnología, asi como generar
            innovación y crecimiento para las mujeres. Somos un centro de
            colaboración y comunidad que reunirá a mujeres líderes en
            tecnología, empresarias y emprendedoras en blockchain . El objetivo
            es proporcionar un espacio seguro y de apoyo para las mujeres
            interesadas en aprender y desarrollarse personal y profesionalmente.
            A través de organizar una serie de actividades y eventos centrados
            en la educación y el fomento de la colaboración en el ecosistema
            blockchain, pretendemos llegar a la mayor cantidad de mujeres. Desde
            hackathons hasta talleres de desarrollo de habilidades, Consideramos
            que este acontecimiento es un gran paso adelante en el camino hacia
            la igualdad de género en la tecnología blockchain. HER DAO ESPAÑA,
            se compromete a seguir trabajando incansablemente para crear
            oportunidades y empoderar a las mujeres en todo el mundo.
          </p>
        </div>

        <div className="flex flex-col-reverse md:flex-row">
          <Image
            src="/herdaospaincrew.jpg"
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
