import Image from "next/image";

export default function Marketing() {
  return (
    <div className="flex items-center justify-center px-8 py-8 mx-8 shadow-2xl bg-zinc-100 rounded-3xl">
      <div className="flex flex-col items-center gap-8 sm:flex-row md:flex-row">
        <div className="flex flex-col items-center">
          <Image
            src="/hackatons.jpg"
            alt=""
            width={500}
            height={500}
            className="max-w-full"
          />
        </div>
        <div>
          <h1 className="text-2xl text-left text-black md:text-center text-apple-system md:text-3xl">
            Marketing{" "}
          </h1>

          <p className="max-w-xl mx-auto mt-8 text-justify">
            Para el desarrollo de nuestra audiencia y comunidad de
            desarrolladoras, llevaremos a cabo un programa integral de alcance
            global que incluirá networking, conferencias y eventos comunitarios,
            colaborando con otros proyectos. La creación y participación en
            canales como Telegram, Discord y Twitter ayuda a generar más
            atención y a facilitar la construcción de HER DAO. Los medios
            promocionales (visuales) y las campañas basadas en actividades (por
            ejemplo, POAPS como prueba de participación) son otros instrumentos
            para ganar tracción y colectivización.
          </p>
        </div>
      </div>
    </div>
  );
}
