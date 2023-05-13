import Image from "next/image";

export default function Experiencia() {
  return (
    <div className="flex items-center justify-center px-8 py-8 mx-8 bg-red-100 shadow-2xl rounded-3xl">
      <div className="flex flex-col items-center gap-8 sm:flex-row md:flex-row">
        <div className="flex flex-col items-center">
          <h1 className="mb-8 text-2xl text-left text-black md:text-center text-apple-system md:text-3xl">
            Experiencia
          </h1>

          <p className="max-w-xl text-justify">
            ¡Participa en un hackathon para obtener experiencia práctica
            trabajando en un proyecto web3! Es una super experiencia que
            mejorará sustancialmente tu currículum, y un tema de conversación
            durante una entrevista O para iniciar una nueva puesta en marcha de
            web3.
          </p>
          <p className="max-w-xl text-justify">
            Charlas, workshops, conferencias, una amplia variedad de eventos
            adheridos al evento principal.
          </p>
          <p className="max-w-xl mx-auto mt-8 text-justify">
            Las mejores fiestas: suelen ser eventos donde la comunidad se reúne
            para celebrar los logros alcanzados. Estas fiestas suelen estar
            llenas de emprendedores, desarrolladores, inversores y otros, que se
            reúnen para conectarse y compartir ideas en un ambiente informal.
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
