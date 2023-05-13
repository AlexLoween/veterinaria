import Image from "next/image";

export default function Participacion() {
  return (
    <div className="flex items-center justify-center px-8 py-8 mx-8 shadow-2xl bg-zinc-100 rounded-3xl">
      <div className="flex flex-col items-center gap-8 sm:flex-row md:flex-row">
        <div className="flex flex-col items-center">
          <Image
            src="/hackatons2.jpg"
            alt=""
            width={500}
            height={500}
            className="max-w-full"
          />
        </div>
        <div>
          <h1 className="text-2xl text-left text-black md:text-center text-apple-system md:text-3xl">
            Participación en conferencias
          </h1>

          <p className="max-w-xl mx-auto mt-8 text-justify">
            Nuestra presencia en conferencias es fundamental para lograr un
            impacto en el ecosistema. Ya sea para generar atención, establecer
            nuevas relaciones con inversores o socios de cooperación, así como
            para hacer crecer las relaciones sociales, que son invaluables para
            todo, desde el apoyo emocional hasta las oportunidades futuras. Esta
            actividad será crucial para el crecimiento de los miembros de H.E.R,
            la DAO, también planeamos otorgar becas para asistencia a
            conferencias.
          </p>
        </div>
      </div>
    </div>
  );
}
